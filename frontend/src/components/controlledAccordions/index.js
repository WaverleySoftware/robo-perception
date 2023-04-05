import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../store'
import Accordion from '../accordion'

const ControlledAccordions = observer(() => {
  const { settingsStore: { robotsSettings, robotTypes, updateRobotSettings }} = useStore()
  const [expanded, setExpanded] = React.useState(1)

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      {robotsSettings.map((robot_data, index) => {
        return (<Accordion 
          key={robot_data.id}
          id={robot_data.id}
          index={index+1}
          expanded={expanded}
          onChange={handleChange}
          robotTypes={robotTypes}
          onRobotUpdate={updateRobotSettings}
          robot_data={robot_data}/>
        )
      })}
    </>
  )
})

export default ControlledAccordions
