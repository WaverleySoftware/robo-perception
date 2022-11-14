import { observable, action, makeObservable } from 'mobx'

class Settings {
  constructor() {
    makeObservable(this)
  }

  @observable widgets = [
    { label: 'Screen', id: '1', selected: true },
    { label: 'Battery', id: '2', selected: true },
    { label: 'Robot\'s Speed', id: '3', selected: true },
    { label: 'Additional actions', id: '4', selected: true },
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
    speed_max: 1,
    speed_step: 10
  }, {
    id: 2,
    name: 'robot 2',
    type: '2',
    speed_min: 0,
    speed_max: 1,
    speed_step: 20
  },]

  @observable currentRobotId = 1

  @action
  updateCurrentRobotId = (robotId) => this.currentRobotId = robotId

  @action
  updateRobotSettings = (robot_data) => {
    // TODO: send robot_data to the beckend when it is ready
    this.robots_settings = this.robots_settings.map((robot) => 
      robot.id === robot_data.id ? robot_data : robot
    )
  }

  @action toggleWidget = (widgetId) => {
    this.widgets = this.widgets.map((widget) => {
      return {
        ...widget,
        selected: widgetId === widget.id ? !widget.selected : widget.selected,
      }
    })
  }
}

export default Settings
