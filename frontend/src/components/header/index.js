import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import Grid from '@mui/material/Grid'
import { Button, IconButton, SvgIcon, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { useStore } from '../../store'
import { ReactComponent as DashboardIcon } from './dashboard.svg'
import { ReactComponent as SettingsIcon } from './settings.svg'
import { ReactComponent as GuideIcon } from './guide.svg'
import ModeSwitcher from './modeSwitcher'
import GuideModal from '../guideModal'
import { isLightMode } from '../../themes/base'
import { NavigationTabs } from '../../store/Navigation'
import { ActionModalName } from '../../store/ActionModal'
import { SAVE_ROBOT_SETTINGS_EVENT } from '../robotPropertiesSettings'
import { delay } from '../../util'

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

const CloseSidebarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2 18C2 18.5523 2.44771 19 3 19L15.4443 19C15.9965 19 16.4443 18.5523 16.4443 18C16.4443 17.4477 15.9965 17 15.4443 17L3 17C2.44771 17 2 17.4477 2 18Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M2 12.4453C2 12.9976 2.44771 13.4453 3 13.4453L12.111 13.4453C12.6633 13.4453 13.111 12.9976 13.111 12.4453C13.111 11.893 12.6633 11.4453 12.111 11.4453L3 11.4453C2.44772 11.4453 2 11.893 2 12.4453Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M3 5.88965C2.44771 5.88965 2 6.33736 2 6.88965C2 7.44193 2.44771 7.88965 3 7.88965L15.4443 7.88965C15.9965 7.88965 16.4443 7.44194 16.4443 6.88965C16.4443 6.33737 15.9965 5.88965 15.4443 5.88965L3 5.88965Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M21.293 17.2514C21.6831 16.8613 21.6835 16.2289 21.2939 15.8382L18.1622 12.6977C18.0843 12.6196 18.0843 12.4933 18.1622 12.4152L21.294 9.27473C21.6835 8.88405 21.6831 8.25164 21.293 7.8615L21.1395 7.70808C20.749 7.31756 20.1159 7.31756 19.7253 7.70808L15.5841 11.8494C15.1935 12.2399 15.1935 12.873 15.5841 13.2636L19.7253 17.4048C20.1159 17.7954 20.749 17.7954 21.1395 17.4048L21.293 17.2514Z" />
  </svg>
)

const OpenSidebarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M22 6C22 5.44772 21.5523 5 21 5L8.55574 5C8.00345 5 7.55574 5.44771 7.55574 6C7.55574 6.55228 8.00345 7 8.55574 7L21 7C21.5523 7 22 6.55228 22 6Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M22 11.5547C22 11.0024 21.5523 10.5547 21 10.5547L11.889 10.5547C11.3367 10.5547 10.889 11.0024 10.889 11.5547C10.889 12.107 11.3367 12.5547 11.889 12.5547L21 12.5547C21.5523 12.5547 22 12.107 22 11.5547Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M21 18.1104C21.5523 18.1104 22 17.6626 22 17.1104C22 16.5581 21.5523 16.1104 21 16.1104L8.55574 16.1104C8.00345 16.1104 7.55574 16.5581 7.55574 17.1104C7.55574 17.6626 8.00345 18.1104 8.55574 18.1104L21 18.1104Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M2.70606 6.74858C2.31592 7.13871 2.31548 7.77112 2.70507 8.1618L5.83684 11.3023C5.91468 11.3804 5.91468 11.5067 5.83683 11.5848L2.70507 14.7253C2.31548 15.116 2.31592 15.7484 2.70606 16.1385L2.85948 16.2919C3.25 16.6824 3.88317 16.6824 4.27369 16.2919L8.41496 12.1506C8.80549 11.7601 8.80549 11.127 8.41496 10.7364L4.27369 6.59516C3.88317 6.20463 3.25 6.20463 2.85948 6.59516L2.70606 6.74858Z" />
  </svg>
)

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
    settingsStore: { showSidebar, toggleSidebar, currentRobot, shouldSaveRobotSettings },
    actionModalStore: { onShowActionModal },
    videoPlayerStore: { isStreamStarted, pause },
  } = useStore()
  const theme = useTheme()
  const [guideOpen, setGuideOpen] = useState(false)

  const handleChange = (_event, newValue) => {
    const setActiveTabCallback = () => setActiveTab(newValue)

    if(newValue === NavigationTabs.SETTINGS && isStreamStarted) {
      const actionModalConfirmCallback = async () => {
        await pause()
        await delay(setActiveTabCallback, 200)
      }
      onShowActionModal({
        actionModalName: ActionModalName.STREANMING,
        actionModalConfirmCallback,
      })
      return
    }

    if(newValue === NavigationTabs.DASHBOARD && shouldSaveRobotSettings) {
      const saveRobotSettingsEvent = new Event(SAVE_ROBOT_SETTINGS_EVENT)
      const actionModalConfirmCallback = () => {
        document.dispatchEvent(saveRobotSettingsEvent)
        setActiveTabCallback()
      }

      onShowActionModal({
        actionModalName: ActionModalName.SAVE_ROBOT_SETTINGS,
        actionModalCancelCallback: setActiveTabCallback,
        actionModalConfirmCallback,
      })
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
 
  return (
    <Grid sx={{
      marginLeft: showSidebar ? '256px' : 0,
      transition: theme.transitions.create(['margin'], {
        duration: 250,
      }),
    }}>
      <Grid container sx={{
        alignItems: 'center',
        height: '68px',
        padding: '0 24px',
        backgroundColor: isLightMode(theme.palette.mode) ?  '#F7F8FF' : '#343654',
        boxShadow: isLightMode(theme.palette.mode) ? theme.palette.boxShadow.main : 'none',
      }}>
        <Grid item xs={5} container sx={{alignItems: 'center'}}>
        <IconButton
          sx={{
            fill: isLightMode(theme.palette.mode) ? theme.palette.blue[100] : theme.palette.common.white,
            marginLeft: '-8px',
          }}
          onClick={() => toggleSidebar()}
        >
          {showSidebar ? <CloseSidebarIcon /> : <OpenSidebarIcon />}
        </IconButton>
        {currentRobot && <Typography sx={{
          fontSize: '18px',
          fontWeight: theme.typography.fontWeightMedium,
          marginLeft: '16px',
          color: isLightMode(theme.palette.mode) ? theme.palette.blue[100] : theme.palette.common.white,
        }}>{currentRobot.name}</Typography>}
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
        {currentRobot && <Tabs
          value={activeTab}
          onChange={handleChange}
          TabIndicatorProps={{
            hidden: true
          }}
          centered
        >
          <TabStyled value={NavigationTabs.DASHBOARD} label='Dashboard' icon={<SvgIcon component={DashboardIcon} inheritViewBox sx={{fill: 'none'}} />} iconPosition='start' />
          <TabStyled value={NavigationTabs.SETTINGS} label='Settings' icon={<SvgIcon component={SettingsIcon} inheritViewBox sx={{fill: 'none'}} />} iconPosition='start' />
        </Tabs>}
      </Grid>
    </Grid>
  )
})

export default Header
