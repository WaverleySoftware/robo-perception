
import { Divider, Grid, SvgIcon, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { observer } from 'mobx-react'
import { useStore } from '../../store'
import Widget, { WidgetTitle } from '../widget'
import { ReactComponent as LightningIcon } from './lightning.svg'
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BatteryLevelDivider = observer(({left = '0'}) => {
  const theme = useTheme()

  return <Divider
    orientation='vertical'
    variant='middle'
    sx={{
      height: '12px',
      backgroundColor: theme.palette.common.white,
      borderColor: theme.palette.hr.batteryLevel,
      margin: 0,
      position: 'absolute',
      top: '3px',
      left,
      marginLeft: '-1px',
    }}
  />
})

const Battery = observer(() => {
  const theme = useTheme()
  const {rosStore: { batteryState }} = useStore()
  const Level = {
    HIGH: 'High',
    AVG: 'Average',
    LOW: 'Low'
  }

  const paletteColorOf = (level) => {
    return (level === Level.LOW ? theme.palette.error : level === Level.AVG ? theme.palette.warning : theme.palette.success).main
  }

  const getCapacity = () => {
    return batteryState < 20 ? Level.LOW : batteryState < 60 ? Level.AVG : Level.HIGH
  }

  const getColor = () => {
    return paletteColorOf(getCapacity())
  }

  return (
    <Grid>
      <Grid container justifyContent='space-between'>
        <WidgetTitle styles={{marginBottom: '14px', fontWeight: theme.typography.fontWeightMedium}}>{getCapacity()}</WidgetTitle>
        <WidgetTitle styles={{marginBottom: '14px', fontWeight: theme.typography.fontWeightMedium}}>{batteryState}%</WidgetTitle>
      </Grid>
      <Grid
        sx={{
          height: '18px',
          borderRadius: '6px',
          backgroundColor: theme.palette.background.batteryLevel,
          position: 'relative',
          marginBottom: '40px',
          overflow: 'hidden',
        }}
      >
        <BatteryLevelDivider left='20%'/>
        <BatteryLevelDivider left='40%'/>
        <BatteryLevelDivider left='60%'/>
        <BatteryLevelDivider left='80%'/>
        <Grid sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${batteryState}%`,
          backgroundColor: getColor(),
          borderRadius: '6px',
        }}/>
      </Grid>
    </Grid>
  )
})

const CircleProgress = observer(({percentage, title, color=''}) => {
  const theme = useTheme()

  return (
    <CircularProgressbarWithChildren
      value={percentage}
      strokeWidth={10}
      styles={buildStyles({
        pathColor: color || theme.palette.info.main,
        trailColor: theme.palette.background.circleProgressTrail,
      })}
    >
      <Typography
        sx={{
          color: theme.palette.primary.main,
          lineHeight: 1,
          fontSize: '18px',
          fontWeight: theme.typography.fontWeightBold,
          marginBottom: '3px',
        }}
      >{percentage} %</Typography>
      <Typography
        sx={{
          color: theme.palette.primary.main,
          fontSize: '14px',
          lineHeight: 1,
          fontWeight: theme.typography.fontWeightRegular,
        }}
      >{title}</Typography>
    </CircularProgressbarWithChildren>
  )
})

const RobotHardware = observer(() => {
  const theme = useTheme()
  const {rosStore: { cpuState, memoryState }} = useStore()

  const getCpuColor = () => {
    return getColor(cpuState)
  }

  const getMemoryColor = () => {
    return getColor(memoryState)
  }

  const getColor = (state) => {
    if (state >= 0 && state <= 40) {
      return theme.palette.success.main
    } else if (state > 40 && state <= 80) {
      return theme.palette.warning.main
    } else if (state > 80) {
      return theme.palette.error.main
    }
  }

  return (
    <Widget widgetName='battery' styles={{height: '100%'}}>
      <WidgetTitle>Battery</WidgetTitle>
      <SvgIcon
        component={LightningIcon}
        inheritViewBox
        sx={{
          position: 'absolute',
          top: '24px',
          left: '26px',
        }}
      />
      <Battery />
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item sx={{width: '100px', marginRight: '11px'}}>
          <WidgetTitle styles={{marginBottom: '16px'}}>Memory</WidgetTitle>
          <CircleProgress percentage={memoryState} title='MEM' color={getMemoryColor()}/>
        </Grid>
        <Grid item sx={{width: '100px', marginLeft: '11px'}}>
          <WidgetTitle styles={{marginBottom: '16px'}}>CPU</WidgetTitle>
          <CircleProgress percentage={cpuState} title='CPU' color={getCpuColor()}/>
        </Grid>
      </Grid>
    </Widget>
  )
})

export default RobotHardware
