import React from 'react'
import { observer } from 'mobx-react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { styled } from '@mui/system'
import { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import Grid from '@mui/material/Grid'
import { Button, Select, SvgIcon, Typography } from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useTheme } from '@mui/material/styles'
import { useStore } from '../../store'
import SelectOption from '../selectOption'
import RobotTypeIcon from '../roboTypeIcon'
import {ReactComponent as Logo} from './logo.svg'
import { ReactComponent as DashboardIcon } from './dashboard.svg'
import { ReactComponent as SettingsIcon } from './settings.svg'
import { ReactComponent as GuideIcon } from './guide.svg'
import LiveClock from './liveClock'

const RobotSelect = styled(Select)(({ theme }) => ({
  width: '200px',
  '& .MuiSelect-select': {
    padding: '8px 32px 8px 12px',
  },
  '& .MuiSelect-icon': {
    color: theme.palette.primary.main
  },
  '&.MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
}))

const SelectRenderValue = ({ value, robots_settings, robotTypes }) => {
  const theme = useTheme()
  const selectedRobot = robots_settings.find(robot => robot.id === value)  

  return (
    <Grid container sx={{alignItems: 'center', flexDirection: 'row'}}>
      <Typography sx={{marginRight: '12px', fontSize: '14px', color: theme.palette.text.primary, width: '100px', overflow: 'hidden'}}>{selectedRobot.name}</Typography>
      <Grid sx={{ width: '36px', height: '36px', borderRadius: '50%', background: theme.palette.robotSelect.iconBg, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <RobotTypeIcon color={'#C4C4C4'} type={selectedRobot.type} />
      </Grid>
    </Grid>
  )
}

const TabStyled = styled(Tab)(({ theme }) => ({
  fontSize: '11px',
  padding: '10px',
  textTransform: 'capitalize',
  '& .MuiSvgIcon-root': {
    fontSize: '36px',
    stroke: theme.palette.text.secondary,
    marginBottom: 0,
  },
  [`&.${tabUnstyledClasses.selected} .MuiSvgIcon-root`]: {
    stroke: theme.palette.text.primary
  },
}))

const Header = observer(() => {
  const {
    navigationStore: { activeTab, setActiveTab },
    settingsStore: { robotTypes, robots_settings, currentRobotId, updateCurrentRobotId}
  } = useStore()
  const theme = useTheme()

  const handleChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  const handleGuideClick = () => {
    console.log('Guide button click')
  }

  const handleRobotChange = (event) => {
    event.preventDefault()
    updateCurrentRobotId(event.target.value);
  }
 
  return (
    <Grid container sx={{ height: '80px', maxWidth: '1440px', margin: '0 auto', padding: '0 26px 0 40px', alignItems: 'center' }}>
      <Grid item xs={5} container sx={{alignItems: 'center'}}>
        <Logo />
      </Grid>
      <Grid container item xs={2} sx={{justifyContent: 'center'}}>
        <Tabs
        value={activeTab}
        onChange={handleChange}
        TabIndicatorProps={{
          hidden: true
        }}
      >
        <TabStyled label='Dashboard' icon={<SvgIcon component={DashboardIcon} inheritViewBox sx={{fill: 'none'}} />} />
        <TabStyled label='Settings' icon={<SvgIcon component={SettingsIcon} inheritViewBox sx={{fill: 'none'}} />} />
      </Tabs>
      </Grid>

      <Grid item xs={5} sx={{marginLeft: 'auto', width: 'auto', justifyContent: 'right'}} container>
        <LiveClock />
        <Button
          variant='text'
          color='info'
          startIcon={<SvgIcon color='success' component={GuideIcon} inheritViewBox sx={{fill: 'none'}}/>} 
          sx={{ margin: '0 4px', textTransform: 'capitalize', padding: '0 12px', fontSize: '14px', fontWeight: theme.typography.fontWeightMedium }}
          onClick={handleGuideClick}
        >
          View Guide
        </Button>
        <RobotSelect
          value={currentRobotId}
          label='Select the robot'
          onChange={handleRobotChange}
          notched={false}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: theme.palette.robotSelect.dropdownBg,
              },
            },
          }}
          renderValue={(value) => <SelectRenderValue value={value} robotTypes={robotTypes} robots_settings={robots_settings}/>}
          IconComponent={(props) => <ExpandMore {...props}/>}
        >
          {robots_settings.map((robotDate) => (
            <SelectOption key={robotDate.id} value={robotDate.id}>
              <RobotTypeIcon color={robotDate.id === currentRobotId ? '#28BDEB' : '#C4C4C4'} type={robotDate.type} />
              <Typography sx={{ marginLeft: '8px', fontSize: '14px' }} >{robotDate.name}</Typography>
            </SelectOption>
          ))}
        </RobotSelect>
      </Grid>
    </Grid>
  )
})

export default Header
