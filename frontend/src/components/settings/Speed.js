import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { observer } from 'mobx-react'

import TitledBox from '../titledBox'
import { useStore } from '../../store'

const Speed = observer(() => {
  const {
    settingsStore: {},
  } = useStore()

  return (
    <TitledBox title='Speed'>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <TextField
            fullWidth
            label='Step of speed in %'
            variant='outlined'
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='subtitle1'>Set speed values</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label='Min'
                variant='outlined'
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label='Max'
                variant='outlined'
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </TitledBox>
  )
})

export default Speed
