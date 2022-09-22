import ROSLIB from 'roslib'
import { action, makeObservable, observable } from 'mobx'
import { KEY_MESSAGE_TYPE, TELEOP_MESSAGE_TYPE, KEY_TOPIC, RECONNECTION_TIMER, ROSBRIDGE_CONNECTION_URL, TELEOP_TOPIC } from '../../constants'
import throttle from 'lodash.throttle'

const Ros = ROSLIB.Ros
const RosTopic = ROSLIB.Topic
const RosMessage = ROSLIB.Message

class RosController {
  @observable isTeleopReady = false
  @observable isWSConnected = false

  constructor(rootStore) {
    makeObservable(this)
    this.rootStore = rootStore
    this.keyTopic = null
    this.teleopTopic = null
    this.ros = new Ros()

    this.setupListeners()
    this.connect()
  }

  setupListeners = () => {
    document.addEventListener('keydown', this.handleKeyboardShortcuts)
    this.ros.on('connection', () => {
      console.info('Connected to ROS bridge')
      this.setIsWSConnected(true)
      this.keyTopic = new RosTopic({
        ros: this.ros,
        name: KEY_TOPIC,
        messageType: KEY_MESSAGE_TYPE,
      })
      this.teleopTopic = new RosTopic({
        ros: this.ros,
        name: TELEOP_TOPIC,
        messageType: TELEOP_MESSAGE_TYPE,
      })
      this.teleopTopic.subscribe((msg) => this.setIsTeleopReady(msg.data))
    })
    this.ros.on('close', () => {
      console.warn('Disconnected from ROS bridge')
      this.setIsWSConnected(false)
      this.setIsTeleopReady(false)
      setTimeout(() => this.connect(), RECONNECTION_TIMER)
      this.keyTopic = null
      this.teleopTopic = null
    })
    this.ros.on('error', (error) => console.log(error))
  }

  connect = () => {
    try {
      this.ros.connect(ROSBRIDGE_CONNECTION_URL)
    } catch (error) {
      console.error(`Unable to connected to ROS bridge: ${error.toString()}`)
    }
  }

  disconnect = () => {
    this.ros.close()
    this.setIsWSConnected(false)
    this.setIsTeleopReady(false)
  }

  isConnected = () => {
    return this.ros.isConnected
  }

  publishKey = (key) => {
    if (this.keyTopic) {
      const keyMessage = new RosMessage({ data: key })
      this.keyTopic.publish(keyMessage)
    }
  }

  handleKeyboardShortcuts = throttle((e) => {
    const keyName = e.key
    if ([' ', 'spacebar'].includes(keyName)) {
      this.rootStore.videoPlayerStore.onClick()
    } else {
      if (this.isTeleopReady) {
        this.publishKey(keyName)
      }
    }
  }, 50)

  @action
  setIsWSConnected = (value) => {
    this.isWSConnected = value
  }

  @action
  setIsTeleopReady = (value) => {
    this.isTeleopReady = value
  }

}

export default RosController
