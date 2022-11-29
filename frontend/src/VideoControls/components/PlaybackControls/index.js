import { observer } from 'mobx-react'
import { useStore } from '../../../store'
import { Grid, Icon, IconButton, Tooltip } from '@mui/material'
import { Pause, PlayArrow } from '@mui/icons-material'
import React from 'react'
import { alpha } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'

const PlaybackControls = observer(() => {
  const {videoPlayerStore: { isFullscreen, isStreamStarted, onClick }} = useStore()
  const theme = useTheme()

  const playIcon = () => {
    return isStreamStarted ? Pause : PlayArrow
  }

  return (
    <Grid item sx={{ marginLeft: '38px' }}>
      <Tooltip title={`${isStreamStarted ? 'Pause' : 'Play'}`} placement='top'>
        <IconButton
          onClick={onClick}
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
            }
          }}
        >
          <Icon
            component={playIcon()}
            sx={{ color: isFullscreen
              ? theme.palette.common.white
              : theme.palette[isStreamStarted ? 'error' : 'success'].main
            }} />
        </IconButton>
      </Tooltip>
    </Grid>
  )
})

export default PlaybackControls
