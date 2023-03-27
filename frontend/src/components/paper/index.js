import { default as DefaultPaper } from '@mui/material/Paper'
import { alpha, styled } from '@mui/material/styles'

const Paper = styled(DefaultPaper)(({ theme }) => ({
  background: `${alpha(theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.blue[400], 0.8)}`,
  borderRadius: theme.shape.cardBorderRadius,
  boxShadow: theme.palette.mode === 'light' ? theme.palette.boxShadow.main : 'none',
  padding: '24px',
}))

export default Paper
