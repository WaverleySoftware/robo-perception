import { useTheme } from '@mui/material/styles'
import { IconButton, Paper, Tooltip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { observer } from 'mobx-react'
import { useStore } from '../../store'

const Widget = observer(({ children, widgetId, transparent = false, padding = '24px' }) => {
  const theme = useTheme()
  const { settingsStore: { toggleWidget, widgets }} = useStore()

  const handleWidgetClose = (e) => {
    e.preventDefault()
    toggleWidget(widgetId)
  }

  const showWidget = widgets.find((widget) => widget.id === widgetId).selected

  return (
    showWidget
      ? <Paper
          sx={{
            position: 'relative',
            background: transparent ? 'transparent' : theme.palette.background.paper,
            borderRadius: theme.shape.cardBorderRadius,
            padding,
          }}
        >
          <Tooltip title={'Close Widget'} placement='bottom'>
            <IconButton
              sx={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                cursor: 'pointer',
                zIndex: 1,
                width: '24px',
                height: '24px',
                '&:hover': {
                  background: theme.palette.background.closeWidgetHover
                }
              }}
              onClick={handleWidgetClose}
            >
             <CloseIcon sx={{ color: theme.palette.background.closeWidget }}/>
            </IconButton>
          </Tooltip>

          {children}
        </Paper>
      : null
  )
})

export default Widget
