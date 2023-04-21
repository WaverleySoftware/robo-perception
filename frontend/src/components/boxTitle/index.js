import { styled } from '@mui/material/styles'
import { Typography, useMediaQuery } from '@mui/material'

const BoxTitle = styled(Typography)(({ theme }) => {
  const isFullHD = useMediaQuery('(min-width:1920px)')

  return {
    fontSize: `${isFullHD ? 20 : 16}px`,
    lineHeight: '1.5',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold
  }
})

export default BoxTitle
