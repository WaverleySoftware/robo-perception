import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import Grid from '@mui/material/Grid'
import { Button, Select, SvgIcon, Typography } from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { styled, useTheme } from '@mui/material/styles'
import { useStore } from '../../store'
import SelectOption from '../selectOption'
import RobotTypeIcon from '../roboTypeIcon'
import { ReactComponent as DashboardIcon } from './dashboard.svg'
import { ReactComponent as SettingsIcon } from './settings.svg'
import { ReactComponent as GuideIcon } from './guide.svg'
import ModeSwitcher from './modeSwitcher'
import GuideModal from '../guideModal'
import { isLightMode } from '../../themes/base'
import { NavigationTabs } from '../../store/Navigation'

const Logo = ({ textColor }) => (
  <svg width="156" height="48" viewBox="0 0 156 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.5717 10.3174L25.9594 14.7233L23.5104 19.1291L21.0615 14.7233L18.4492 10.3174H28.5717Z" fill="#0F0E9F"/>
    <path d="M16.816 10.3174L14.6935 14.0705L12.5711 17.6605L10.4486 14.0705L8.32617 10.3174H16.816Z" fill="#28BDEB"/>
    <path d="M15.9999 14.7233L18.4489 10.3174L21.0612 14.7233L23.5101 19.1291L21.0612 23.3718L18.4489 27.7777L15.9999 23.3718L13.3877 19.1291L15.9999 14.7233Z" fill="#455CC7"/>
    <path d="M0 10.3174L1.63265 13.2546L3.26531 16.1919L5.06122 13.2546L6.69388 10.3174H0Z" fill="#70E5F9"/>
    <path d="M10.4492 14.0705L8.32675 10.3174L6.2043 14.0705L4.24512 17.6605L6.2043 21.2505L8.32675 24.8405L10.4492 21.2505L12.5716 17.6605L10.4492 14.0705Z" fill="#70E5F9"/>
    <path d="M42.8816 13.6243L46.2933 22.2221L50.8422 10.8134H49.5425L46.1308 19.0806L42.8816 10.3174L39.4698 19.0806L36.2206 10.8134H34.9209L39.4698 22.2221L42.8816 13.6243Z" fill={textColor} />
    <path d="M84.4727 22.2217H92.4333V21.2297H85.7724V17.0961H91.7835V16.104H85.7724V11.8051H92.5958V10.813H84.6351V22.2217H84.4727Z" fill={textColor}/>
    <path d="M106.73 22.222H108.192C107.38 21.0646 106.567 20.0726 105.755 18.9151L105.268 18.2538L105.917 17.9231C106.567 17.5924 107.055 17.2617 107.542 16.6003C108.029 15.939 108.192 15.2776 108.192 14.4509C108.192 13.9548 108.029 13.4588 107.867 12.9628C107.705 12.4667 107.38 12.136 107.055 11.8054C106.73 11.4747 106.405 11.144 105.917 10.9786C105.43 10.8133 104.943 10.6479 104.455 10.6479H99.4189V22.0567H100.719V18.0884H103.968L104.13 18.2538C104.618 18.9151 105.105 19.5765 105.593 20.2379C105.917 21.0646 106.242 21.5606 106.73 22.222ZM104.455 17.0964H100.556V11.64H104.455C104.943 11.64 105.43 11.8054 105.755 11.9707C106.08 12.136 106.405 12.4667 106.567 12.7974C106.73 13.1281 106.892 13.4588 106.892 13.7895C106.892 14.1202 106.892 14.2855 106.892 14.6162C106.892 15.1122 106.892 15.4429 106.73 15.7736C106.567 16.1043 106.405 16.435 106.242 16.6003C106.08 16.7657 105.755 16.931 105.43 17.0964C105.105 17.0964 104.78 17.0964 104.455 17.0964Z" fill={textColor}/>
    <path d="M115.016 22.2217H122.814V21.2297H116.315V10.813H115.016V22.2217Z" fill={textColor}/>
    <path d="M128.824 22.2217H136.785V21.2297H129.961V17.0961H135.973V16.104H129.961V11.8051H136.785V10.813H128.824V22.2217Z" fill={textColor}/>
    <path d="M146.858 22.2217H148.158V17.9228V17.7574C148.482 17.2614 148.807 16.6 149.295 15.9386L151.894 11.8051C152.057 11.4744 152.219 11.1437 152.382 10.813H150.919C150.757 11.1437 150.594 11.4744 150.27 11.8051L149.457 13.1278C149.132 13.6238 148.97 14.1199 148.645 14.4506C148.32 14.9466 148.158 15.2773 147.833 15.7733L147.508 16.6L147.02 15.7733C146.533 14.9466 146.045 13.9545 145.396 13.1278C144.908 12.3011 144.421 11.4744 143.933 10.813H142.634C143.284 11.8051 143.771 12.7971 144.421 13.7892C145.233 15.1119 146.045 16.4347 146.695 17.7574V17.9228V22.2217H146.858Z" fill={textColor}/>
    <path d="M65.139 22.2217L59.4528 10.813L53.7666 22.2217H55.0663L59.4528 13.4585L63.8393 22.2217H65.139Z" fill={textColor}/>
    <path d="M67.9014 10.6479L73.5876 22.0567L79.2737 10.6479H77.974L73.5876 19.4112L69.2011 10.6479H67.9014Z" fill={textColor}/>
    <path d="M119.407 29.7314V33.3973C119.407 33.7926 119.323 34.1466 119.155 34.4592C118.989 34.7718 118.739 35.0198 118.403 35.2032C118.067 35.3841 117.645 35.4745 117.136 35.4745C116.41 35.4745 115.857 35.2846 115.477 34.9048C115.1 34.5225 114.911 34.0148 114.911 33.3818V29.7314H115.842V33.3005C115.842 33.7732 115.953 34.122 116.175 34.3468C116.397 34.5715 116.729 34.6839 117.171 34.6839C117.476 34.6839 117.724 34.631 117.915 34.525C118.109 34.4165 118.251 34.2589 118.341 34.0523C118.434 33.843 118.481 33.5911 118.481 33.2966V29.7314H119.407ZM125.796 35.397H124.726L122.963 32.8238L122.405 33.2772V35.397H121.475V29.7314H122.405V32.4402C122.519 32.3006 122.634 32.1611 122.75 32.0216C122.866 31.8821 122.983 31.7426 123.099 31.6031L124.695 29.7314H125.746L123.63 32.2115L125.796 35.397ZM128.756 29.7314C129.244 29.7314 129.647 29.7908 129.965 29.9096C130.285 30.0285 130.523 30.2093 130.678 30.4522C130.835 30.695 130.914 31.0037 130.914 31.3783C130.914 31.6574 130.863 31.895 130.759 32.0914C130.656 32.2877 130.52 32.4505 130.352 32.5797C130.184 32.7088 130.005 32.8122 129.814 32.8897L131.422 35.397H130.372L129.004 33.1261H128.093V35.397H127.163V29.7314H128.756ZM128.694 30.5064H128.093V32.3588H128.736C129.168 32.3588 129.48 32.2787 129.674 32.1185C129.87 31.9583 129.969 31.7219 129.969 31.4093C129.969 31.0812 129.864 30.8487 129.655 30.7118C129.448 30.5749 129.128 30.5064 128.694 30.5064ZM136.362 35.397L135.808 33.8236H133.641L133.087 35.397H132.107L134.215 29.7081H135.246L137.35 35.397H136.362ZM135.567 33.0253L135.029 31.4752C135.008 31.4081 134.978 31.3138 134.94 31.1923C134.901 31.0683 134.862 30.943 134.823 30.8164C134.785 30.6873 134.752 30.5787 134.726 30.4909C134.701 30.5968 134.668 30.7157 134.63 30.8474C134.593 30.9766 134.557 31.098 134.521 31.2117C134.488 31.3254 134.462 31.4132 134.444 31.4752L133.901 33.0253H135.567ZM138.717 35.397V29.7314H139.647V35.397H138.717ZM146.49 35.397H145.347L142.572 30.8746H142.537C142.547 31.027 142.556 31.1885 142.564 31.359C142.574 31.5295 142.582 31.7052 142.587 31.886C142.595 32.0668 142.602 32.2503 142.607 32.4363V35.397H141.762V29.7314H142.897L145.668 34.2228H145.695C145.69 34.091 145.684 33.9399 145.676 33.7694C145.668 33.5989 145.66 33.4232 145.653 33.2423C145.648 33.0589 145.644 32.8819 145.641 32.7114V29.7314H146.49V35.397ZM151.806 35.397H148.597V29.7314H151.806V30.5142H149.527V32.0526H151.662V32.8316H149.527V34.6103H151.806V35.397Z" fill="#28BDEB"/>
  </svg>
)

