import { default as DefaultPaper } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Paper = styled(DefaultPaper)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.shape.cardBorderRadius,
  boxShadow: theme.palette.boxShadow.card,
  padding: '24px',
}))

export default Paper
