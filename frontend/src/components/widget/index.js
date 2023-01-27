import { useTheme } from '@mui/material/styles'
import { IconButton, Paper, Tooltip, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { observer } from 'mobx-react'
import { useStore } from '../../store'

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
  const theme = useTheme()
  const { settingsStore: { toggleWidget, widgets }} = useStore()

  const handleWidgetClose = (e) => {
    e.preventDefault()
    toggleWidget(widgetName)
  }

  const showWidget = widgets.find((widget) => widget.name === widgetName).selected

  return (
    showWidget
      ? <Paper
          sx={{
            position: 'relative',
            background: theme.palette.background.paper,
            borderRadius: theme.shape.cardBorderRadius,
            padding: '24px',
            ...styles,
          }}
        >
          <Tooltip title={'Close Widget'} placement='bottom'>
            <IconButton
              sx={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                cursor: 'pointer',
                zIndex: theme.zIndex.closeWidget,
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
