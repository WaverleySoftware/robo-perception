import React, {useState} from 'react'
import { observer } from 'mobx-react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import { styled } from '@mui/material/styles'
import { SvgIcon, Typography } from '@mui/material'
import { ReactComponent as KeyboardIcon } from './keyboardIcon.svg'
import { ReactComponent as JoystickIcon } from './joystickIcon.svg'
import TabPanel from '../tabPanel'
import { useTheme } from '@mui/material/styles'

const TabTitle = styled(Tab)(({ theme }) => ({
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

export const TabPanelTitle = (props) => {
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

const InputTabs = observer(({ tabStyles = {position: 'absolute', right: '12px', top: '12px'}, renderKeyboardContent, renderJoystickContent }) => {
  const [activeTab, setActiveTab] = useState(0)
  const handleChange = (_event, newValue) => {
    setActiveTab(newValue);
  }
  const keyboardContent = renderKeyboardContent()
  const joystickContent = renderJoystickContent()

  return (
    <>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        TabIndicatorProps={{
          hidden: true
        }}
        sx={tabStyles}
      >
        <TabTitle label='Keyboard' icon={<SvgIcon component={KeyboardIcon} inheritViewBox sx={{fill: 'none'}} />} />
        <TabTitle label='Joystick' icon={<SvgIcon component={JoystickIcon} inheritViewBox sx={{fill: 'none'}} />} />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        {keyboardContent}
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        {joystickContent}
      </TabPanel>
    </>
  )
})

export default InputTabs
