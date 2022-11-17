import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

const SelectOption = styled(MenuItem)(({ theme }) => ({
  height: '40px',
  fontSize: '14px',
  color: theme.palette.primary.main,
  '&.Mui-selected': {
    color: theme.palette.info.main,
    background: theme.palette.robotSelect.selectedOptionBg
  },
}))

export default SelectOption
