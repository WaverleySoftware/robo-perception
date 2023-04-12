import { observable, action, makeObservable, computed } from 'mobx'

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
    speedMin: '1',
    speedMax: '100',
    speedStep: '10',
    location: 'Ukraine',
    building: 'Building A1',
    widgets: [
      { label: 'Screen', name: 'screen', id: '1', selected: true },
      { label: 'Battery', name: 'battery', id: '2', selected: true },
      { label: 'Robot\'s Speed', name: 'speed', id: '3', selected: true },
      { label: 'Additional actions', name: 'actions', id: '4', selected: true },
    ],
  }, {
    id: 2,
    name: 'robot 2',
    type: '2',
    speedMin: '1',
    speedMax: '100',
    speedStep: '20',
    location: 'USA',
    building: 'Building A2',
    widgets: [
      { label: 'Screen', name: 'screen', id: '1', selected: true },
      { label: 'Battery', name: 'battery', id: '2', selected: true },
      { label: 'Additional actions', name: 'actions', id: '4', selected: true },
    ],
  }, {
    id: 3,
    name: 'robot 3',
    type: '1',
    speedMin: '1',
    speedMax: '100',
    speedStep: '20',
    location: 'Ukraine',
    building: 'Building B1',
    widgets: [
      { label: 'Screen', name: 'screen', id: '1', selected: true },
      { label: 'Battery', name: 'battery', id: '2', selected: true },
      { label: 'Robot\'s Speed', name: 'speed', id: '3', selected: true },
      { label: 'Additional actions', name: 'actions', id: '4', selected: true },
    ],
  }, {
    id: 4,
    name: 'robot 4',
    type: '1',
    speedMin: '1',
    speedMax: '100',
    speedStep: '20',
    location: 'Ukraine',
    building: 'Building B1',
    widgets: [
      { label: 'Screen', name: 'screen', id: '1', selected: true },
      { label: 'Battery', name: 'battery', id: '2', selected: true },
      { label: 'Robot\'s Speed', name: 'speed', id: '3', selected: true },
    ],
  },{
    id: 5,
    name: 'robot 5',
    type: '1',
    speedMin: '1',
    speedMax: '100',
    speedStep: '20',
    location: 'Ukraine',
    building: 'Building C',
    widgets: [
      { label: 'Battery', name: 'battery', id: '2', selected: true },
      { label: 'Robot\'s Speed', name: 'speed', id: '3', selected: true },
      { label: 'Additional actions', name: 'actions', id: '4', selected: true },
    ],
  },]

  @observable currentRobotId = null

  @observable robotSpeed = '100'

  @observable showSidebar = false

  @observable showRobotSettingsModal = false

  @observable robotSettingsModalConfirmCallback = null

  @observable robotSettingsModalCancelCallback = null

  @observable shouldSaveRobotSettings = false

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
    this.robotSpeed = this.robotsSettings.find(({id}) => id === robotId).speedMax
  }

  @action
  updateRobotSettings = (robotData) => {
    // TODO: send robotData to the beckend when it is ready
    this.robotsSettings = this.robotsSettings.map((robot) => 
      robot.id === robotData.id ? {...this.currentRobot, ...robotData} : robot
    )

    if (this.currentRobotId === robotData.id && this.robotSpeed > robotData.speedMax) {
      this.robotSpeed = robotData.speedMax
    }
  }

  @action toggleWidget = (widgetName) => {
    this.currentRobot.widgets.forEach((widget) => 
        widget.selected = widgetName === widget.name ? !widget.selected : widget.selected,
    )
  }

  @action
  onShowRobotSettingsModal  = (confirmCallback, cancelCallback) => {
    this.showRobotSettingsModal = true
    if(typeof confirmCallback === 'function') {
      this.robotSettingsModalConfirmCallback = confirmCallback
    }
    if(typeof cancelCallback === 'function') {
      this.robotSettingsModalCancelCallback = cancelCallback
    }
  }

  @action
  onSaveSettingsConfirm = () => {
    this.showRobotSettingsModal = false
    if(this.robotSettingsModalConfirmCallback) {
      this.robotSettingsModalConfirmCallback()
      this.robotSettingsModalConfirmCallback = null
    }
    this.robotSettingsModalCancelCallback = null
  }

  @action
  onSaveSettingsCancel = () => {
    this.showRobotSettingsModal = false
    if(this.robotSettingsModalCancelCallback) {
      this.robotSettingsModalCancelCallback()
      this.robotSettingsModalCancelCallback = null
    }
    this.robotSettingsModalConfirmCallback = null
  }

  @action
  updateShouldSaveRobotSettings = (value) => {
    this.shouldSaveRobotSettings = value
  }

  @computed
  get currentRobot () {
    return this.robotsSettings.find(({ id }) => id === this.currentRobotId)
  }
    
}

export default Settings
