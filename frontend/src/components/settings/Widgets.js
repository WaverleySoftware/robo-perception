import { observer } from 'mobx-react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import Toggle from '../toggle'
import TitledBox from '../titledBox'
import { useStore } from '../../store'

const Widgets = observer(() => {
  const {
    settingsStore: { widgets, toggleWidget },
  } = useStore()
  const onToggleWidget = (id) => toggleWidget(id)

  return (
    <TitledBox title='Widgets'>
      <List>
        {widgets.map((widget) => (
          <ListItem disablePadding key={widget.id}>
            <ListItemButton selected={widget.selected} onClick={() => onToggleWidget(widget.id)}>
              <ListItemText primary={widget.label} />
              <Toggle checked={widget.selected} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </TitledBox>
  )
})

export default Widgets
