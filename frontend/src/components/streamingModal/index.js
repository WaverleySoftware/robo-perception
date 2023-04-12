import React from 'react'
import { observer } from 'mobx-react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useStore } from '../../store'
import Modal from '../modal'
import { ActionModalName } from '../../store/ActionModal'

const StreamingModal = observer(() => {
  const {
    actionModalStore: { actionModalName, showActionModal, onConfirmActionModal, onCancelActionModal },
    settingsStore: { currentRobot },
  } = useStore()
  const theme = useTheme()

  return currentRobot && <Modal
    showModal={actionModalName === ActionModalName.STREANMING && showActionModal}
    onCancel={onCancelActionModal}
    onConfirm={onConfirmActionModal}
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
