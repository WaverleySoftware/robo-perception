import React from 'react'
import { observer } from 'mobx-react'
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import { useTheme } from '@emotion/react'
import { useStore } from '../../../store'

const CameraLabel = observer(({name, marginLeft = 0}) => {
  const theme = useTheme()
  const {videoPlayerStore: { isFullscreen }} = useStore()
  const color = isFullscreen ? theme.palette.common.white : theme.palette.text.primary

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
            }
          }}
        />
      }
      label={name.toUpperCase()}
      sx={{
        marginLeft,
        '.MuiFormControlLabel-label': {
          fontSize: '12px',
          color,
          fontWeight: theme.typography.fontWeightRegular,
        }
      }}
      fontSize='12px'
    />
  )
})

const CameraControls = observer(() => {
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
        <CameraLabel name='rgb' />
        <CameraLabel name='depth' marginLeft='16px' />
        <CameraLabel name='sim' marginLeft='16px' />
      </RadioGroup>
    </FormControl>
  )
})

export default CameraControls
