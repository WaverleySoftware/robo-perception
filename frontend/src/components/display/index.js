import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { FormControl, Typography } from '@mui/material'
import Paper from '../paper'
import BoxTitle from '../boxTitle'
import FormHelperLabel from '../formHelperLabel'
import SelectOption from '../selectOption'
import { ThemeContext } from '../../themes/ThemeProvider'
import Select from '../select'

const Display = observer(() => {
  const { themesList, selectedThemeName, setThemeName } = useContext(ThemeContext)

  const handleThemeChange = (e) => setThemeName(e.target.value)

  return (
    <Paper>
      <BoxTitle sx={{}}>Display</BoxTitle>
      <FormControl fullWidth>
        <FormHelperLabel id='theme-select'>Theme</FormHelperLabel>
        <Select
          aria-describedby='theme-select'
          id='theme-select'
          value={selectedThemeName}
          onChange={handleThemeChange}
          notched={false}
        >
          {themesList.map((theme) => (
            <SelectOption key={theme.id} value={theme.value}>
              <Typography sx={{ fontSize: '14px' }} >{theme.label}</Typography>
            </SelectOption>
          ))}
        </Select>
      </FormControl>
    </Paper>
  )
})

export default Display
