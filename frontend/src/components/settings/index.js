import React from 'react'
import { observer } from 'mobx-react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { useStore } from '../../store'
import TabPanel from '../tabPanel'
import { useLocalStorage } from '../../hooks'

import Widgets from './Widgets'
import RobotName from './RobotName'
import AppTheme from './AppTheme'
import Speed from './Speed'

const Settings = observer(() => {
  const {
    navigationStore: { activeTab },
  } = useStore()
  const [storedData, setStoredData] = useLocalStorage('settings', null)

  return (
    <TabPanel value={activeTab} index={1}>
      <Box sx={{ paddingTop: '1rem' }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Grid container direction='column' spacing={2}>
                <Grid item xs={12}>
                  <RobotName />
                </Grid>
                <Grid item xs={12}>
                  <Speed />
                </Grid>
                <Grid item xs={12}>
                  <AppTheme />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Widgets />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </TabPanel>
  )
})

export default Settings
