import React from 'react'
import { observer } from 'mobx-react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

import { useStore } from '../../store'
import TabPanel from '../tabPanel'
import TitledBox from '../titledBox'
import { useLocalStorage } from '../../hooks'

import WidgetsList from './WidgetsList'
import RobotName from './RobotName'
import AppTheme from './AppTheme'

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
                  <TitledBox title='Speed'>
                    <Grid container direction='column' spacing={2}>
                      <Grid item>
                        <TextField fullWidth label='Step of speed in %' variant='outlined' />
                      </Grid>
                      <Grid item>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Typography variant='subtitle1'>Set speed values</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <TextField fullWidth label='Min' variant='outlined' />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField fullWidth label='Max' variant='outlined' />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </TitledBox>
                </Grid>
                <Grid item xs={12}>
                  <AppTheme />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <WidgetsList />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </TabPanel>
  )
})

export default Settings
