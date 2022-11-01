import { Stack, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import React, { Fragment } from 'react'
import Switch from '../../../components/switch'
import { useStore } from '../../../store'

const ObjectDetectionControls = observer(() => {
  const {rosStore: { selectedMode, useNN, setNN }} = useStore()

  const handleNNChange = () => {
    setNN(!useNN)
  }

  return (
    <Fragment>
      <Stack direction='row' spacing={1} alignItems='center' marginLeft={'22px'}>
        <Typography sx={{fontSize: '12px'}}>Detect Objects</Typography>
        <Switch
          checked={useNN && selectedMode !== 'depth'}
          disabled={selectedMode === 'depth'}
          onChange={handleNNChange}
          inputProps={{ 'aria-label': 'ant design' }}
        />
      </Stack>
    </Fragment>
  )
})

export default ObjectDetectionControls
