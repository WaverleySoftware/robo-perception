import ExpandMore from '@mui/icons-material/ExpandMore'
import {default as DefaultSelect} from '@mui/material/Select'
import { styled } from '@mui/material/styles'

const Select = styled(
  (props) => <DefaultSelect {...props} IconComponent={(props) => <ExpandMore {...props}/>} />
)(({ theme }) => ({
  borderRadius: '6px',
  height: '44px',
  '& .MuiSelect-select': {
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center'
  },
  '& .MuiSelect-select > .MuiSvgIcon-root': {
    fill: '#C4C4C4'
  },
  '& .MuiSelect-icon': {
    color: '#28BDEB'
  },
  '&.MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#B7C0D9',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#29BDEB',
    },
  },
}))

export default Select
