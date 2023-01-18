import React from 'react'
import { observer } from 'mobx-react'
import { Tooltip, SvgIcon, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {ReactComponent as FullscreenIcon} from './fullscreen.svg'
import {ReactComponent as FullscreenExitIcon} from './fullscreenexit.svg'
import { useStore } from '../../../../store'

const Fullscreen = observer(({ connected }) => {
  const {videoPlayerStore: { isFullscreen, toggleFullscreen }} = useStore()

  const fullscreenIcon = () => {
    return isFullscreen ? FullscreenExitIcon : FullscreenIcon
  }

  const theme = useTheme()

  const color = connected
    ? isFullscreen ? theme.palette.common.white : theme.palette.text.primary
    : theme.palette.text.disabledVideoPlayerIcon

  return (
    <Tooltip title='Full screen' placement='top'>
      <span>
        <IconButton
          onClick={toggleFullscreen}
          disabled={!connected}
          sx={{ borderRadius: '50%', width: '36px', height: '36px', marginLeft: '6px' }}
        >
          <SvgIcon
            component={fullscreenIcon()}
            sx={{
              width: '22px',
              height: '22px',
              color,
            }}
          />
        </IconButton>
      </span>
    </Tooltip>
  )
})

export default Fullscreen
