import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { observer } from 'mobx-react'
import Paper from '../paper'
import { useStore } from '../../store'
import CloseButton from '../closeButton'
import { ActionModalName } from '../../store/ActionModal'
import { delay } from '../../util'
import { checkWidgetSelected, WidgetName } from '../../store/Settings'

export const WidgetTitle = ({ children, styles }) => {
  const theme = useTheme()

  return (
    <Typography
      component='h6'
      sx={{
        fontSize: '16px',
        color: theme.palette.primary.main,
        textAlign: 'center',
        marginBottom: '24px',
        ...styles,
      }}>
      {children}
    </Typography>
  )
}

const Widget = observer(({
  children,
  widgetName,
  styles,
}) => {
  const {
    videoPlayerStore: { pause, isStreamStarted },
    actionModalStore: { onShowActionModal },
    settingsStore: { toggleWidget, currentRobot }
  } = useStore()

  const handleWidgetClose = (e) => {
    e.preventDefault()
    const toggleWidgetCallback = () => toggleWidget(widgetName)

    if (widgetName === WidgetName.SCREEN && isStreamStarted) {
      const actionModalConfirmCallback = async () => {
        await pause()
        await delay(toggleWidgetCallback, 200)
      }
      onShowActionModal({
        actionModalName: ActionModalName.STREANMING,
        actionModalConfirmCallback,
      })
      return
    }

    toggleWidgetCallback()
  }

  const showWidget = checkWidgetSelected(currentRobot, widgetName)

  return (
    showWidget
      ? <Paper
          sx={{
            position: 'relative',
            ...styles,
          }}
        >
          <CloseButton title='Close Widget' onClick={handleWidgetClose}/>
          {children}
        </Paper>
      : null
  )
})

export default Widget
