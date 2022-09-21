import React from 'react'
import './style.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
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
