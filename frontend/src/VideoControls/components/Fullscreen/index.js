import React from 'react'
import { observer } from 'mobx-react'
import { Tooltip, SvgIcon, IconButton } from '@mui/material'
import { useTheme } from '@emotion/react'
import {ReactComponent as FullscreenIcon} from './fullscreen.svg'
import {ReactComponent as FullscreenExitIcon} from './fullscreenexit.svg'
import { useStore } from '../../../store'

const Fullscreen = observer(() => {
  const {videoPlayerStore: { isFullscreen, toggleFullscreen }} = useStore()

  const fullscreenIcon = () => {
    return isFullscreen ? FullscreenExitIcon : FullscreenIcon
  }

  const theme = useTheme()

  return (
    <Tooltip title='Full screen' placement='top'>
      <IconButton onClick={toggleFullscreen} sx={{ borderRadius: '50%', width: '36px', height: '36px', marginLeft: '16px' }}>
        <SvgIcon
          component={fullscreenIcon()}
          sx={{ width: '22px', height: '22px', color: isFullscreen ? theme.palette.common.white : theme.palette.text.primary }}
        />
      </IconButton>
    </Tooltip>
  )
})

export default Fullscreen
