import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../../store'
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'

const CameraControls = observer(() => {
  const {webRTCStore: { setMode, selectedMode, setNN }} = useStore()

  const handleCameraModeChange = (event) => {
    setMode(event.target.value)
    if (selectedMode === 'depth') {
      setNN(false)
    }
  }

  const cameraLabel = (name, marginLeft = 0) => {
    return (
      <FormControlLabel
        labelPlacement='start'
        value={name}
        control={
          <Radio
            size='small'
            sx={{
              color: '#979797',
              '&.Mui-checked': {
                color: '#ffffff',
              }
            }}
          />
        }
        label={name.toUpperCase()}
        sx={{ marginLeft, '.MuiFormControlLabel-label': { fontSize: '12px' } }}
        fontSize='12px'
      />
    )
  }

  return (
    <FormControl sx={{ marginLeft: '32px' }}>
      <RadioGroup
        row
        aria-labelledby='camera-radio-buttons-group-label'
        defaultValue='rgb'
        name='radio-buttons-group'
        value={selectedMode}
        onChange={handleCameraModeChange}
      >
        {cameraLabel('rgb')}
        {cameraLabel('depth', '22px')}
        {cameraLabel('sim', '22px')}
      </RadioGroup>
    </FormControl>
  )
})

export default CameraControls
