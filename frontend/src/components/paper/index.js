import { default as DefaultPaper } from '@mui/material/Paper'
import { alpha, styled } from '@mui/material/styles'
import { isLightMode } from '../../themes/base'

const Paper = styled(DefaultPaper)(({ theme }) => ({
  background: `${alpha(isLightMode(theme.palette.mode) ? theme.palette.grey[400] : theme.palette.blue[400], 0.8)}`,
  borderRadius: theme.shape.cardBorderRadius,
  boxShadow: isLightMode(theme.palette.mode) ? theme.palette.boxShadow.main : 'none',
  padding: '24px',
}))

export default Paper
