import { observable, action, makeObservable } from 'mobx'

class Settings {
  constructor() {
    makeObservable(this)
    this.updateCurrentRobotId(1)
  }

  @observable widgets = [
    { label: 'Screen', name: 'screen', id: '1', selected: true },
    { label: 'Battery', name: 'battery', id: '2', selected: true },
    { label: 'Robot\'s Speed', name: 'speed', id: '3', selected: true },
    { label: 'Additional actions', name: 'actions', id: '4', selected: true },
  ]

  @observable robotTypes = [
    { label: 'Legged', id: '1' },
    { label: 'Wheeled', id: '2' },
  ]

  @observable robots_settings = [{
    id: 1,
    name: 'Spot 1234 869',
    type: '1',
    speed_min: 0,
    speed_max: 100,
    speed_step: 10
  }, {
    id: 2,
    name: 'robot 2',
    type: '2',
    speed_min: 0,
    speed_max: 50,
    speed_step: 20
  },]

  @observable currentRobotId = 1

  @observable robotSpeed = 1

  @action
  decreeseRobotSpeed = () => this.robotSpeed -= 1

  @action
  increeseRobotSpeed = () => this.robotSpeed += 1

  @action
  updateCurrentRobotId = (robotId) => {
    this.currentRobotId = robotId
    this.robotSpeed = this.robots_settings.find(({id}) => id === robotId).speed_max
  }

  @action
  updateRobotSettings = (robot_data) => {
    // TODO: send robot_data to the beckend when it is ready
    this.robots_settings = this.robots_settings.map((robot) => 
      robot.id === robot_data.id ? robot_data : robot
    )

    if (this.currentRobotId === robot_data.id && this.robotSpeed > robot_data.speed_max) {
      this.robotSpeed = robot_data.speed_max
    }
  }

  @action toggleWidget = (widgetName) => {
    this.widgets = this.widgets.map((widget) => {
      return {
        ...widget,
        selected: widgetName === widget.name ? !widget.selected : widget.selected,
      }
    })
  }
}

export default Settings
