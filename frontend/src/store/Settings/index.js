import { observable, action, makeObservable } from 'mobx'

class Settings {
  constructor() {
    makeObservable(this)
    const currentRobotId = localStorage.getItem('currentRobotId')
    if (currentRobotId) {
      this.updateCurrentRobotId(JSON.parse(currentRobotId))
    }

    this.showSidebar = window.outerWidth >= 1920
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

  @observable robotsSettings = [{
    id: 1,
    name: 'Spot 1234 869',
    type: '1',
    speed_min: 1,
    speed_max: 100,
    speed_step: 10,
    location: 'Ukraine',
    building: 'Building A1',
  }, {
    id: 2,
    name: 'robot 2',
    type: '2',
    speed_min: 1,
    speed_max: 100,
    speed_step: 20,
    location: 'USA',
    building: 'Building A2',
  }, {
    id: 3,
    name: 'robot 3',
    type: '1',
    speed_min: 1,
    speed_max: 100,
    speed_step: 20,
    location: 'Ukraine',
    building: 'Building B1',
  }, {
    id: 4,
    name: 'robot 4',
    type: '1',
    speed_min: 1,
    speed_max: 100,
    speed_step: 20,
    location: 'Ukraine',
    building: 'Building B1',
  },{
    id: 5,
    name: 'robot 5',
    type: '1',
    speed_min: 1,
    speed_max: 100,
    speed_step: 20,
    location: 'Ukraine',
    building: 'Building C',
  },]

  @observable currentRobotId = null

  @observable robotSpeed = 100

  @observable showSidebar = false

  @action
  toggleSidebar = () => this.showSidebar = !this.showSidebar

  @action
  decreeseRobotSpeed = () => this.robotSpeed -= 1

  @action
  increeseRobotSpeed = () => this.robotSpeed += 1

  @action
  updateCurrentRobotId = (robotId) => {
    localStorage.setItem('currentRobotId', JSON.stringify(robotId))
    this.currentRobotId = robotId
    this.robotSpeed = this.robotsSettings.find(({id}) => id === robotId).speed_max
  }

  @action
  updateRobotSettings = (robot_data) => {
    // TODO: send robot_data to the beckend when it is ready
    this.robotsSettings = this.robotsSettings.map((robot) => 
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
