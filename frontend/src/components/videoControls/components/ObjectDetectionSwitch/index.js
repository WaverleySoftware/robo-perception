import { useTheme } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import Switch from '../../../switch'
import { useStore } from '../../../../store'

const ObjectDetectionControls = observer(({ connected }) => {
  const {
    webRTCStore: { selectedMode, useNN, setNN, isDataChannelOpened },
    videoPlayerStore: { isFullscreen, restart, isStreamStarted, isPlaying }
  } = useStore()

  const theme = useTheme()
  const color = connected
    ? isFullscreen ? theme.palette.common.white : theme.palette.primary.main
    : theme.palette.mode === 'light' ? theme.palette.secondary.main : theme.palette.grey[100]

  const handleNNChange = async () => {
    setNN(!useNN)
    if (isPlaying) {
      await restart()
    }
  }

  const isDisabled = () => {
    return !connected || selectedMode === 'depth' || (connected && isStreamStarted && !isDataChannelOpened)
  }

  return (
      <Grid direction='row' container item alignItems='center' marginLeft='22px' width='auto'>
        <Typography sx={{
          fontSize: '12px',
          color: color,
          fontWeight: theme.typography.fontWeightRegular
        }}>Detect Objects</Typography>
        <Switch
          checked={useNN && selectedMode !== 'depth'}
          disabled={isDisabled()}
          onChange={handleNNChange}
          inputProps={{ 'aria-label': 'ant design' }}
          sx={{
            marginLeft: '12px',
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: connected
                ? isFullscreen ? theme.palette.common.white : theme.palette.info.main
                : theme.palette.mode === 'light' ? theme.palette.secondary.main : theme.palette.grey[100],
              opacity: 1,
            },
            '& .Mui-disabled+.MuiSwitch-track': {
              opacity: 1,
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: isFullscreen ? '#333333' : theme.palette.common.white,
            },
          }}
        />
      </Grid>
  )
})

export default ObjectDetectionControls
