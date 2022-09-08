import React from 'react'
import Logo from '../logo'
import './style.css'

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <ul className='header-menu'>
        <li>Dashboard</li>
        <li>Settings</li>
      </ul>
    </header>
  )
}

export default Header
