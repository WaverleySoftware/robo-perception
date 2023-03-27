import { observer } from 'mobx-react'
import { useStore } from '../../../../store'
import { Grid, Tooltip } from '@mui/material'
import CellWifiIcon from '@mui/icons-material/CellWifi'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import GamepadIcon from '@mui/icons-material/Gamepad'
import React from 'react'
import { useTheme } from '@mui/material/styles'

const StatusControls = observer(() => {
  const {
    webRTCStore: { isWebRtcConnected },
    rosStore: { isWSConnected, isTeleopReady },
    videoPlayerStore: { isFullscreen }
  } = useStore()

  const theme = useTheme()

  const getIconColor = (condition) => condition
    ? isFullscreen ? theme.palette.common.white : theme.palette.primary.main
    : theme.palette.mode === 'light' ? theme.palette.secondary.main : theme.palette.grey[100]

  const label = (condition, prefix) => {
    return condition ? `${prefix} Connected` : `${prefix} Disconnected`
  }

  return (
    <Grid sx={{ display: 'flex' }}>
      <Tooltip title={label(isWSConnected, 'ROS')} placement='top'>
        <CellWifiIcon sx={{color: getIconColor(isWSConnected)}} fontSize={'medium'} />
      </Tooltip>
      <Tooltip title={label(isWebRtcConnected, 'Camera')} placement='top'>
        <VideoCameraBackIcon sx={{color: getIconColor(isWebRtcConnected), marginLeft: '10px'}} fontSize={'medium'} />
      </Tooltip>
      <Tooltip title={label(isTeleopReady, 'Teleop')} placement='top'>
        <GamepadIcon sx={{color: getIconColor(isTeleopReady), marginLeft: '10px'}} fontSize={'medium'} />
      </Tooltip>
    </Grid>
  )
})

export default StatusControls
