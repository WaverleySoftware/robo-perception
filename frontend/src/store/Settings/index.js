import { observable, action, computed, makeObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

export default class Settings {
  @observable currentRobotTypeID = ''
  @observable currentAppThemeID = ''

  @observable widgets = [
    { label: 'Screen', id: uuidv4(), selected: false },
    { label: 'State', id: uuidv4(), selected: false },
    { label: 'Additional actions', id: uuidv4(), selected: false },
    { label: 'Speed', id: uuidv4(), selected: false }
  ]
  @observable robotTypes = [
    { label: 'Legged', id: uuidv4() },
    { label: 'Wheeled', id: uuidv4() },
    { label: 'Manipulators', id: uuidv4() },
    { label: 'Wheeled/Legged+manipul', id: uuidv4() },
    { label: 'Flying', id: uuidv4() }
  ]
  @observable appThemes = [
    { label: 'Light', id: uuidv4() },
    { label: 'Dark', id: uuidv4() }
  ]

  @computed get currentRobotType() {
    return this.robotTypes.find(type => type.id === this.currentRobotTypeID)
  }

  @computed get currentAppTheme() {
    return this.appThemes.find(theme => theme.id === this.currentAppThemeID)
  }

  constructor() {
    makeObservable(this)
  }

  @action setRobotType = (id) => {
    this.currentRobotTypeID = id
  }

  @action setAppTheme = (id) => {
    this.currentAppThemeID = id
  }

  @action toggleWidget = (id) => {
    for (const widget of this.widgets) {
      if (id !== widget.id) continue
      widget.selected = !widget.selected
    }
  }
}
