import React from 'react'
import { observer } from 'mobx-react'
import { Grid, Typography } from '@mui/material'
import VideoPlayerView from '../videoPlayer'
import { useStore } from '../../store'
import poster from '../../Media/pupper_cool.jpeg'
import TabPanel from '../tabPanel'
import InputController from '../inputController'
import AdditionalActions from '../additionalActions'
import RobotSpeed from '../robotSpeed'
import RobotHardware from '../robotHardware'
import StreamingModal from '../streamingModal'
import { NavigationTabs } from '../../store/Navigation'
import { useTheme } from '@mui/material/styles'
import { isLightMode } from '../../themes/base'
import useMediaQuery from '@mui/material/useMediaQuery'

const Dashboard = observer(() => {
  const {
    navigationStore: { activeTab },
    settingsStore: { currentRobotId, showSidebar, currentRobot },
    rosStore: { isWSConnected, isTeleopReady },
  } = useStore()

  const connected = isWSConnected && isTeleopReady
  const isBatteryWidgetSelected = currentRobot?.widgets.find((widget) => widget.name === 'battery')?.selected
  const isRobotSpeedWidgetSelected = currentRobot?.widgets.find((widget) => widget.name === 'speed')?.selected
  const isAdditionalActionsWidgetSelected = currentRobot?.widgets.find((widget) => widget.name === 'actions')?.selected

  const theme = useTheme()
  const isFullHD = useMediaQuery('(min-width:1920px)')

  return (
    <TabPanel activeTab={activeTab} value={NavigationTabs.DASHBOARD} sx={{marginLeft: '256px'}}>
      {currentRobotId ? <Grid
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
          {connected && <>          
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
          </>}
        </Grid>
      </Grid> : <Typography sx={{
        marginLeft: showSidebar && !isFullHD ? '256px' : 0,
        height: 'calc(100vh - 140px)',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isLightMode(theme.palette.mode) ? theme.palette.secondary.main : '#DFE5F7',
        marginTop: '-70px',
        transition: theme.transitions.create(['margin'], {
          duration: 250,
        }),
      }}>Select location filters<br/> to view robot list </Typography>}
      <StreamingModal />
    </TabPanel>
  )
})

export default Dashboard
