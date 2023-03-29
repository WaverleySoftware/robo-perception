import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const BoxTitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  lineHeight: '1.5',
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeightBold
}))

export default BoxTitle
