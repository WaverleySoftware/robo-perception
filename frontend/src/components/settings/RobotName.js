import { useState } from 'react'
import { observer } from 'mobx-react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import RoboTypeIcon from '../roboTypeIcon'
import ListItemText from '@mui/material/ListItemText'
import CheckIcon from '@mui/icons-material/Check'

import { useStore } from '../../store'
import TitledBox from '../titledBox'

const RobotName = observer(() => {
  const {
    settingsStore: { setRobotType, currentRobotType, setRobotName, robotTypes, currentRobotName },
  } = useStore()
  const [tempRobotName, setTempRobotName] = useState(currentRobotName)
  const onRobotTypeChange = (e) => setRobotType(e.target.value)
  const onRobotNameBlur = () => {
    if (tempRobotName === currentRobotName) return
    setRobotName(tempRobotName)
  }
  const onRobotNameChange = (e) => setTempRobotName(e.target.value)

  return (
    <TitledBox title='Name of robot'>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            onBlur={onRobotNameBlur}
            onChange={onRobotNameChange}
            value={tempRobotName}
            fullWidth
            label='Name'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='robot-type-select'>Choose the type</InputLabel>
            <Select
              labelId='robot-type-select'
              id='robot-type'
              value={currentRobotType?.id || ''}
              label='Choose the type'
              onChange={onRobotTypeChange}
              renderValue={() => currentRobotType?.label}
            >
              {robotTypes.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  <RoboTypeIcon selected={type.id === currentRobotType?.id} type={type.label} maxHeight='21px' />
                  <ListItemText sx={{ paddingLeft: '0.5rem' }} primary={type.label} />
                  {type.id === currentRobotType?.id && <CheckIcon />}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </TitledBox>
  )
})

export default RobotName
