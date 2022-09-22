import { observable, action, makeObservable } from 'mobx'
import {BE_URL, CameraType, NNType} from '../../constants'
import rgb from './mobilenet-ssd.json'
import depth from './depth.json'
import simulator from './simulator.json'

export default class WebRTC {
  @observable selectedMode = CameraType.RGB
  @observable useNN = false
  @observable isWebRtcConnected = false
  @observable dataChannel = null

  constructor(rootStore) {
    makeObservable(this)
    this.rootStore = rootStore
  }

  @action
  setMode = (value) => {
    this.selectedMode = value
  }

  @action
  setNN = (value) => {
    this.useNN = value
  }

  @action
  setWebRTCStatus = (value) => {
    this.isWebRtcConnected = value
  }

  @action
  onMessage = (evt) => {
    const action = JSON.parse(evt.data)
    console.log(action)
  }

  @action
  startWebRtc = async () => {
    this.initConnection()
    const dataChannel = this.createDataChannel(
      'pingChannel',
      () => console.log('[DC] closed'),
      () => console.log('[DC] opened'),
      this.onMessage
    )
    this.setDataChannel(dataChannel)

    this.addMediaHandles((evt) => {
      if (evt.track.kind === 'video') {
        this.rootStore.videoPlayerStore.setVideoSource(evt.streams[0])
        this.rootStore.videoPlayerStore.setPlaying()
      }
    })

    try {
      await this.negotiate()
    } catch (error) {
      console.error(error.message)
      await this.rootStore.videoPlayerStore.onClick()
    }
  }

  @action
  stopWebRtc = () => {
    if (this.dataChannel && this.dataChannel.readyState === 'open') {
      this.dataChannel.send(
        JSON.stringify({
          type: 'STREAM_CLOSED',
        })
      )
    }
    setTimeout(() => {
      this.closeConnection()
    }, 100)
  }

  @action
  setDataChannel = (value) => {
    this.dataChannel = value
  }

  initConnection = () => {
    this.pc = new RTCPeerConnection()

    // register some listeners to help debugging
    this.pc.addEventListener('icegatheringstatechange', this.onGather, false)
    console.log('[PC] ICE Gathering state: ', this.pc.iceGatheringState)

    this.pc.addEventListener('iceconnectionstatechange', this.onConnect, false)
    console.log('[PC] ICE Connection state: ', this.pc.iceConnectionState)

    this.pc.addEventListener('signalingstatechange', this.onSignal, false)
    console.log('[PC] Signaling state: ', this.pc.signalingState)
  }

  async negotiate() {
    const offer = await this.pc.createOffer()
    await this.pc.setLocalDescription(offer)
    await new Promise((resolve) => {
      if (this.pc.iceGatheringState === 'complete') {
        resolve()
      } else {
        const pc = this.pc
        const checkState = () => {
          if (pc.iceGatheringState === 'complete') {
            pc.removeEventListener('icegatheringstatechange', checkState)
            resolve()
          }
        }
        this.pc.addEventListener('icegatheringstatechange', checkState)
      }
    })
    const response = await fetch(`${BE_URL}/offer`, {
      body: JSON.stringify({
        sdp: this.pc.localDescription.sdp,
        type: this.pc.localDescription.type,
        options: this.selectedMode === CameraType.RGB
            ? { ...rgb, nn_model: this.useNN ? NNType.MOBILENET_SSD : NNType.NONE }
            : this.selectedMode === CameraType.DEPTH ? depth : simulator
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const answer = await response.json()
    if (response.ok) {
      this.setWebRTCStatus(true)
      return this.pc.setRemoteDescription(answer)
    }

    throw new Error(`Unable to start a stream: ${JSON.stringify(answer.detail)}`)
  }

  createDataChannel(name, onClose, onOpen, onMessage) {
    const dc = this.pc.createDataChannel(name, { ordered: true })
    dc.onclose = onClose
    dc.onopen = onOpen
    dc.onmessage = onMessage
    return dc
  }

  onCheckState = () => {
    if (this.pc.iceGatheringState === 'complete') {
      this.pc.removeEventListener('icegatheringstatechange', this.onCheckState)
    }
  }

  onGather = () => {
    console.log('[PC] ICE Gathering state: ', this.pc.iceGatheringState)
  }

  onConnect = () => {
    console.log('[PC] ICE Connection state: ', this.pc.iceConnectionState)
  }

  onSignal = () => {
    console.log('[PC] Signaling state: ', this.pc.signalingState)
  }

  onTrack = (onVideo) => (evt) => {
    if (evt.track.kind === 'video' && onVideo) return onVideo(evt)
  }

  closeConnection() {
    if (this.pc.getTransceivers) {
      this.pc.getTransceivers().forEach((transceiver) => transceiver.stop && transceiver.stop())
    }

    this.pc.getSenders().forEach((sender) => sender.track && sender.track.stop())

    this.pc.removeEventListener('icegatheringstatechange', this.onGather, false)
    this.pc.removeEventListener('iceconnectionstatechange', this.onConnect, false)
    this.pc.removeEventListener('signalingstatechange', this.onSignal, false)
    this.pc.removeEventListener('track', this.onTrack(this.onVideo))
    this.pc.close()
    this.setWebRTCStatus(false)
    this.setDataChannel(null)
  }

  addMediaHandles(onVideo) {
    this.onVideo = onVideo
    if (onVideo) {
      this.pc.addTransceiver('video')
      this.pc.addEventListener('track', this.onTrack(onVideo))
    }
  }
}
