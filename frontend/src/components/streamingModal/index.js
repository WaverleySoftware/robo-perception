import React from 'react'
import { observer } from 'mobx-react'
import { Modal, Box, Typography, Grid } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import CloseButton from '../closeButton'
import Button from '../button'
import { useStore } from '../../store'

const StreamingModal = observer(() => {
  const {
    videoPlayerStore: { showModal, onStopStreamingConfirm, onStopStreamingCancel },
  } = useStore()
  const theme = useTheme()

  return (
    <Modal
      open={showModal}
      onClose={onStopStreamingCancel}
      sx={{
        background: alpha(theme.palette.blue[100]),
      }}
    >
      <Box sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '664px',
        transform: 'translate(-50%, -50%)',
        backgroundColor: theme.palette.common.white,
        padding: '44px 64px 54px 44px',
        textAlign: 'center',
        borderRadius: '20px',
        boxShadow: theme.palette.boxShadow.main,
      }}>
        <CloseButton title='Close Guide' onClick={onStopStreamingCancel}/>
        <Typography sx={{
          color: theme.palette.blue[100],
          fontSize: '24px',
          marginBottom: '34px'
        }}>Do you want to end the streaming robot<br/>[1 Spot 12-55467]?</Typography>
        <Grid>
          <Button sx={{ textTransform: 'uppercase' }} isLight onClick={onStopStreamingConfirm}>yes, I want to end streaming</Button>
          <Button sx={{ textTransform: 'uppercase', marginLeft: '24px' }} onClick={onStopStreamingCancel}>no, I don’t </Button>
        </Grid>
      </Box>
    </Modal>
  )
})

export default StreamingModal
