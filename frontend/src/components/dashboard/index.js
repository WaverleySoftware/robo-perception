import React from 'react'
import { observer } from 'mobx-react'
import { Grid } from '@mui/material'
import VideoPlayerView from '../../VideoPlayer'
import { useStore } from '../../store'
import poster from '../../Media/pupper_cool.jpeg'
import TabPanel from '../tabPanel'
import InputController from '../inputController'

const Dashboard = observer(() => {
  const {navigationStore: { activeTab }} = useStore()

  return (
    <TabPanel value={activeTab} index={0}>
      <Grid
        container
        component='main'
        sx={{
          width: '1440px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <Grid item sx={{width: '787px'}}>
          <VideoPlayerView poster={poster} controls={false} />
        </Grid>
        <Grid item sx={{flexGrow: 1, marginLeft: '16px'}}>
          <InputController />
        </Grid>
      </Grid>
    </TabPanel>
  )
})

export default Dashboard
