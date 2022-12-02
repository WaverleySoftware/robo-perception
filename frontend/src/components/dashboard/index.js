import React from 'react'
import { observer } from 'mobx-react'
import { Grid } from '@mui/material'
import VideoPlayerView from '../../VideoPlayer'
import { useStore } from '../../store'
import poster from '../../Media/pupper_cool.jpeg'
import TabPanel from '../tabPanel'
import InputController from '../inputController'
import AdditionalActions from '../additionalActions'
import RobotSpeed from '../robotSpeed'
import RobotHardware from '../robotHardware'

const Dashboard = observer(() => {
  const {
    navigationStore: { activeTab },
    settingsStore: { widgets }
  } = useStore()

  const isBatteryWidgetSelected = widgets.find((widget) => widget.name === 'battery').selected
  const isRobotSpeedWidgetSelected = widgets.find((widget) => widget.name === 'speed').selected
  const isAdditionalActionsWidgetSelected = widgets.find((widget) => widget.name === 'actions').selected

  return (
    <TabPanel value={activeTab} index={0}>
      <Grid
        container
        component='main'
        sx={{
          width: '1440px',
          margin: '0 auto',
          padding: '0 40px',
          justifyContent: 'center',
        }}
      >
        <VideoPlayerView poster={poster} controls={false} />
        <Grid item sx={{flexGrow: 1, marginLeft: '16px', maxWidth: '557px'}}>
          <Grid container spacing={2} marginBottom='16px' justifyContent='center'>
            {isBatteryWidgetSelected && <Grid item xs={6} >
              <RobotHardware />
            </Grid>}
            {(isRobotSpeedWidgetSelected || isAdditionalActionsWidgetSelected) && <Grid item xs={6} >
              <RobotSpeed />
              <AdditionalActions/>
            </Grid>}
          </Grid>
          <InputController />
        </Grid>
      </Grid>
    </TabPanel>
  )
})

export default Dashboard
