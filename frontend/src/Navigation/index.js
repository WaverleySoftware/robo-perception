import { action, makeObservable, observable } from 'mobx'

class Navigation {
  @observable activeTab = 0

  constructor() {
    makeObservable(this)
  }

  @action
  setActiveTab = (value) => {
    this.activeTab = value
  }
}

export default Navigation
