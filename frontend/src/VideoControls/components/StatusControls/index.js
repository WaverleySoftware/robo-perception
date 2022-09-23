import { observer } from 'mobx-react'
import { useStore } from '../../../store'
import { Grid, Tooltip } from '@mui/material'
import CellWifiIcon from '@mui/icons-material/CellWifi'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import GamepadIcon from '@mui/icons-material/Gamepad'
import React from 'react'

const StatusControls = observer(() => {
  const {
    webRTCStore: { isWebRtcConnected },
    rosStore: { isWSConnected, isTeleopReady }
  } = useStore()

  const color = (condition) => {
    return {
      color: condition ? '#ffffff' : '#979797',
    }
  }

  const label = (condition, prefix) => {
    return condition ? `${prefix} Connected` : `${prefix} Disconnected`
  }

  return (
    <Grid sx={{ display: 'flex' }}>
      <Tooltip title={label(isWSConnected, 'ROS')} placement='top'>
        <CellWifiIcon sx={{...color(isWSConnected)}} fontSize={'medium'} />
      </Tooltip>
      <Tooltip title={label(isWebRtcConnected, 'Camera')} placement='top'>
        <VideoCameraBackIcon sx={{...color(isWebRtcConnected), marginLeft: '10px'}} fontSize={'medium'} />
      </Tooltip>
      <Tooltip title={label(isTeleopReady, 'Teleop')} placement='top'>
        <GamepadIcon sx={{...color(isTeleopReady), marginLeft: '10px'}} fontSize={'medium'} />
      </Tooltip>
    </Grid>
  )
})

export default StatusControls
