
import { Grid, SvgIcon, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { observer } from 'mobx-react'
import Widget, { WidgetTitle } from '../widget'
import { ReactComponent as RobotStandIcon } from './robot_stand.svg'
import { ReactComponent as RobotSitIcon } from './robot_sit.svg'
import { useStore } from '../../store'
import { RobotPose } from '../../constants'
import { isLightMode } from '../../themes/base'

const RobotPositionButton = observer(({heading = '', position, currentPosition, children, handleClick}) => {
  const theme = useTheme()
  const isActive = position === currentPosition

  const handlePositionClick = () => {
    handleClick(position)
  }

  return <Grid
    container
    item
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isActive ? theme.palette.info.main : isLightMode(theme.palette.mode) ? theme.palette.grey[300] : theme.palette.grey[200],
      width: '80px',
      height: '80px',
      borderRadius: '26px',
      margin: '0 12px',
      cursor: 'pointer',
    }}
    onClick={handlePositionClick}
  >
    {children}
    <Typography
      sx={{
        fontSize: '11px',
        color: isActive ? theme.palette.common.white : isLightMode(theme.palette.mode) ? theme.palette.primary.main : theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightRegular,
      }}

    >{heading}</Typography>
  </Grid>
})

const AdditionalActions = observer(() => {
  const theme = useTheme()
  const { rosStore: { isStanding, changePose } } = useStore()

  const pose = () => {
    return isStanding ? RobotPose.STAND : RobotPose.SIT
  }

  const colorOf = (expectedPose) => {
    return pose() === expectedPose ? theme.palette.common.white : theme.palette.secondary.main
  }

  return (
    <Widget widgetName='actions'>
      <WidgetTitle>Additional actions</WidgetTitle>
      <Grid container justifyContent='center'>
        <RobotPositionButton
          heading='Stand'
          position={RobotPose.STAND}
          currentPosition={pose()}
          handleClick={() => changePose(RobotPose.STAND)}
        >
          <SvgIcon
            component={RobotStandIcon}
            inheritViewBox
            sx={{
              fill: colorOf(RobotPose.STAND)
            }} />
        </RobotPositionButton>
        <RobotPositionButton
          heading='Sit'
          position={RobotPose.SIT}
          currentPosition={pose()}
          handleClick={() => changePose(RobotPose.SIT)}
        >
          <SvgIcon
            component={RobotSitIcon}
            inheritViewBox
            sx={{
              fill: colorOf(RobotPose.SIT)
            }}
          />
        </RobotPositionButton>
      </Grid>
    </Widget>
  )
})

export default AdditionalActions