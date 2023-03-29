import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import { isLightMode } from '../../themes/base'

const SelectOption = styled(MenuItem)(({ theme }) => ({
  height: '40px',
  fontSize: '14px',
  color: theme.palette.primary.main,
  '&.Mui-selected': {
    color: theme.palette.info.main,
    background: isLightMode(theme.palette.mode) ? '#F7F8FC' : '#3E405E'
  },
}))

export default SelectOption
