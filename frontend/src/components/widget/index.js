import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { observer } from 'mobx-react'
import Paper from '../paper'
import { useStore } from '../../store'
import CloseButton from '../closeButton'

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
    videoPlayerStore: { onShowVideoStreamingModal, isStreamStarted },
    settingsStore: { toggleWidget, currentRobot }
  } = useStore()

  const handleWidgetClose = (e) => {
    e.preventDefault()
    const toggleWidgetCallback = () => toggleWidget(widgetName)

    if(widgetName === 'screen' && isStreamStarted) {
      onShowVideoStreamingModal(toggleWidgetCallback)
      return
    }

    toggleWidgetCallback()
  }

  const showWidget = currentRobot?.widgets.find((widget) => widget.name === widgetName)?.selected

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
