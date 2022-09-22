import React, { Fragment, useEffect } from 'react'
import { observer } from 'mobx-react'
import './style.css'
import { useStore } from '../store'
import VideoControls from '../VideoControls'
import VideoOverlay from '../VideoOverlay'

const VideoPlayerView = observer((props) => {
  const {videoPlayerStore: { videoEl, attachEvents, detachEvents }} = useStore()

  useEffect(() => {
    attachEvents()

    return () => {
      detachEvents()
    }
  }, [attachEvents, detachEvents])

  useEffect(() => {
    videoEl.current.parentNode.focus()
  }, [videoEl])

  return (
    <Fragment>
      <div
        tabIndex={-1}
        className='video-wrapper'
        style={{
          cursor: 'default'
        }}
      >
        <VideoOverlay />
        <video ref={videoEl} className='video' playsInline {...props} />
        <VideoControls />
      </div>
    </Fragment>
  )
})

export default VideoPlayerView
