import React, { useCallback, useState } from 'react'
import { observer } from 'mobx-react'
import { Icon, Slider, Grid, Tooltip } from '@mui/material'
import { VolumeUp, VolumeDown, VolumeMute } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { useStore } from '../../../../store'

const VolumeControls = observer(({ connected }) => {
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
        <Icon
          component={volumeIcon(volume, muted)}
          sx={{
            color: connected
              ? isFullscreen ? theme.palette.common.white : theme.palette.text.primary
              : theme.palette.text.disabledVideoPlayerIcon
          }}
          onClick={handleOnVolumeIconClick}
        />
      </Tooltip>
      <Slider
        min={0}
        max={100}
        value={muted ? 0 : volumeValue}
        disabled={!connected}
        sx={{
          width: '80px',
          height: '2px',
          marginLeft: '16px',
          '& .MuiSlider-thumb': {
            backgroundColor: connected
              ? isFullscreen ? theme.palette.common.white : '#18DDFC'
              : theme.palette.text.disabledVideoPlayerIcon,
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
            color: connected
              ? isFullscreen ? 'rgba(255, 255, 255, 0.7)' : theme.palette.info.main
              : theme.palette.text.disabledVideoPlayerIcon,
          }
        }}
        onChange={handleChange}
      />
    </Grid>
  )
})

export default VolumeControls
