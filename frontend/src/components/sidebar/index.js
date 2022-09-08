import React from 'react'
import {ReactComponent as Robologo} from './spot.svg'
import './style.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'><Robologo className='sidebar-header__logo'/>Spot 1234 869 Full Name</div>
      <div className='sidebar-content'>
        <h2 className='sidebar-content__header'>navigation tools</h2>
        <ul className='sidebar-content__metrics'>
            <li>BATTERY</li>
            <li>CPU</li>
            <li>MEM</li>
            <li>PING</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
