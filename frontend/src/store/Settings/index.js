import { observable, action, computed, makeObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

export default class Settings {
  @observable currentRobotTypeID = ''
  @observable currentAppThemeID = ''
  @observable currentRobotName = ''

  @observable widgets = [
    { label: 'Screen', id: uuidv4(), selected: false },
    { label: 'State', id: uuidv4(), selected: false },
    { label: 'Additional actions', id: uuidv4(), selected: false },
    { label: 'Speed', id: uuidv4(), selected: false },
  ]
  @observable robotTypes = [
    { label: 'Legged', id: uuidv4() },
    { label: 'Wheeled', id: uuidv4() },
    { label: 'Manipulators', id: uuidv4() },
    { label: 'Wheeled/Legged+manipul', id: uuidv4() },
    { label: 'Flying', id: uuidv4() },
  ]
  @observable appThemes = [
    { label: 'Light', id: uuidv4(), value: 'light' },
    { label: 'Dark', id: uuidv4(), value: 'dark' },
  ]

  constructor(rootStore, initialColorTheme) {
    makeObservable(this)
    this.setAppThemeByValue(initialColorTheme)
  }

  @computed get currentRobotType() {
    return this.robotTypes.find((type) => type.id === this.currentRobotTypeID)
  }

  @computed get currentAppTheme() {
    return this.appThemes.find((theme) => theme.id === this.currentAppThemeID)
  }

  @action setRobotName = (name) => {
    this.currentRobotName = name
  }

  @action setRobotType = (id) => {
    this.currentRobotTypeID = id
  }

  @action setAppTheme = (id) => {
    this.currentAppThemeID = id
  }

  @action setAppThemeByValue = (value) => {
    this.currentAppThemeID = this.appThemes.find((theme) => theme.value === value)?.id
  }

  @action toggleWidget = (id) => {
    for (const widget of this.widgets) {
      if (id !== widget.id) continue
      widget.selected = !widget.selected
    }
  }
}
