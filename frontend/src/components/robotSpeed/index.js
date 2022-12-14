
import { Button, Grid, SvgIcon, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import { observer } from 'mobx-react'
import { useStore } from '../../store'
import Widget, { WidgetTitle } from '../widget'
import { ReactComponent as SpeedIcon } from './speed.svg'

const RobotSpeedButton = styled(Button)(({ theme }) => ({
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  backgroundColor: theme.palette.common.white,
  color: theme.palette.info.main,
  fontWeight: 500,
  fontSize: '26px',
  minWidth: 'auto',
  boxShadow: theme.palette.boxShadow.robotSpeedButton,
  '&:hover': {
    backgroundColor: '#C8F0F8',
  },
  '&:active': {
    backgroundColor: '#A9E5F7',
  },
  '&:disabled': {
    backgroundColor: theme.palette.background.robotSpeedButtonDisabled,
    color: theme.palette.secondary.main,
  },
}))

const RobotSpeed = observer(() => {
  const theme = useTheme()
  const {
    settingsStore: { robotSpeed, decreeseRobotSpeed, increeseRobotSpeed, robots_settings, currentRobotId }
  } = useStore()

  const speedMax = robots_settings.find(({id}) => id === currentRobotId).speed_max

  return (
    <Widget widgetName='speed' styles={{marginBottom: '16px'}}>
      <WidgetTitle>Robot's speed</WidgetTitle>
      <SvgIcon
        component={SpeedIcon}
        inheritViewBox
        sx={{
          position: 'absolute',
          top: '24px',
          left: '26px',
        }}
      />
      <Grid container alignItems='center' justifyContent='center'>
        <RobotSpeedButton onClick={decreeseRobotSpeed} disabled={robotSpeed <= 1}>-</RobotSpeedButton>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.text.robotSpeedValue,
            margin: '0 24px',
          }}
        >{robotSpeed}</Typography>
        <RobotSpeedButton onClick={increeseRobotSpeed} disabled={robotSpeed >= speedMax}>+</RobotSpeedButton>
      </Grid>
    </Widget>
  )
})

export default RobotSpeed
