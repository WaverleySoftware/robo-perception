import React from 'react'
import { observer } from 'mobx-react'
import { Grid, Tooltip, Icon } from '@mui/material'
import {ReactComponent as Fullscreen} from './fullscreen.svg'
import {ReactComponent as FullscreenExit} from './fullscreenexit.svg'
import { useStore } from '../../../store'

const Right = observer(() => {
  const {videoPlayerStore: { isFullscreen, toggleFullscreen }} = useStore()

  const fullscreenIcon = () => {
    return isFullscreen ? FullscreenExit : Fullscreen
  }

  return (
    <Grid item sx={{ marginLeft: 'auto' }}>
      <Tooltip title='Full screen' placement='top'>
        <Icon component={fullscreenIcon()} onClick={toggleFullscreen} sx={{ display: 'block' }}/>
      </Tooltip>
    </Grid>
  )
})

export default Right
