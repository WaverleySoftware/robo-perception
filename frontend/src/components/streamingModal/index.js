import React from 'react'
import { observer } from 'mobx-react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useStore } from '../../store'
import Modal from '../modal'

const StreamingModal = observer(() => {
  const {
    videoPlayerStore: { showVideoStreamingModal, onStopStreamingConfirm, onStopStreamingCancel },
    settingsStore: { currentRobot },
  } = useStore()
  const theme = useTheme()

  return currentRobot && <Modal
    showModal={showVideoStreamingModal}
    onCancel={onStopStreamingCancel}
    onConfirm={onStopStreamingConfirm}
    confirmButtonText='yes, I want to end streaming'
    cancelButtonText='no, I don’t'
  >
    <Typography sx={{
      color: theme.palette.blue[100],
      fontSize: '24px',
      marginBottom: '34px'
    }}>Do you want to end the streaming robot<br/>[{currentRobot.name}]?</Typography>
  </Modal>
})

export default StreamingModal
