export const BUFFERING_LEEWAY = +(import.meta.env.REACT_APP_BUFFERING_LEEWAY || 1000)
export const ROSBRIDGE_SERVER_IP = import.meta.env.REACT_APP_ROSBRIDGE_SERVER_IP || '127.0.0.1'
export const ROSBRIDGE_SERVER_PORT = import.meta.env.REACT_APP_ROSBRIDGE_SERVER_PORT || '9090'
export const ROSBRIDGE_CONNECTION_URL = `ws://${ROSBRIDGE_SERVER_IP}:${ROSBRIDGE_SERVER_PORT}`
export const BE_URL = import.meta.env.REACT_APP_BE_URL || '127.0.0.1'
export const RECONNECTION_TIMER = +(import.meta.env.REACT_APP_RECONNECTION_TIMER || 1000)
export const KEY_TOPIC = import.meta.env.REACT_APP_KEY_TOPIC || '/key'
export const TELEOP_TOPIC = import.meta.env.REACT_APP_TELEOP_TOPIC || '/teleop_status'
export const BATTERY_TOPIC = import.meta.env.REACT_APP_BATTERY_TOPIC || '/battery/state'
export const MEMORY_TOPIC = import.meta.env.REACT_APP_MEMORY_TOPIC || '/memory/state'
export const CPU_TOPIC = import.meta.env.REACT_APP_CPU_TOPIC || '/cpu/state'
export const POSE_CHANGE_TOPIC = import.meta.env.REACT_APP_POSE_CHANGE_TOPIC || '/robot_pose/change'
export const POSE_STATE_TOPIC = import.meta.env.REACT_APP_POSE_STATE_TOPIC || '/robot_pose/is_standing'
export const KEY_MESSAGE_TYPE = 'std_msgs/String'
export const BOOL_MESSAGE_TYPE = 'std_msgs/Bool'
export const HARDWARE_MESSAGE_TYPE = 'std_msgs/Float32'
export const BATTERY_MESSAGE_TYPE = 'sensor_msgs/BatteryState'
export const POSE_MESSAGE_TYPE = 'std_msgs/String'
export const IS_SIMULATING = import.meta.env.REACT_APP_IS_SIMULATING === 'true'
export const CameraType = {
    DEPTH: 'depth',
    RGB: 'rgb',
    SIMULATOR: 'simulator'
}
export const NNType = {
    MOBILENET_SSD: 'mobilenet-ssd',
    NONE: ''
}
export const RobotPose = {
    SIT: 'sit',
    STAND: 'stand'
}
export const BatteryLevel = {
    HIGH: 'High',
    AVG: 'Average',
    LOW: 'Low'
  }