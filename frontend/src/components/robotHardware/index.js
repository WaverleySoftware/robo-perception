
import { Divider, Grid, SvgIcon, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { observer } from 'mobx-react'
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
  // TODO: define logic for percentage in a store (data, requests to DB, etc.)
  const percentage = 80
  
  let color = theme.palette.success.main
  let capacity = 'High'

  if (percentage < 20) {
    color = theme.palette.error.main
    capacity = 'Low'
  } else if (percentage < 40) {
    color = theme.palette.warning.main
    capacity = 'Middle'
  } else if (percentage < 80) {
    color = theme.palette.info.main
    capacity = 'Average'
  }

  return (
    <Grid>
      <Grid container justifyContent='space-between' >
        <WidgetTitle styles={{marginBottom: '14px', fontWeight: theme.typography.fontWeightMedium}}>{capacity}</WidgetTitle>
        <WidgetTitle styles={{marginBottom: '14px', fontWeight: theme.typography.fontWeightMedium}}>{percentage}%</WidgetTitle>
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
          width: `${percentage}%`,
          backgroundColor: color,
          borderRadius: '6px',
        }}/>
      </Grid>
    </Grid>
  )
})

const CircleProgress = observer(({percentage, title}) => {
  const theme = useTheme()

  return (
    <CircularProgressbarWithChildren
      value={percentage}
      strokeWidth={10}
      styles={buildStyles({
        pathColor: theme.palette.info.main,
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
  // TODO: define logic for memoryUsagePercentage and cpuUsagePercentage in a store (data, requests to DB, etc.)
  const memoryUsagePercentage = 35
  const cpuUsagePercentage = 60

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
          <CircleProgress percentage={memoryUsagePercentage} title='MEM'/>
        </Grid>
        <Grid item sx={{width: '100px', marginLeft: '11px' }}>
          <WidgetTitle styles={{marginBottom: '16px'}}>CPU</WidgetTitle>
          <CircleProgress percentage={cpuUsagePercentage} title='CPU'/>
        </Grid>
      </Grid>
    </Widget>
  )
})

export default RobotHardware
