import { styled, useTheme } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import { useStore } from '../../store'
import {ReactComponent as ConnectionOffIcon} from './connectionOff.svg'
import {ReactComponent as TeleopOffIcon} from './teleopOff.svg'

const IconWrapper = styled(Grid)(() => ({
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(183, 192, 217, 0.2)',
}))

const ConnectionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '16px',
  marginLeft: '24px',
  width: '330px',
}))

const ConnectionInfo = observer(() => {
  const theme = useTheme()
  const {
    rosStore: { isWSConnected, isTeleopReady },
  } = useStore()

  return (!isWSConnected || !isTeleopReady) && (
    <Grid sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.common.black,
      zIndex: 1,
      borderRadius: theme.shape.cardBorderRadius,
    }}>
      <Grid>
        {!isWSConnected && <Grid container alignItems='center' marginBottom='32px'>
          <IconWrapper>
            <ConnectionOffIcon />
          </IconWrapper>
          <ConnectionText>Connection problems (robot or internet)</ConnectionText>
        </Grid>}
        {/* TODO: uncomment message when proper condition is defined */}
        {/* {!isWebRtcConnected && <Grid container alignItems='center' marginBottom='32px'>
          <IconWrapper>
            <CameraOffIcon />
          </IconWrapper>
          <ConnectionText>The camera is off.<br/>To start teleoperation enable the camera</ConnectionText>
        </Grid>} */}
        {!isTeleopReady && <Grid container alignItems='center' marginBottom='32px'>
          <IconWrapper>
            <TeleopOffIcon />
          </IconWrapper>
          <ConnectionText>Teleoperation problems</ConnectionText>
        </Grid>}
      </Grid>
    </Grid>
  )
})

export default ConnectionInfo
