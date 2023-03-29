import React from 'react'
import { observer } from 'mobx-react'
import { Grid } from '@mui/material'
import { useStore } from '../../store'
import TabPanel from '../tabPanel'
import ControlledAccordions from '../controlledAccordions'
import Widgets from '../widgets'

const Settings = observer(() => {
  const {
    navigationStore: { activeTab },
  } = useStore()

  return (
    <TabPanel value={activeTab} index={1}>
      <Grid sx={{ maxWidth: '900px', margin: '0 auto' }} container spacing={2}>
        <Grid item xs={8}>
          <ControlledAccordions />
        </Grid>
        <Grid item xs={4}>
          <Widgets />
        </Grid>
      </Grid>
    </TabPanel>
  )
})

export default Settings