const RobotSelect = styled(Select)(({ theme }) => ({
  width: '200px',
  '& .MuiSelect-select': {
    padding: '8px 32px 8px 12px',
  },
  '& .MuiSelect-icon': {
    color: theme.palette.primary.main
  },
  '&.MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
}))

const SelectRenderValue = ({ value, robots_settings, robotTypes }) => {
  const theme = useTheme()
  const selectedRobot = robots_settings.find(robot => robot.id === value)  

  return (
    <Grid container sx={{alignItems: 'center', flexDirection: 'row'}}>
      <Typography sx={{marginRight: '12px', fontSize: '14px', color: theme.palette.primary.main, width: '100px', overflow: 'hidden'}}>{selectedRobot.name}</Typography>
      <Grid sx={{ width: '36px', height: '36px', borderRadius: '50%', background: isLightMode(theme.palette.mode) ? '#E2E7F5' : '#38395C', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <RobotTypeIcon color={'#C4C4C4'} type={selectedRobot.type} />
      </Grid>
    </Grid>
  )
}

const TabStyled = styled(Tab)(({ theme }) => ({
  fontSize: '18px',
  padding: '10px 16px',
  textTransform: 'capitalize',
  color: theme.palette.secondary.main,
  fontWeight: theme.typography.fontWeightMedium,
  position: 'relative',
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
    stroke: theme.palette.secondary.main,
    marginBottom: 0,
  },
  [`&.${tabUnstyledClasses.selected} .MuiSvgIcon-root`]: {
    stroke: theme.palette.primary.main
  },
  '& .Mui-selected': {
    color: isLightMode(theme.palette.mode) ? theme.palette.blue[100] : theme.palette.common.white,
  },
  '&:nth-of-type(2):before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '1px',
    height: '24px',
    backgroundColor: theme.palette.secondary.main,
  }
}))

