import React from 'react'
import { observer } from 'mobx-react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { styled } from '@mui/system'
import { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Grid from '@mui/material/Grid'
import { useStore } from '../../store'
import Logo from '../logo'
import RoboDesignation from '../roboDesignation'
import Button from '../button'
import './style.css'

const TabStyled = styled(Tab)`
  color: #333333;
  padding: 0;
  margin-left: 35px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  min-height: auto;
  padding: 4px 0;

  &.${tabUnstyledClasses.selected} {
    color: #333333;
    border-bottom: 1px solid #333333;
  }
`;

const Header = observer(() => {
  const {navigationStore: { activeTab, setActiveTab }} = useStore()

  const handleChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  const handleGuideClick = () => {
    console.log('Guide button click')
  }

  return (
    <header className='header'>
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
        <RoboDesignation />
      </Grid>
    </header>
  )
})

export default Header
