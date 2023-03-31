import { action, makeObservable, observable } from 'mobx'

export const NavigationTabs = {
  DASHBOARD: 'dashboard',
  SETTINGS: 'settings'
}

class Navigation {
  @observable activeTab = NavigationTabs.DASHBOARD

  constructor() {
    makeObservable(this)
  }

  @action
  setActiveTab = (value) => {
    this.activeTab = value
  }
}

export default Navigation
