import { useTheme } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import Switch from '../../../switch'
import { useStore } from '../../../../store'

const ObjectDetectionControls = observer(({ connected }) => {
  const {
    rosStore: { selectedMode, useNN, setNN },
    videoPlayerStore: { isFullscreen },
  } = useStore()

  const theme = useTheme()
  const color = connected
    ? isFullscreen ? theme.palette.common.white : theme.palette.text.primary
    : theme.palette.text.disabledVideoPlayerIcon

  const handleNNChange = () => {
    setNN(!useNN)
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
          disabled={!connected || selectedMode === 'depth'}
          onChange={handleNNChange}
          inputProps={{ 'aria-label': 'ant design' }}
          sx={{
            marginLeft: '12px',
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: connected
                ? isFullscreen ? theme.palette.common.white : theme.palette.info.main
                : theme.palette.text.disabledVideoPlayerIcon,
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
