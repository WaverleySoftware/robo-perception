import { useTheme } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import Switch from '../../../components/switch'
import { useStore } from '../../../store'

const ObjectDetectionControls = observer(() => {
  const {
    rosStore: { selectedMode, useNN, setNN },
    videoPlayerStore: { isFullscreen }
  } = useStore()

  const theme = useTheme()
  const color = isFullscreen ? theme.palette.common.white : theme.palette.text.primary

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
          disabled={selectedMode === 'depth'}
          onChange={handleNNChange}
          inputProps={{ 'aria-label': 'ant design' }}
          sx={{
            marginLeft: '12px',
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: isFullscreen ? theme.palette.common.white : theme.palette.info.main,
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
