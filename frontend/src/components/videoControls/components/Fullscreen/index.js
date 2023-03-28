import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { Tooltip, SvgIcon, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {ReactComponent as FullscreenIcon} from './fullscreen.svg'
import {ReactComponent as FullscreenExitIcon} from './fullscreenexit.svg'
import { useStore } from '../../../../store'
import { isLightMode } from '../../../../themes/base'

const Fullscreen = observer(({ connected }) => {
  const {videoPlayerStore: { isFullscreen, toggleFullscreen }} = useStore()
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  // this trick is needed for fixing tooltip freezing on fullscreen change
  useEffect(() => {
    setOpen(false)
  }, [isFullscreen])

  const fullscreenIcon = () => {
    return isFullscreen ? FullscreenExitIcon : FullscreenIcon
  }

  const fullscreenTitle = isFullscreen ? 'Exit Full Screen' : 'Full Screen'

  const theme = useTheme()

  const color = connected
    ? isFullscreen ? theme.palette.common.white : theme.palette.primary.main
    : isLightMode(theme.palette.mode) ? theme.palette.secondary.main : theme.palette.grey[100]

  return (
    <Tooltip title={fullscreenTitle} placement='top' open={open} onClose={handleClose} onOpen={handleOpen}>
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
