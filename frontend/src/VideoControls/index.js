import React from 'react'
import { observer } from 'mobx-react'
import { Grid } from '@mui/material'
import { useStore } from '../store'
import StatusControls from './components/StatusControls'
import CameraControls from './components/CameraControls'
import PlaybackControls from './components/PlaybackControls'
import TimeDisplay from './components/TimeDisplay'
import VolumeControls from './components/VolumeControls'
import ObjectDetectionControls from './components/ObjectDetectionSwitch'
import Fullscreen from './components/Fullscreen'

const VideoControls = observer(() => {
  const {videoPlayerStore: { isFullscreen }} = useStore()

  return (
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        sx={{
          position: isFullscreen ? 'fixed' : 'static',
          background: isFullscreen ? 'rgba(51, 51, 51, 0.7)' : 'transparent',
          bottom: isFullscreen ? 0 : 'auto',
          left: isFullscreen ? 0 : 'auto',
          padding: isFullscreen ? '0 10px' : '0',
          height: '56px',
          width: '100%'
        }}
      >
        <Grid xs={5} container item alignItems='center'>
          <StatusControls />
          <CameraControls />
        </Grid>
        <Grid xs={2} container item alignItems='center'>
          <PlaybackControls />
          <TimeDisplay />
        </Grid>
        <Grid xs={5} container item alignItems='center' justifyContent='flex-end'>
          <VolumeControls />
          <ObjectDetectionControls />
          <Fullscreen />
        </Grid>
      </Grid>
  )
})

export default VideoControls
