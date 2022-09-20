import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../store'
import TabPanel from '../tabPanel';

const Settings = observer(() => {
  const {navigationStore: { activeTab }} = useStore()

  return (
    <TabPanel value={activeTab} index={1}>
        <h1>Settings</h1>
    </TabPanel>
  )
})

export default Settings
