import FormHelperText from '@mui/material/FormHelperText'
import { styled } from '@mui/material/styles'

const FormHelperLabel = styled(FormHelperText)(({ theme }) => ({
  fontSize: '12px',
  lineHeight: '20px',
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.primary.main,
  margin: '0 0 4px'
}))

export default FormHelperLabel
