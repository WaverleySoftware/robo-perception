import React from 'react'
import { observer } from 'mobx-react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useStore } from '../../store'
import Modal from '../modal'
import { ActionModalName } from '../../store/ActionModal'

const SettingsModal = observer(() => {
  const {
    actionModalStore: { actionModalName, showActionModal, onConfirmActionModal, onCancelActionModal },
  } = useStore()
  const theme = useTheme()

  return <Modal
    showModal={ActionModalName.SAVE_ROBOT_SETTINGS === actionModalName && showActionModal}
    onConfirm={onConfirmActionModal}
    onCancel={onCancelActionModal}
  >
    <Typography sx={{
      color: theme.palette.blue[100],
      fontSize: '24px',
      marginBottom: '34px'
    }}>Do you want to save changes to the settings blocks before leaving the page?</Typography>
  </Modal>
})

export default SettingsModal
