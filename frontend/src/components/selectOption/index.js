import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'


const SelectOption = styled(MenuItem)(({ theme }) => ({
  height: '40px',
  fontSize: '14px',
  '&.Mui-selected': {
    background: '#F7F8FC',
    color: '#28BDEB',
  },
}))

export default SelectOption
