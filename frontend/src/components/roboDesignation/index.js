import React from 'react'
import './style.css'
import RoboTypeIcon from '../roboTypeIcon'

const RoboDesignation = ({name, type}) => {
  return (
    <div className='robo-designation'>
      <RoboTypeIcon className='robo-designation__logo' type={type?.label} />
      {name}
    </div>
  )
}

export default RoboDesignation
