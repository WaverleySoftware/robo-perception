import { default as DefaultPaper } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const Paper = styled(DefaultPaper)`
  border-radius: 16px;
  box-shadow: -10px 10px 20px rgba(212, 212, 225, 0.2), 10px -10px 20px rgba(182, 182, 210, 0.2);
  padding: 24px;
`

export default Paper
