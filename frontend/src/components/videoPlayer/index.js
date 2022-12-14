import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import './style.css'
import { useStore } from '../../store'
import VideoControls from '../videoControls'
import VideoOverlay from '../videoOverlay'
import Widget from '../widget'
import ConnectionInfo from '../videoConnectionInfo'

const VideoPlayerView = observer((props) => {
  const {videoPlayerStore: { videoEl, attachEvents, detachEvents }} = useStore()

  useEffect(() => {
    attachEvents()

    return () => {
      detachEvents()
    }
  }, [attachEvents, detachEvents])

  return (
    <Widget widgetName='screen' styles={{padding: 0, width: '787px', backgroundColor: 'transparent', boxShadow: 'none'}}>
      <div
        tabIndex={-1}
        className='video-wrapper'
        style={{
          cursor: 'default'
        }}
      >
        <ConnectionInfo />
        <VideoOverlay />
        <video ref={videoEl} className='video' playsInline {...props} />
        <VideoControls />
      </div>
    </Widget>
  )
})

export default VideoPlayerView
