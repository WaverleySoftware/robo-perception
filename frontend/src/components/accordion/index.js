import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Divider, Grid } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import { useTheme } from '@emotion/react'
import FormHelperLabel from '../formHelperLabel'
import Input from '../input'
import RoboTypeIcon from '../roboTypeIcon'
import Select from '../select'
import SelectOption from '../selectOption'
import Button from '../button'
import BoxTitle from '../boxTitle'

const AccordionWrapper = styled((props) => (<MuiAccordion {...props}/>))(({ theme }) => ({
  borderRadius: theme.shape.cardBorderRadius,
  background: theme.palette.background.paper,
  marginBottom: '16px',
  '&:first-of-type': {
    borderRadius: theme.shape.cardBorderRadius
  },
  '&:last-of-type': {
    borderRadius: theme.shape.cardBorderRadius
  },
  '&:before': {
    display: 'none'
  }
}))

const Accordion = ({
  expanded,
  index,
  id,
  onChange,
  robot_data: {
    name,
    type,
    speed_step,
    speed_min,
    speed_max
  },
  robotTypes,
  onRobotUpdate
}) => {
  const theme = useTheme()
  const [robotName, setRobotName] = useState(name)
  const [selectedRobotType, setSelectedRobotType] = useState(type)
  const [speedStep, setSpeedStep] = useState(speed_step)
  const [speedMin, setSpeedMin] = useState(speed_min)
  const [speedMax, setSpeedMax] = useState(speed_max)

  const onSubmit = (e) => {
    e.preventDefault()

    const data = {
      id,
      name: robotName,
      type: selectedRobotType,
      speed_step: speedStep,
      speed_min: speedMin,
      speed_max: speedMax,
    }

    onRobotUpdate(data)
  }

  const handleNameChange = (event) => {
    setRobotName(event.target.value);
  };

  const handleRobotTypeChange = (e) => setSelectedRobotType(e.target.value)
  const handleSpeedStepChange = (e) => setSpeedStep(e.target.value)
  const handleSpeedMinChange = (e) => setSpeedMin(e.target.value)
  const handleSpeedMaxChange = (e) => setSpeedMax(e.target.value)

  const disabled = !robotName || !selectedRobotType

  return (
    <AccordionWrapper expanded={expanded === index} onChange={onChange(index)}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon color='primary'/>}
        >
          <BoxTitle>{`Robot ${index}`}</BoxTitle>
        </AccordionSummary>
        <AccordionDetails>
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
                >
                  {robotTypes.map((robotType) => (
                    <SelectOption key={robotType.id} value={robotType.id}>
                      <RoboTypeIcon color={robotType.id === selectedRobotType ? '#28BDEB' : '#C4C4C4'} type={robotType.label} />
                      <Typography sx={{ marginLeft: '8px', fontSize: '14px' }} >{robotType.label}</Typography>
                    </SelectOption>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12}>
              <Divider sx={{ margin: '12px 0', borderColor: theme.palette.hr.main }}/>
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
                  onChange={handleSpeedMaxChange}
                />
              </FormControl>
            </Grid>
            <Grid item container xs={12} sx={{ marginTop: '12px' }}>
              <Button disabled={disabled} type='submit' sx={{ marginLeft: 'auto' }}>APPLY</Button>
            </Grid>
          </Grid>
        </AccordionDetails>
    </AccordionWrapper>
  )
}

export default Accordion
