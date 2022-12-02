import React from 'react'
import { observer } from 'mobx-react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/material/styles'
import { useStore } from '../../store'
import Paper from '../paper'
import BoxTitle from '../boxTitle'
import Switch from '../switch'

const ListItemButtonCustom = styled(ListItemButton)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  '&.Mui-selected': {
    backgroundColor: 'transparent'
  },
  '&.Mui-selected:hover': {
    backgroundColor: 'transparent'
  },
  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

const Widgets = observer(() => {
  const theme = useTheme()
  const {
    settingsStore: { widgets, toggleWidget }
  } = useStore()

  return (
    <Paper sx={{marginBottom: '16px'}}>
      <BoxTitle sx={{marginBottom: '24px'}}>Widgets</BoxTitle>
      <List sx={{padding: 0}}>
        {widgets.map((widget) => (
          <ListItem disablePadding key={widget.id}>
            <ListItemButtonCustom
              selected={widget.selected}
              onClick={() => toggleWidget(widget.name)}
            >
              <ListItemText primary={widget.label} sx={{color: theme.palette.text.primary}} />
              <Switch checked={widget.selected} />
            </ListItemButtonCustom>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
})

export default Widgets
