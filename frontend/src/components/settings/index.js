import React from 'react'
import { observer } from 'mobx-react'
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
import ListItemButton from '@mui/material/ListItemButton'
import List from '@mui/material/List'
import CheckIcon from '@mui/icons-material/Check'
import ListItemText from '@mui/material/ListItemText'

import { useStore } from '../../store'
import TabPanel from '../tabPanel'
import TitledBox from '../titledBox'
import Toggle from '../toggle'
import RoboTypeIcon from '../roboTypeIcon'

const Settings = observer(() => {
  const {
    navigationStore: { activeTab },
    settingsStore: {
      currentRobotType,
      currentAppTheme,
      robotTypes,
      appThemes,
      widgets,
      setAppTheme,
      setRobotType,
      toggleWidget
    }
  } = useStore()
  const onThemeChange = (e) => setAppTheme(e.target.value)
  const onRobotTypeChange = (e) => setRobotType(e.target.value)
  const onToggleWidget = (id) => toggleWidget(id)

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
                            value={currentRobotType?.id || ''}
                            label="Choose the type"
                            onChange={onRobotTypeChange}
                            renderValue={() => currentRobotType?.label}
                          >
                            {robotTypes.map(type => (
                              <MenuItem key={type.id} value={type.id}>
                                <RoboTypeIcon selected={type.id === currentRobotType?.id} type={type.label} maxHeight='21px' />
                                <ListItemText sx={{paddingLeft: '0.5rem'}} primary={type.label} />
                                {type.id === currentRobotType?.id && <CheckIcon/>}
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
                        value={currentAppTheme?.id || ''}
                        label="Choose the theme"
                        onChange={onThemeChange}
                      >
                        {
                          appThemes.map(theme => (
                              <MenuItem key={theme.id} value={theme.id}>{theme.label}</MenuItem>
                            )
                          )
                        }
                      </Select>
                    </FormControl>
                  </TitledBox>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <TitledBox title="Widgets">
                <List>
                  {widgets.map(widget => (
                    <ListItem disablePadding key={widget.id}>
                      <ListItemButton selected={widget.selected}
                                      onClick={() => onToggleWidget(widget.id)}>
                        <ListItemText primary={widget.label} />
                        <Toggle checked={widget.selected} />
                      </ListItemButton>
                    </ListItem>
                  ))}
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
