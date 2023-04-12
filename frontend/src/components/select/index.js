import { useTheme } from '@mui/material/styles'
import ExpandMore from '@mui/icons-material/ExpandMore'
import {default as DefaultSelect} from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import { isLightMode } from '../../themes/base'

const CustomSelect = styled(DefaultSelect)(({ theme }) => ({
  borderRadius: theme.shape.formFieldBorderRadius,
  height: '44px',
  '& .MuiSelect-select': {
    padding: '10px 12px',
    display: 'flex',
    alignItems: 'center',
    background: isLightMode(theme.palette.mode) ? theme.palette.common.white : theme.palette.blue[300],
    '&.Mui-disabled': {
      backgroundColor: isLightMode(theme.palette.mode) ? theme.palette.grey[700] : theme.palette.blue[300]
    }
  },
  '& .MuiSelect-select > .MuiSvgIcon-root': {
    fill: theme.palette.grey[800]
  },
  '& .MuiSelect-icon': {
    color: theme.palette.info.main,
    '&.Mui-disabled': {
      color: 'transparent',
    },
  },
  '&.MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.info.main,
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
