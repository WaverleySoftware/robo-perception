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
    if(typeof actionModalConfirmCallback === 'function') {
      this.actionModalConfirmCallback = actionModalConfirmCallback
    }
    if(typeof actionModalCancelCallback === 'function') {
      this.actionModalCancelCallback = actionModalCancelCallback
    }
  }

  @action
  onConfirmActionModal = () => {
    console.log('onConfirmActionModal');
    this.showActionModal = false
    this.actionModalName = null
    if(this.actionModalConfirmCallback) {
      this.actionModalConfirmCallback()
      this.actionModalConfirmCallback = null
    }
    this.actionModalCancelCallback = null
  }

  @action
  onCancelActionModal = () => {
    this.showActionModal = false
    this.actionModalName = null
    if(this.actionModalCancelCallback) {
      this.actionModalCancelCallback()
      this.actionModalCancelCallback = null
    }
    this.actionModalConfirmCallback = null
  }
}

export default ActionModal
