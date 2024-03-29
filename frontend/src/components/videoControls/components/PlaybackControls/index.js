import { observer } from 'mobx-react'
import { useStore } from '../../../../store'
import { Grid, Icon, IconButton, Tooltip } from '@mui/material'
import { Pause, PlayArrow } from '@mui/icons-material'
import React from 'react'
import { alpha } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import { isLightMode } from '../../../../themes/base'

const PlaybackControls = observer(({ connected }) => {
  const {
    videoPlayerStore: { isFullscreen, isStreamStarted, onClick, duration },
    webRTCStore: { isDataChannelOpened },
  } = useStore()
  const theme = useTheme()

  const playIcon = () => {
    return isStreamStarted ? Pause : PlayArrow
  }

  const isDisabled = () => {
    return !connected || (connected && isStreamStarted && !isDataChannelOpened)
  }

  return (
    <Grid item sx={{ marginLeft: duration ? 0 : '38px' }}>
      <Tooltip title={`${isStreamStarted ? 'Pause' : 'Play'}`} placement='top'>
        <span>
          <IconButton
            onClick={onClick}
            disabled={isDisabled()}
            sx={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: `${alpha(theme.palette.common.white,  isFullscreen ? 0.2 : 1)}`,
              '&:hover': {
                background: isFullscreen
                  ? `${alpha(theme.palette.common.white, 0.4)}`
                  : `${alpha(theme.palette[isStreamStarted ? 'error' : 'success'].main, 0.2)}`
              },
              '&:active': {
                background: isFullscreen
                  ? `${alpha(theme.palette.common.white, 0.6)}`
                  : `${alpha(theme.palette[isStreamStarted ? 'error' : 'success'].main, 0.4)}`
              },
              '&:disabled': {
                background: `${alpha(theme.palette.grey[300], isLightMode(theme.palette.mode) ? 1 : 0.2)}`,
              },
            }}
          >
            <Icon
              component={playIcon()}
              sx={{ color: connected
                  ? isFullscreen ? theme.palette.common.white : theme.palette[isStreamStarted ? 'error' : 'success'].main
                  : theme.palette.secondary.main
              }} />
          </IconButton>
        </span>
      </Tooltip>
    </Grid>
  )
})

export default PlaybackControls
