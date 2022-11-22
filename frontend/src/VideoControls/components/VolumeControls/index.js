import React, { useCallback, useState } from 'react'
import { observer } from 'mobx-react'
import { Icon, Slider, Grid, Tooltip } from '@mui/material'
import { VolumeUp, VolumeDown, VolumeMute } from '@mui/icons-material'
import { useTheme } from '@emotion/react'
import { useStore } from '../../../store'

const VolumeControls = observer(() => {
  const {videoPlayerStore: { volume, setVolume, muted, setMuted, isFullscreen }} = useStore()

  const [volumeValue, setVolumeValue] = useState(volume)
  const theme = useTheme()
  const handleChange = useCallback(
    (e, newValue) => {
      if (Number.isNaN(newValue)) return
      setVolumeValue(newValue)
      setVolume(newValue / 100)
    },
    [setVolume]
  )

  const handleOnVolumeIconClick = useCallback(() => {
    setMuted(!muted)
  }, [muted, setMuted])

  const volumeIcon = (volume, muted) => {
    if (muted || volume === 0) {
      return VolumeMute
    }

    if (volume < 1 && volume > 0) {
      return VolumeDown
    }

    return VolumeUp
  }

  return (
    <Grid
      item
      container
      alignItems='center'
      width='auto'
    >
      <Tooltip title='Mute' placement='top'>
        <Icon component={volumeIcon(volume, muted)} sx={{color: isFullscreen ? theme.palette.common.white : theme.palette.text.primary}} onClick={handleOnVolumeIconClick} />
      </Tooltip>
      <Slider
        min={0}
        max={100}
        value={muted ? 0 : volumeValue}
        sx={{
          width: '80px',
          height: '2px',
          marginLeft: '16px',
          '& .MuiSlider-thumb': {
            backgroundColor: isFullscreen ? theme.palette.common.white : '#18DDFC',
            width: '12px',
            height: '12px',
            '&:hover': {
              boxShadow: 'none'
            }
          },
          '& .MuiSlider-rail': {
            backgroundColor: isFullscreen ? 'rgba(255, 255, 255, 0.2)' : theme.palette.primary.main,
            opacity: 1,
          },
          '& .MuiSlider-track': {
            color: isFullscreen ? 'rgba(255, 255, 255, 0.7)' : theme.palette.info.main,
          }
        }}
        onChange={handleChange}
      />
    </Grid>
  )
})

export default VolumeControls
