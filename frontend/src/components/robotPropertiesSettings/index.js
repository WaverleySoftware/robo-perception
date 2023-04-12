import React, { useEffect, useState, useCallback } from 'react'
import Typography from '@mui/material/Typography'
import { Divider, Grid } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import { useTheme } from '@mui/material/styles'
import FormHelperLabel from '../formHelperLabel'
import Input from '../input'
import RoboTypeIcon from '../roboTypeIcon'
import Select from '../select'
import SelectOption from '../selectOption'
import Button from '../button'
import BoxTitle from '../boxTitle'
import { isLightMode } from '../../themes/base'
import Paper from '../paper'
import { useStore } from '../../store'
import { observer } from 'mobx-react'

const RobotPropertiesSettings = observer(() => {
  const { settingsStore: {
    currentRobot, robotTypes, updateRobotSettings, shouldSaveRobotSettings, updateShouldSaveRobotSettings
  }} = useStore()

  const theme = useTheme()
  const [robotName, setRobotName] = useState(currentRobot.name)
  const [selectedRobotType, setSelectedRobotType] = useState(currentRobot.type)
  const [speedStep, setSpeedStep] = useState(currentRobot.speedStep)
  const [speedMin, setSpeedMin] = useState(currentRobot.speedMin)
  const [speedMax, setSpeedMax] = useState(currentRobot.speedMax)

  const handleNameChange = (e) => setRobotName(e.target.value)
  const handleRobotTypeChange = (e) => setSelectedRobotType(e.target.value)
  const handleSpeedStepChange = (e) => setSpeedStep(e.target.value)
  const handleSpeedMinChange = (e) => setSpeedMin(e.target.value)
  const handleSpeedMaxChange = (e) => setSpeedMax(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()

    sendRobotSettings()
  }

  const sendRobotSettings = useCallback(() => {
    const data = {
      id: currentRobot.id,
      name: robotName,
      speedStep: speedStep,
    }

    updateRobotSettings(data)
  }, [currentRobot.id, robotName, speedStep, updateRobotSettings])

  useEffect(() => {
    updateShouldSaveRobotSettings(!(robotName === currentRobot.name && speedStep === currentRobot.speedStep))
  }, [robotName, speedStep, currentRobot, updateShouldSaveRobotSettings])

  useEffect(() => {
    const saveRobotSettings = () => {
      sendRobotSettings()
    }

    document.addEventListener('saveRobotSettings', saveRobotSettings)
    return () => document.removeEventListener('saveRobotSettings', saveRobotSettings)
  }, [sendRobotSettings])

  const disabled = !robotName
    || !speedStep
    || !shouldSaveRobotSettings

  return (
    <Paper>
      <BoxTitle sx={{ marginBottom: '20px' }}>{currentRobot.name}</BoxTitle>
      <Grid container component='form' spacing={2} onSubmit={onSubmit}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <FormHelperLabel id='robot-name-helper-text'>Robot Name</FormHelperLabel>
            <Input
              id='name'
              required
              name='name'
              type='text'
              value={robotName}
              aria-describedby='robot-name-helper-text'
              onChange={handleNameChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <FormHelperLabel id='robot-type-select'>Choose the Type</FormHelperLabel>
            <Select
              aria-describedby='robot-type-select'
              id='robot-type'
              value={selectedRobotType}
              label='Choose the type'
              onChange={handleRobotTypeChange}
              notched={false}
              disabled={true}
            >
              {robotTypes.map((robotType) => (
                <SelectOption key={robotType.id} value={robotType.id}>
                  <RoboTypeIcon color={robotType.id === selectedRobotType ? theme.palette.info.main : theme.palette.grey[800]} type={robotType.label} />
                  <Typography sx={{ marginLeft: '8px', fontSize: '14px' }} >{robotType.label}</Typography>
                </SelectOption>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12}>
          <Divider sx={{ margin: '12px 0', borderColor: isLightMode(theme.palette.mode) ? theme.palette.grey[300] : '#80819A' }}/>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>Speed Settings</Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: '12px' }}>
          <FormControl fullWidth>
            <FormHelperLabel id='robot-speed-step-helper-text'>Step of speed in %</FormHelperLabel>
            <Input
              id='step-speed'
              required
              name='step-speed'
              type='number'
              value={speedStep}
              aria-describedby='robot-speed-step-helper-text'
              onChange={handleSpeedStepChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <FormHelperLabel id='robot-min-speed-helper-text'>Speed (Min)</FormHelperLabel>
            <Input
              id='min-speed'
              required
              name='min-speed'
              type='number'
              value={speedMin}
              aria-describedby='robot-min-speed-helper-text'
              disabled={true}
              onChange={handleSpeedMinChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <FormHelperLabel id='robot-max-speed-helper-text'>Speed (Max)</FormHelperLabel>
            <Input
              id='max-speed'
              required
              name='max-speed'
              type='number'
              value={speedMax}
              aria-describedby='robot-max-speed-helper-text'
              disabled={true}
              onChange={handleSpeedMaxChange}
            />
          </FormControl>
        </Grid>
        <Grid item container xs={12} sx={{ marginTop: '12px' }}>
          <Button disabled={disabled} type='submit' sx={{ marginLeft: 'auto' }} >APPLY</Button>
        </Grid>
      </Grid>
    </Paper>
  )
})

export default RobotPropertiesSettings
