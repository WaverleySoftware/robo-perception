import { observer } from 'mobx-react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CheckIcon from '@mui/icons-material/Check'
import TitledBox from '../titledBox'
import { useStore } from '../../store'

const AppTheme = observer(() => {
  const {
    settingsStore: { currentAppTheme, appThemes, setAppTheme },
  } = useStore()
  const onThemeChange = (e) => setAppTheme(e.target.value)

  return (
    <TitledBox title='Theme'>
      <FormControl fullWidth>
        <InputLabel id='theme-select'>Choose the theme</InputLabel>
        <Select
          labelId='theme-select'
          id='theme-select-id'
          value={currentAppTheme?.id || ''}
          label='Choose the theme'
          onChange={onThemeChange}
          renderValue={() => currentAppTheme?.label}
        >
          {appThemes.map((theme) => (
            <MenuItem sx={{ justifyContent: 'space-between' }} key={theme.id} value={theme.id}>
              {theme.label}
              {theme.id === currentAppTheme?.id && <CheckIcon />}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </TitledBox>
  )
})

export default AppTheme
