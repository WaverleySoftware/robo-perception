import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Carousel from 'react-material-ui-carousel'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardTemplate from './keyboardTemplate'

const StyledCarousel = styled(Carousel)(({ theme }) => ({
  '& .nav-button-wrapper': {
    height: 'auto',
    top: 'unset',
    bottom: '-2px',
    '&:hover button': {
      backgroundColor: 'transparent',
      filter: 'unset',
      opacity: 0.6,
    }
  },
  '& .nav-button': {
    fontSize: '14px',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.info.main,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: 'transparent',
    textTransform: 'capitalize',
    transition: 'opacity ease .4s',
    '& svg': {
      fontSize: '20px',
    }
  },
  '& .indicator-wrapper': {
    marginTop: '32px',
  },
  '& .indicator': {
    
  },
  '& .indicator-icon': {
    color: theme.palette.background.guideCarouselIndicator,
    padding: '6px',
    fontSize: '12px',
  },
  '& .indicator-icon-active': {
    color: theme.palette.info.main,
  }
}))

const guideItems = [
  {
    leggedRobotImage: 'https://www.assemblymag.com/ext/resources/LatestHeadlines/headlines900/ford-robot-9001.jpg?1597247564',
    wheeledRobotImage: 'robot image 2',
    title: 'Moves the robot:',
    ButtonDescriptionComponent: 'i - forward ...',
    keyboardSettings: {

    }
  },
  {
    leggedRobotImage: 'http://robohub.org/wp-content/uploads/2015/10/starleth_quadruped_robot_bioinspired.jpg',
    wheeledRobotImage: 'robot image 2',
    title: 'Moves the robot (holo):',
    ButtonDescriptionComponent: 'i - forward ...',
    keyboardSettings: {
      
    }
  },
  {
    leggedRobotImage: 'https://www.assemblymag.com/ext/resources/LatestHeadlines/headlines900/ford-robot-9001.jpg?1597247564',
    wheeledRobotImage: 'robot image 2',
    title: 'Body\'s roll:',
    ButtonDescriptionComponent: 'i - forward ...',
    keyboardSettings: {
      
    }
  },
]

const CarouselItem = ({ item }) => {
  return (
      <Grid container sx={{ flexDirection: 'column', marginTop: '15px' }}>
        <Grid
          component={'img'}
          src={item.leggedRobotImage}
          sx={{
            maxHeight: '250px',
            margin: '0 auto 30px',
          }}
        />
        <Grid
          component='p'
          sx={{
            textAlign: 'center',
            fontSize: '16px',
            marginBottom: '32px',
          }}
        >{item.title}</Grid>
        <p>{item.ButtonDescriptionComponent}</p>
        <KeyboardTemplate />
      </Grid>
  )
}

const NavButton = ({onClick, className, style, next, prev}) => {
  return (
      <Button onClick={onClick} className={className} style={style}>
          {next && <>Next <ChevronRightIcon/></>}
          {prev && <><ChevronLeftIcon/> Previous</>}
      </Button>
  )
}

const GuideCarousel = (props) => (
  <StyledCarousel
    NextIcon='Next'
    PrevIcon='Previous'
    autoPlay={false}
    cycleNavigation={false}
    navButtonsAlwaysVisible={true}
    indicators={true}
    NavButton={NavButton}
    navButtonsProps={{ className: 'nav-button' }} 
    navButtonsWrapperProps={{ className: 'nav-button-wrapper' }}
    indicatorIconButtonProps={{ className: 'indicator-icon' }}
    activeIndicatorIconButtonProps={{ className: 'indicator-icon-active' }}
    indicatorContainerProps={{ className: 'indicator-wrapper' }}
  >
    {
        guideItems.map( (item, i) => <CarouselItem key={i} item={item} /> )
    }
  </StyledCarousel>
)

export default GuideCarousel
