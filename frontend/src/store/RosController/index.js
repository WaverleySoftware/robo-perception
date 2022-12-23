import ROSLIB from 'roslib'
import { action, makeObservable, observable } from 'mobx'
import {
  KEY_MESSAGE_TYPE,
  BOOL_MESSAGE_TYPE,
  HARDWARE_MESSAGE_TYPE,
  BATTERY_MESSAGE_TYPE,
  POSE_MESSAGE_TYPE,
  KEY_TOPIC,
  RECONNECTION_TIMER,
  ROSBRIDGE_CONNECTION_URL,
  TELEOP_TOPIC,
  BATTERY_TOPIC,
  MEMORY_TOPIC,
  CPU_TOPIC,
  POSE_CHANGE_TOPIC,
  POSE_STATE_TOPIC
} from '../../constants'

const Ros = ROSLIB.Ros
const RosTopic = ROSLIB.Topic
const RosMessage = ROSLIB.Message

export const robotPosition = {
  sit: 'sit',
  stand: 'stand',
}

class RosController {
  @observable isTeleopReady = false
  @observable isWSConnected = false
  @observable isStanding = false
  @observable batteryState = 100.0
  @observable cpuState = 0.0
  @observable memoryState = 0.0

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
        messageType: BOOL_MESSAGE_TYPE,
      })
      this.batteryTopic = new RosTopic({
        ros: this.ros,
        name: BATTERY_TOPIC,
        messageType: BATTERY_MESSAGE_TYPE,
      })
      this.memoryTopic = new RosTopic({
        ros: this.ros,
        name: MEMORY_TOPIC,
        messageType: HARDWARE_MESSAGE_TYPE,
      })
      this.cpuTopic = new RosTopic({
        ros: this.ros,
        name: CPU_TOPIC,
        messageType: HARDWARE_MESSAGE_TYPE,
      })
      this.poseChangeTopic = new RosTopic({
        ros: this.ros,
        name: POSE_CHANGE_TOPIC,
        messageType: POSE_MESSAGE_TYPE,
      })
      this.poseStateTopic = new RosTopic({
        ros: this.ros,
        name: POSE_STATE_TOPIC,
        messageType: BOOL_MESSAGE_TYPE,
      })
      this.teleopTopic.subscribe((msg) => this.setIsTeleopReady(msg.data))
      this.batteryTopic.subscribe((msg) => this.setBatteryState(msg.percentage))
      this.cpuTopic.subscribe((msg) => this.setCpuState(msg.data))
      this.memoryTopic.subscribe((msg) => this.setMemoryState(msg.data))
      this.poseStateTopic.subscribe((msg) => this.setIsStanding(msg.data))
    })
    this.ros.on('close', () => {
      console.warn('Disconnected from ROS bridge')
      this.cleanup()
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

  cleanup = () => {
    this.teleopTopic && this.teleopTopic.unsubscribe()
    this.batteryTopic && this.batteryTopic.unsubscribe()
    this.cpuTopic && this.cpuTopic.unsubscribe()
    this.memoryTopic && this.memoryTopic.unsubscribe()
    this.poseStateTopic && this.poseStateTopic.unsubscribe()
    this.setIsWSConnected(false)
    this.setIsTeleopReady(false)
    this.setIsStanding(false)
    this.setBatteryState(100)
    this.setCpuState(0)
    this.setMemoryState(0)
  }

  disconnect = () => {
    this.cleanup()
    this.ros.close()
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

  changePose = (pose) => {
    if (this.poseChangeTopic) {
      const poseMessage = new RosMessage({ data: pose })
      this.poseChangeTopic.publish(poseMessage)
    }
  }

  handleKeyboardShortcuts = (keyName) => {
    if (this.rootStore.navigationStore.activeTab === 0 && this.isTeleopReady && this.isWSConnected) {
      if ([' ', 'spacebar'].includes(keyName)) {
        this.rootStore.videoPlayerStore.onClick()
      } else {
        if (this.isTeleopReady) {
          this.publishKey(keyName)
        }
      }
    }
  }

  @action
  setIsWSConnected = (value) => {
    this.isWSConnected = value
  }

  @action
  setIsTeleopReady = (value) => {
    this.isTeleopReady = value
  }

  @action
  setBatteryState = (value) => {
    this.batteryState = (value | 0)
  }

  @action
  setCpuState = (value) => {
    this.cpuState = (value | 0)
  }

  @action
  setMemoryState = (value) => {
    this.memoryState = (value | 0)
  }

  @action
  setIsStanding = (value) => {
    this.isStanding = value
  }
}

export default RosController
