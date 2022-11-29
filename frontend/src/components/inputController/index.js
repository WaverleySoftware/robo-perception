import React, {useState} from 'react'
import { observer } from 'mobx-react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import { styled } from '@mui/material/styles'
import { Paper, SvgIcon, Typography } from '@mui/material'
import { ReactComponent as KeyboardIcon } from './keyboardIcon.svg'
import { ReactComponent as JoystickIcon } from './joystickIcon.svg'
import TabPanel from '../tabPanel'
import Keyboard from '../keyboard'
import Joystick from '../joystick'
import { useTheme } from '@mui/material/styles'

const InputControllerTab = styled(Tab)(({ theme }) => ({
  fontSize: '6px',
  textTransform: 'capitalize',
  color: theme.palette.secondary.main,
  minHeight: 'auto',
  minWidth: 'auto',
  padding: '4px 6px',
  '& .MuiSvgIcon-root': {
    fill: theme.palette.secondary.main,
  },
  [`&.${tabUnstyledClasses.selected}`]: {
    color: theme.palette.info.main,
    '.MuiSvgIcon-root': {
      fill: theme.palette.info.main,
    },
  },
}))

const TabPanelTitle = (props) => {
  const theme = useTheme()

  return (
    <Typography
      component='h6'
      sx={{
        fontSize: '16px',
        color: theme.palette.primary.main,
        padding: '0 100px',
        textAlign: 'center',
        marginBottom: '8px',
      }}>
      {props.children}
    </Typography>
  )
}

const InputController = observer(() => {
  const [activeTab, setActiveTab] = useState(0)
  const handleChange = (_event, newValue) => {
    setActiveTab(newValue);
  }
  const theme = useTheme()

  return (
    <Paper sx={{borderRadius: theme.shape.cardBorderRadius, position: 'relative', padding: '24px 0 8px'}}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        TabIndicatorProps={{
          hidden: true
        }}
        sx={{ position: 'absolute', right: '12px', top: '12px' }}
      >
        <InputControllerTab label='Keyboard' icon={<SvgIcon component={KeyboardIcon} inheritViewBox sx={{fill: 'none'}} />} />
        <InputControllerTab label='Joystick' icon={<SvgIcon component={JoystickIcon} inheritViewBox sx={{fill: 'none'}} />} />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        <TabPanelTitle>Keyboard</TabPanelTitle>
        <Keyboard />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <TabPanelTitle>Joystick</TabPanelTitle>
        <Joystick />
      </TabPanel>
    </Paper>
  )
})

export default InputController