const Header = observer(() => {
  const {
    navigationStore: { activeTab, setActiveTab },
    settingsStore: { robotTypes, robots_settings, currentRobotId, updateCurrentRobotId },
    videoPlayerStore: { onShowModal, isStreamStarted },
  } = useStore()
  const theme = useTheme()
  const [guideOpen, setGuideOpen] = useState(false)

  const handleChange = (_event, newValue) => {
    const setActiveTabCallback = () => setActiveTab(newValue)

    if(newValue === NavigationTabs.SETTINGS && isStreamStarted) {
      onShowModal(setActiveTabCallback)
      return
    }

    setActiveTabCallback()
  }

  const handleGuideOpen = () => {
    setGuideOpen(true)
  }

  const handleGuideClose = () => {
    setGuideOpen(false)
  }

  const handleRobotChange = (event) => {
    event.preventDefault()
    const updateCurrentRobotIdCallback = () => updateCurrentRobotId(event.target.value)

    if (isStreamStarted) {
      onShowModal(updateCurrentRobotIdCallback)
      return
    }

    updateCurrentRobotIdCallback()
  }
 
  return (
    <Grid>
      <Grid container sx={{
        alignItems: 'center',
        height: '68px',
        padding: '0 26px 0 40px',
        backgroundColor: isLightMode(theme.palette.mode) ?  '#F7F8FF' : '#343654',
        boxShadow: isLightMode(theme.palette.mode) ? theme.palette.boxShadow.main : 'none',
      }}>
        <Grid item xs={5} container sx={{alignItems: 'center'}}>
          <RobotSelect
            value={currentRobotId}
            label='Select the robot'
            onChange={handleRobotChange}
            notched={false}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: isLightMode(theme.palette.mode) ? theme.palette.common.white : theme.palette.grey[200],
                },
              },
            }}
            renderValue={(value) => <SelectRenderValue value={value} robotTypes={robotTypes} robots_settings={robots_settings}/>}
            IconComponent={(props) => <ExpandMore {...props}/>}
          >
            {robots_settings.map((robotDate) => (
              <SelectOption key={robotDate.id} value={robotDate.id}>
                <RobotTypeIcon color={robotDate.id === currentRobotId ? '#28BDEB' : '#C4C4C4'} type={robotDate.type} />
                <Typography sx={{ marginLeft: '8px', fontSize: '14px' }} >{robotDate.name}</Typography>
              </SelectOption>
            ))}
          </RobotSelect>
        </Grid>
        <Grid container item xs={2} sx={{justifyContent: 'center'}}>
          <Logo textColor={isLightMode(theme.palette.mode) ? '#0F0E9F' : theme.palette.common.white}/>
        </Grid>

        <Grid item xs={5} sx={{marginLeft: 'auto', width: 'auto', justifyContent: 'right', alignItems: 'center'}} container>
          <ModeSwitcher />
          <Button
            variant='text'
            color='info'
            startIcon={<SvgIcon color='success' component={GuideIcon} inheritViewBox sx={{fill: 'none'}}/>} 
            sx={{ textTransform: 'capitalize', padding: '0 12px', fontSize: '14px', fontWeight: theme.typography.fontWeightMedium }}
            onClick={handleGuideOpen}
          >
            View Guide
          </Button>
          <GuideModal
            open={guideOpen}
            onClose={handleGuideClose}
          />
        </Grid>
      </Grid>
      <Grid sx={{ height: '72px' }}>       
        <Tabs
          value={activeTab}
          onChange={handleChange}
          TabIndicatorProps={{
            hidden: true
          }}
          centered
        >
          <TabStyled value={NavigationTabs.DASHBOARD} label='Dashboard' icon={<SvgIcon component={DashboardIcon} inheritViewBox sx={{fill: 'none'}} />} iconPosition='start' />
          <TabStyled value={NavigationTabs.SETTINGS} label='Settings' icon={<SvgIcon component={SettingsIcon} inheritViewBox sx={{fill: 'none'}} />} iconPosition='start' />
        </Tabs>
      </Grid>
    </Grid>
  )
})

export default Header
