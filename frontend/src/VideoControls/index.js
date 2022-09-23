import React from 'react'
import cx from 'classnames'
import { observer } from 'mobx-react'
import { Grid } from '@mui/material'
import Right from './sections/Right'
import Left from './sections/Left'
import { useStore } from '../store'

import './style.css'

const VideoControls = observer((props) => {
  const {videoPlayerStore: { isFullscreen }} = useStore()

  return (
    <div className={cx('video-controls', { fullscreen: isFullscreen })} {...props}>
      <Grid container item direction='row' justifyContent='flex-start' alignItems='center' {...props}>
        <Left />
        <Right />
      </Grid>
    </div>
  )
})

export default VideoControls
