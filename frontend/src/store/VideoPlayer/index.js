import { createRef } from 'react'
import { observable, computed, action, makeObservable } from 'mobx'
import throttle from 'lodash.throttle'
import { BUFFERING_LEEWAY } from '../../constants'
import { formatTime } from '../../util'

class VideoPlayer {
  @observable videoEl = createRef()
  @observable volume = 100
  @observable muted = false
  @observable isFullscreen = false
  @observable timeFormat = {
    hours: true,
    minutes: true,
    seconds: true,
  }
  @observable currentTime = 0
  @observable isPlaying = false
  @observable duration = null
  @observable buffering = false

  constructor(rootStore) {
    makeObservable(this)
    this.rootStore = rootStore
  }

  @computed
  get formattedDuration() {
    return formatTime(this.duration, this.timeFormat)
  }

  @computed
  get isStreamStarted() {
    return this.isPlaying || this.buffering
  }

  onLoadedData = (e) => {
    const { duration } = e.target
    this.timeFormat = {
      hours: duration > 3600,
      minutes: duration > 60,
      seconds: duration > 0,
    }
    this.duration = duration
  }

  @action
  skipTo = (value) => {
    this.currentTime = value
    this.videoEl.current.currentTime = value
  }

  setIsFullscreen = () => {
    this.isFullscreen = document.fullscreenElement === this.videoEl.current.parentNode
  }

  @action
  setPlaying = () => {
    if (this.ended) {
      this.ended = false
      this.skipTo(0)
    }

    this.isPaused = false
    this.isPlaying = true
  }

  @action
  setPause = () => {
    this.isPaused = true
    this.isPlaying = false
  }

  @action
  setMuted = (value) => {
    this.videoEl.current.muted = value
  }

  @action
  start = () => {
    console.log('Videoplayer start')
    this.rootStore.webRTCStore.startWebRtc()
  }

  @action
  stop = () => {
    this.rootStore.webRTCStore.stopWebRtc()
    setTimeout(() => {
      this.handleStopBuffering()
      this.setPause()
      this.handleEnded()
      this.setVideoSource(null)
      this.setDuration(null)
    }, 100)
  }

  @action
  setVideoSource = (value) => {
    this.videoEl.current.srcObject = value
  }

  @action
  setDuration = (value) => {
    this.duration = value
  }

  @action
  setPaused = () => {
    this.videoEl.current.paused = true
  }

  attachEvents = () => {
    const { current: videoElement } = this.videoEl

    videoElement.addEventListener('play', this.start)
    videoElement.addEventListener('pause', this.stop)
    videoElement.addEventListener('loadeddata', this.onLoadedData)
    videoElement.addEventListener('timeupdate', this.handleTimeUpdate)
    videoElement.addEventListener('volumechange', this.handleVolumeChange)
    videoElement.addEventListener('waiting', this.handleStartBuffering)
    videoElement.addEventListener('playing', this.handleStopBuffering)
    videoElement.addEventListener('ended', this.handleEnded)
    videoElement.parentNode.addEventListener('fullscreenchange', this.setIsFullscreen)
  }

  detachEvents = () => {
    const { current: videoElement } = this.videoEl

    if (videoElement) {
      videoElement.removeEventListener('play', this.start)
      videoElement.removeEventListener('pause', this.stop)
      videoElement.removeEventListener('timeupdate', this.handleTimeUpdate)
      videoElement.removeEventListener('volumechange', this.handleVolumeChange)
      videoElement.removeEventListener('waiting', this.handleStartBuffering)
      videoElement.removeEventListener('playing', this.handleStopBuffering)
      videoElement.removeEventListener('ended', this.handleEnded)
      videoElement.parentNode && videoElement.parentNode.removeEventListener('fullscreenchange', this.setIsFullscreen)
    }
  }

  @action
  handleEnded = () => {
    this.ended = true
  }

  handleStartBuffering = () => {
    clearTimeout(this.bufferingTimeout)
    this.bufferingTimeout = setTimeout(() => {
      this.buffering = true
    }, BUFFERING_LEEWAY)
  }

  handleStopBuffering = () => {
    clearTimeout(this.bufferingTimeout)
    this.buffering = false
  }

  @action
  handleVolumeChange = throttle(
    (e) => {
      this.volume = e.target.volume
      this.muted = e.target.muted
    },
    200,
    { leading: true, trailing: true }
  )

  handleTimeUpdate = throttle(
    (e) => {
      this.currentTime = Math.round(e.target.currentTime)
      return this.currentTime
    },
    200,
    { leading: true }
  )

  pause = () => {
    this.videoEl.current.pause()
  }

  @action
  setVolume = (value) => {
    this.videoEl.current.volume = value
    this.setMuted(value === 0)
  }

  @action
  onClick = async () => {
    try {
      if (this.videoEl.current.paused) {
        await this.videoEl.current.play()
      } else {
        await this.videoEl.current.pause()
      }
    } catch (error) {
      console.log('Playback was interrupted')
    }
  }

  @action
  onDoubleClick = () => this.toggleFullscreen()

  @action
  toggleFullscreen = async () => {
    if (document.fullscreenElement === this.videoEl.current.parentNode) {
      await document.exitFullscreen()
    } else {
      await this.videoEl.current.parentNode.requestFullscreen()
    }
  }
}

export default VideoPlayer
