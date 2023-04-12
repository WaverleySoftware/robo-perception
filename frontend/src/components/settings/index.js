import React from 'react'
import { observer } from 'mobx-react'
import { Grid } from '@mui/material'
import { useStore } from '../../store'
import TabPanel from '../tabPanel'
import Widgets from '../widgets'
import { NavigationTabs } from '../../store/Navigation'
import RobotPropertiesSettings from '../robotPropertiesSettings'
import SettingsModal from '../settingsModal'

const Settings = observer(() => {
  const {
    navigationStore: { activeTab },
  } = useStore()

  return (
    <TabPanel activeTab={activeTab} value={NavigationTabs.SETTINGS}>
      <Grid sx={{ maxWidth: '900px', margin: '0 auto' }} container spacing={2}>
        <Grid item xs={8}>
          <RobotPropertiesSettings />
        </Grid>
        <Grid item xs={4}>
          <Widgets />
        </Grid>
      </Grid>
      <SettingsModal />
    </TabPanel>
  )
})

export default Settings
