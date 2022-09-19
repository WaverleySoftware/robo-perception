import React from 'react'
import { VideoPlayer } from './VideoPlayer'
import RosController from './RosController'
import WebRTC from './WebRtc'

class RootStore {
  constructor() {
      this.videoPlayerStore = new VideoPlayer(this)
      this.rosStore = new RosController(this)
      this.webRTCStore = new WebRTC(this)
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
