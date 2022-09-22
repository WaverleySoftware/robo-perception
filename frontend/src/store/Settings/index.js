import { observable, action, makeObservable } from 'mobx'

export default class Settings {
  @observable robotTypes = [
    'Legged',
    'Wheeled',
    'Manipulators',
    'Wheeled/Legged+manipul',
    'Flying'
  ]
  @observable currentRobotType = ''
  @observable currentAppTheme = ''
  @observable appThemes = ['light', 'dark']

  constructor() {
    makeObservable(this)
  }

  @action setRobotType = (type) => {
    this.currentRobotType = type
  }

  @action setAppTheme = (theme) => {
    this.currentAppTheme = theme
  }
}
