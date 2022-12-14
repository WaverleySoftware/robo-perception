import React from 'react'
import { observer } from 'mobx-react'
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useStore } from '../../../../store'

const CameraLabel = observer(({name, marginLeft = 0, connected}) => {
  const theme = useTheme()
  const {videoPlayerStore: { isFullscreen }} = useStore()
  const color = connected
    ? isFullscreen ? theme.palette.common.white : theme.palette.text.primary
    : theme.palette.text.disabledVideoPlayerIcon

  return (
    <FormControlLabel
      labelPlacement='start'
      value={name}
      control={
        <Radio
          size='small'
          sx={{
            color,
            '&.Mui-checked': {
              color
            },
            '&.Mui-disabled': {
              color
            },
          }}
        />
      }
      disabled={!connected}
      label={name.toUpperCase()}
      sx={{
        marginLeft,
        '.MuiFormControlLabel-label': {
          fontSize: '12px',
          color,
          fontWeight: theme.typography.fontWeightRegular,
          '&.Mui-disabled': {
            color,
          }
        }
      }}
      fontSize='12px'
    />
  )
})

const CameraControls = observer(({ connected }) => {
  const {webRTCStore: { setMode, selectedMode, setNN }} = useStore()

  const handleCameraModeChange = (event) => {
    setMode(event.target.value)
    if (selectedMode === 'depth') {
      setNN(false)
    }
  }

  return (
    <FormControl 
      sx={{ marginLeft: '24px' }}
    >
      <RadioGroup
        row
        aria-labelledby='camera-radio-buttons-group-label'
        defaultValue='rgb'
        name='radio-buttons-group'
        value={selectedMode}
        onChange={handleCameraModeChange}
      >
        <CameraLabel name='rgb' connected={connected} />
        <CameraLabel name='depth' marginLeft='16px' connected={connected} />
        <CameraLabel name='sim' marginLeft='16px' connected={connected} />
      </RadioGroup>
    </FormControl>
  )
})

export default CameraControls
