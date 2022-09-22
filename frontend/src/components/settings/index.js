import React from 'react'
import { observer } from 'mobx-react'
import styled from '@emotion/styled'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import CheckIcon from '@mui/icons-material/Check'
import ListItemText from '@mui/material/ListItemText'
import { ReactComponent as LeggedIcon } from './icons/legged.svg'
import { ReactComponent as ManipulatorsIcon } from './icons/manipulators.svg'
import { ReactComponent as QuadrocopterIcon } from './icons/quadrocopter.svg'
import { ReactComponent as WheeledIcon } from './icons/wheeled.svg'
import { ReactComponent as WheeledLeggedManipulIcon } from './icons/wheeled_legged_manipul.svg'

import { useStore } from '../../store'
import TabPanel from '../tabPanel';
import TitledBox from '../TitledBox'

const generateList = (array, propNames, element, children) => {
  const propsObj = propNames.reduce((acc, name) => {
    acc[name] = undefined
    return acc
  }, {})

  return array.map((value) => {
    for (const key in propsObj) {
      propsObj[key] = value
    }

    return React.cloneElement(element, propsObj, children || value)
  })
}

const RobotTypeIcon = ({type, className}) => {
  let Icon;

  switch (type) {
    case 'Legged':
      Icon = <LeggedIcon className={className} />
      break
    case 'Wheeled':
      Icon = <WheeledIcon className={className} />
      break
    case 'Manipulators':
      Icon = <ManipulatorsIcon className={className} />
      break
    case 'Wheeled/Legged+manipul':
      Icon = <WheeledLeggedManipulIcon className={className} />
      break
    default:
      Icon = <QuadrocopterIcon className={className} />
  }

  return Icon
}

const RobotTypeIconStyled = styled(RobotTypeIcon)`
  max-height: 21px
`

const Settings = observer(() => {
  const {
    navigationStore: { activeTab },
    settingsStore: {
      currentRobotType,
      currentAppTheme,
      robotTypes,
      appThemes,
      setAppTheme,
      setRobotType
    }
  } = useStore()
  const onThemeChange = (e) => setAppTheme(e.target.value)
  const onRobotTypeChange = (e) => setRobotType(e.target.value)

  return (
    <TabPanel value={activeTab} index={1}>
      <Box sx={{paddingTop: '1rem'}}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <TitledBox title="Name of robot">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <TextField fullWidth label="Name" variant="outlined" />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <InputLabel id="robot-type-select">Choose the type</InputLabel>
                          <Select
                            labelId="robot-type-select"
                            id="robot-type"
                            value={currentRobotType}
                            label="Choose the type"
                            onChange={onRobotTypeChange}
                            renderValue={(selected) => selected}
                          >
                            {robotTypes.map(type => (
                              <MenuItem key={type} value={type}>
                                <RobotTypeIconStyled type={type} /><ListItemText sx={{paddingLeft: '0.5rem'}} primary={type} />{type === currentRobotType && <CheckIcon/>}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </TitledBox>
                </Grid>
                <Grid item xs={12}>
                  <TitledBox title="Speed">
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField fullWidth label="Step of speed in %" variant="outlined" />
                      </Grid>
                      <Grid item>
                        <Grid container spacing={2}>
                          <Grid item xs={12}><Typography variant="subtitle1">Set speed values</Typography></Grid>
                          <Grid item xs={6}>
                            <TextField fullWidth label="Min" variant="outlined" />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField fullWidth label="Max" variant="outlined" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </TitledBox>
                </Grid>
                <Grid item xs={12}>
                  <TitledBox title="Theme">
                    <FormControl fullWidth>
                      <InputLabel id="theme-select">Choose the theme</InputLabel>
                      <Select
                        labelId="theme-select"
                        id="theme-select-id"
                        value={currentAppTheme}
                        label="Choose the theme"
                        onChange={onThemeChange}
                      >
                        {generateList(appThemes, ['key', 'value'], <MenuItem></MenuItem>)}
                      </Select>
                    </FormControl>
                  </TitledBox>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <TitledBox title="Widgets">
                <List>
                  <ListItem></ListItem>
                </List>
              </TitledBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </TabPanel>
  )
})

export default Settings
