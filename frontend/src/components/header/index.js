import React, { useMemo } from 'react'
import { observer } from 'mobx-react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { styled } from '@mui/system'
import { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Grid from '@mui/material/Grid'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles'
import { useStore } from '../../store'
import Logo from '../logo'
import RoboDesignation from '../roboDesignation'
import Button from '../button'
import './style.css'

const TabStyled = styled(Tab)`
  color: ${props => props.theme.palette.mode === 'light' ? '#fff' : '#333'};
  padding: 0;
  margin-left: 35px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  min-height: auto;
  padding: 4px 0;

  &.${tabUnstyledClasses.selected} {
    color: ${props => props.theme.palette.mode === 'light' ? '#fff' : '#333'};
    border-bottom: 1px solid ${props => props.theme.palette.mode === 'light' ? '#fff' : '#333'};
  }
`;

const Header = observer(() => {
  const {
    navigationStore: { activeTab, setActiveTab },
    settingsStore: { currentRobotName, currentRobotType }
  } = useStore()
  const globalTheme = useTheme()
  const headerTheme = useMemo(() => createTheme(globalTheme, {
    palette: {
      mode: globalTheme.palette.mode === 'light' ? 'dark' : 'light'
    }
  }), [globalTheme.palette.mode]);

  const handleChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  const handleGuideClick = () => {
    console.log('Guide button click')
  }

  return (
    <ThemeProvider theme={headerTheme}>
      <header className={`header ${globalTheme.palette.mode}`}>
        <Logo />
        <Tabs
          value={activeTab}
          onChange={handleChange}
          TabIndicatorProps={{
            hidden: true
          }}
          sx={{
            marginLeft: '35px',
            minHeight: 'auto'
          }}
        >
          <TabStyled label='Dashboard' />
          <TabStyled label='Settings' />
        </Tabs>
        <Grid sx={{marginLeft: 'auto', width: 'auto'}} container>
          <Button
            variant='contained'
            sx={{ marginRight: '16px' }}
            onClick={handleGuideClick}
          >
            Guide
          </Button>
          <RoboDesignation name={currentRobotName || 'Robot name'} type={currentRobotType} />
        </Grid>
      </header>
    </ThemeProvider>
  )
})

export default Header
