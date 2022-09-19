import React from 'react'
import './style.css'

import { Grid } from '@mui/material'

import Right from './sections/Right'
import Left from './sections/Left'

const VideoControls = (props) => {
  return (
    <div className='video-controls show' {...props}>
      <Grid container direction='column' className='bottom-section'>
        <Grid container item direction='row' justifyContent='flex-start' alignItems='center' {...props}>
          <Left />
          <Right />
        </Grid>
      </Grid>
    </div>
  )
}

export default VideoControls
