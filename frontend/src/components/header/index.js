import React from 'react'
import { observer } from 'mobx-react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { styled } from '@mui/system'
import { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { useStore } from '../../store'
import Logo from '../logo'
import './style.css'

const TabStyled = styled(Tab)`
  color: #333333;
  padding: 0;
  margin-left: 35px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;

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

  return (
    <header className='header'>
      <Logo />
      <Tabs
        value={activeTab}
        onChange={handleChange}
        TabIndicatorProps={{
          hidden: true
        }}
      >
        <TabStyled label='Dashboard' />
        <TabStyled label='Settings' />
      </Tabs>
    </header>
  )
})

export default Header
