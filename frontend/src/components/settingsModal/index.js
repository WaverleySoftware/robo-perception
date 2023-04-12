import React from 'react'
import { observer } from 'mobx-react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useStore } from '../../store'
import Modal from '../modal'

const SettingsModal = observer(() => {
  const {
    settingsStore: { showRobotSettingsModal, onSaveSettingsConfirm, onSaveSettingsCancel },
  } = useStore()
  const theme = useTheme()

  return <Modal
    showModal={showRobotSettingsModal}
    onCancel={onSaveSettingsCancel}
    onConfirm={onSaveSettingsConfirm}
    confirmButtonText='yes, I want to end streaming'
    cancelButtonText='no, I don’t'
  >
    <Typography sx={{
      color: theme.palette.blue[100],
      fontSize: '24px',
      marginBottom: '34px'
    }}>Do you want to save changes to the settings blocks before leaving the page?</Typography>
  </Modal>
})

export default SettingsModal
