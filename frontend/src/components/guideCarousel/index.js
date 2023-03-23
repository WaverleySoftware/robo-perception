import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Carousel from 'react-material-ui-carousel'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardTemplate from './keyboardTemplate'
import RobotMovement from './activeButtons/robotMovement'
import RobotMovementObliquely from './activeButtons/robotMovementObliquely'
import RobotMovementObliquelyHolo from './activeButtons/robotMovementObliquelyHolo'
import Roll from './activeButtons/roll'
import Pitch from './activeButtons/pitch'
import Torsion from './activeButtons/torsion'
import Tilt from './activeButtons/tilt'
import TiltSide from './activeButtons/tiltSide'
import BodyElevetion from './activeButtons/bodyElevetion'
import robot from '../../Media/pupper_cool.jpeg'


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
    leggedRobotImage: robot,
    title: 'Robot movement:',
    activeButtonsDescription: RobotMovement,
    keyboardSettings: {
      template: 'normal',
      actions: ['forward', 'backward', 'leftward-rotation', 'rightward-rotation'],
      current: 'forward',
    },
  },
  {
    leggedRobotImage: robot,
    title: 'Robot movement:',
    activeButtonsDescription: RobotMovementObliquely,
    keyboardSettings: {
      template: 'normal',
      actions: ['left-forward', 'right-forward', 'right-backward', 'left-backward'],
      current: 'left-forward',
    },
  },
  {
    leggedRobotImage: robot,
    title: 'Moves the robot (holo):',
    activeButtonsDescription: RobotMovementObliquelyHolo,
    keyboardSettings: {
      template: 'shift',
      actions: ['left-forward', 'right-forward', 'right-backward', 'left-backward'],
      current: 'left-forward',
    },
  },
  {
    leggedRobotImage: robot,
    title: 'Roll:',
    activeButtonsDescription: Roll,
    keyboardSettings: {
      template: 'normal',
      actions: ['roll-left', 'roll-right'],
      current: 'roll-right',
    },
  },
  {
    leggedRobotImage: robot,
    title: 'Pitch:',
    activeButtonsDescription: Pitch,
    keyboardSettings: {
      template: 'normal',
      actions: ['pitch-front', 'pitch-back'],
      current: 'pitch-back',
    },
  },
  {
    leggedRobotImage: robot,
    title: 'Robot torsion:',
    activeButtonsDescription: Torsion,
    keyboardSettings: {
      template: 'normal',
      actions: ['torsion-right', 'torsion-left'],
      current: 'torsion-right',
    },
  },
  {
    leggedRobotImage: robot,
    title: 'Robot tilt:',
    activeButtonsDescription: Tilt,
    keyboardSettings: {
      template: 'normal',
      actions: ['tilt-front', 'tilt-back'],
      current: 'tilt-front',
    },
  },
  {
    leggedRobotImage: robot,
    title: 'Robot tilt:',
    activeButtonsDescription: TiltSide,
    keyboardSettings: {
      template: 'normal',
      actions: ['tilt-right', 'tilt-left'],
      current: 'tilt-right',
    },
  },
  {
    leggedRobotImage: robot,
    title: 'Body elevetion:',
    activeButtonsDescription: BodyElevetion,
    keyboardSettings: {
      template: 'normal',
      actions: ['elevetion-up', 'elevetion-down'],
      current: 'elevetion-up',
    },
  },
]


const CarouselItem = ({ item }) => {
  return (
      <Grid container sx={{ display: 'block', marginTop: '15px' }}>
        <Grid
          component={'img'}
          src={item.leggedRobotImage}
          sx={{
            display: 'block',
            maxHeight: '200px',
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
        <Grid sx={{ textAlign: 'center', marginBottom: '28px' }}>
          {item.activeButtonsDescription && <item.activeButtonsDescription />}
        </Grid>
        <KeyboardTemplate {...item.keyboardSettings} />
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

const GuideCarousel = () => {
  const onChange = (now, prev) => {
    if(now !== prev) {
      console.log('start animatino here')
    }
  }

  return <StyledCarousel
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
    onChange={onChange}
  >
    {
        guideItems.map( (item, i) => <CarouselItem key={i} item={item} /> )
    }
  </StyledCarousel>
}

export default GuideCarousel
