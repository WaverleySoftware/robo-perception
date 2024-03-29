import React from 'react'
import VideoPlayer from './VideoPlayer'
import RosController from './RosController'
import WebRTC from './WebRtc'
import Navigation from './Navigation'
import Settings from './Settings'
import ActionModal from './ActionModal'

class RootStore {
  constructor() {
      this.videoPlayerStore = new VideoPlayer(this)
      this.rosStore = new RosController(this)
      this.webRTCStore = new WebRTC(this)
      this.navigationStore = new Navigation(this)
      this.settingsStore = new Settings(this)
      this.actionModalStore = new ActionModal(this)
  }
}

const storeContext = React.createContext(null)

export const StoreProvider = ({ children }) => {
  const store = new RootStore()
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }

  return store
}
