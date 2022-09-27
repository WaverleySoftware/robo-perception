import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'

const TitledBox = ({title = 'No title', children}) => (
  <Paper elevation={5}>
    <Box sx={{padding: '1rem'}}>
      <Typography variant="h6" component={'h2'}>
        {title}
      </Typography>
    </Box>
    <Divider />
    <Box sx={{padding: '1rem'}}>
      {children}
    </Box>
  </Paper>
)

export default TitledBox
