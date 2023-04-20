import { action, makeObservable, observable } from 'mobx'

export const ActionModalName = {
  STREANMING: 'streaming',
  SAVE_ROBOT_SETTINGS: 'saveRobotSettings'
}

class ActionModal {
  constructor() {
    makeObservable(this)
  }

  @observable actionModalName = null
  @observable showActionModal = false
  @observable actionModalConfirmCallback = null
  @observable actionModalCancelCallback = null

  @action
  onShowActionModal  = ({ actionModalName, actionModalConfirmCallback, actionModalCancelCallback }) => {
    this.actionModalName = actionModalName
    this.showActionModal = true
    if (typeof actionModalConfirmCallback === 'function') {
      this.actionModalConfirmCallback = actionModalConfirmCallback
    }
    if (typeof actionModalCancelCallback === 'function') {
      this.actionModalCancelCallback = actionModalCancelCallback
    }
  }

  @action
  onConfirmActionModal = async () => {
    this.showActionModal = false
    this.actionModalName = null
    if (this.actionModalConfirmCallback) {
      await this.actionModalConfirmCallback()
      this.actionModalConfirmCallback = null
    }
    this.actionModalCancelCallback = null
  }

  @action
  onCancelActionModal = async () => {
    this.showActionModal = false
    this.actionModalName = null
    if (this.actionModalCancelCallback) {
      await this.actionModalCancelCallback()
      this.actionModalCancelCallback = null
    }
    this.actionModalConfirmCallback = null
  }
}

export default ActionModal
