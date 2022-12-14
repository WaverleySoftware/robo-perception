
import { Grid, SvgIcon, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { observer } from 'mobx-react'
import Widget, { WidgetTitle } from '../widget'
import { ReactComponent as RobotStandIcon } from './robot_stand.svg'
import { ReactComponent as RobotSitIcon } from './robot_sit.svg'
import { robotPosition } from '../../store/RosController'
import { useStore } from '../../store'

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
      backgroundColor: isActive ? theme.palette.info.main : theme.palette.background.robotPositionButton,
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
        color: isActive ? theme.palette.common.white : theme.palette.background.robotPositionTitle,
        fontWeight: theme.typography.fontWeightRegular,
      }}

    >{heading}</Typography>
  </Grid>
})

const AdditionalActions = observer(() => {
  const theme = useTheme()
  const { rosStore: { currentPosition, setCurrentPosition }} = useStore()

  return (
    <Widget widgetName='actions'>
      <WidgetTitle>Additional actions</WidgetTitle>
      <Grid container justifyContent='center'>
        <RobotPositionButton
          heading='Stand'
          position={robotPosition.stand}
          currentPosition={currentPosition}
          handleClick={setCurrentPosition}
        >
          <SvgIcon
            component={RobotStandIcon}
            inheritViewBox
            sx={{
              fill: currentPosition === robotPosition.stand ? theme.palette.common.white : theme.palette.secondary.main
            }} />
        </RobotPositionButton>
        <RobotPositionButton
          heading='Sit'
          position={robotPosition.sit}
          currentPosition={currentPosition}
          handleClick={setCurrentPosition}
        >
          <SvgIcon
            component={RobotSitIcon}
            inheritViewBox
            sx={{
              fill: currentPosition === robotPosition.sit ? theme.palette.common.white : theme.palette.secondary.main
            }}
          />
        </RobotPositionButton>
      </Grid>
    </Widget>
  )
})

export default AdditionalActions