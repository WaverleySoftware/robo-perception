import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { Divider, Grid } from '@mui/material'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const LiveClock = () => {
  const [date, setDate] = useState(new Date())
  const theme = useTheme()

  useEffect(() => {
    const dateInterval = setInterval(() => setDate(new Date()), 1000)

    return () => {
      clearInterval(dateInterval)
    }
  }, [])

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const dayTime = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12

  const time = `${formattedHours % 12 ? formattedHours : 12}:${ minutes < 10 ? '0' + minutes : minutes} ${dayTime}`
  const dateTitle = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

  return (
    <Grid sx={{display: 'flex'}}>
      <Divider orientation='vertical' flexItem sx={{ borderColor: theme.palette.hr.main }} variant='middle'/>
      <Grid container item direction='column' justifyContent='center' alignItems='center' sx={{padding: '0 12px', minWidth: '130px'}}>
        <Grid
          item
          sx={{fontSize: '18px', color: theme.palette.text.primary, fontWeight: theme.typography.fontWeightBold}}
        >{time}</Grid>
        <Grid
          item
          sx={{fontSize: '12px', color: theme.palette.text.secondary, fontWeight: theme.typography.fontWeightRegular}}
        >{dateTitle}</Grid>
      </Grid>
      <Divider orientation='vertical' flexItem sx={{ borderColor: theme.palette.hr.main }} variant='middle'/>
    </Grid>
  )
}

export default LiveClock
