import { useTheme } from '@mui/material/styles'
import ExpandMore from '@mui/icons-material/ExpandMore'
import {default as DefaultSelect} from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import { isLightMode } from '../../themes/base'

const CustomSelect = styled(DefaultSelect)(({ theme }) => ({
  borderRadius: theme.shape.formFieldBorderRadius,
  background: isLightMode(theme.palette.mode) ? theme.palette.common.white : theme.palette.blue[300],
  height: '44px',
  '& .MuiSelect-select': {
    padding: '10px 12px',
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

const Select = (props) => {
  const theme = useTheme()

  return <CustomSelect
    {...props}
    IconComponent={(iconProps) => <ExpandMore {...iconProps}/>}
    MenuProps={{
      PaperProps: {
        sx: {
          bgcolor: isLightMode(theme.palette.mode) ? theme.palette.common.white : theme.palette.grey[200],
        },
      },
    }}
  />
}

export default Select
