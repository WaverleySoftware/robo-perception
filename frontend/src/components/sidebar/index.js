import { useTheme } from '@mui/material/styles'
import { alpha, Button, Grid } from '@mui/material'
import { isLightMode } from '../../themes/base'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../store'
import { ActionModalName } from '../../store/ActionModal'

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0001 6.29883C9.95277 6.29883 8.28711 7.96449 8.28711 10.0118C8.28711 12.0592 9.95277 13.7248 12.0001 13.7248C14.0475 13.7248 15.7131 12.0592 15.7131 10.0118C15.7131 7.96449 14.0475 6.29883 12.0001 6.29883ZM12.0001 12.1615C10.8148 12.1615 9.85047 11.1971 9.85047 10.0118C9.85047 8.82652 10.8148 7.86219 12.0001 7.86219C13.1854 7.86219 14.1498 8.82652 14.1498 10.0118C14.1498 11.1971 13.1854 12.1615 12.0001 12.1615Z"/>
    <path d="M11.9996 2C7.5816 2 3.9873 5.59434 3.9873 10.0123V10.2338C3.9873 12.4682 5.26832 15.0719 7.79488 17.9726C9.62645 20.0754 11.4324 21.5416 11.5084 21.603C11.7949 21.8346 12.2043 21.8346 12.4909 21.6031C12.5668 21.5417 14.3728 20.0754 16.2043 17.9726C18.7309 15.0719 20.0119 12.4682 20.0119 10.2338V10.0123C20.0119 5.59434 16.4176 2 11.9996 2ZM18.4486 10.2338C18.4486 13.2606 14.3048 17.6897 12.6605 19.3281C12.291 19.6964 11.7083 19.6964 11.3387 19.3281C9.69439 17.6896 5.55066 13.2604 5.55066 10.2338V10.0123C5.55066 6.45641 8.44367 3.5634 11.9996 3.5634C15.5555 3.5634 18.4486 6.45641 18.4486 10.0123V10.2338Z"/>
  </svg>

)

const BuildingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2133_40003)">
    <path d="M20.8386 20.8281H19.2928V2.58594C19.2928 2.26234 19.0304 2 18.7068 2H5.29188C4.96828 2 4.70594 2.26234 4.70594 2.58594V20.8281H3.16016C2.83656 20.8281 2.57422 21.0905 2.57422 21.4141C2.57422 21.7377 2.83656 22 3.16016 22H20.8386C21.1622 22 21.4246 21.7377 21.4246 21.4141C21.4246 21.0905 21.1622 20.8281 20.8386 20.8281ZM10.0021 20.8281V16.8336H13.9966V20.8281H10.0021ZM15.1685 20.8281V16.2476C15.1685 15.924 14.9062 15.6617 14.5826 15.6617H9.41613C9.09254 15.6617 8.8302 15.924 8.8302 16.2476V20.8281H5.87781V3.17188H18.1209V20.8281H15.1685Z"/>
    <path d="M10.7386 4.59033H7.86719C7.54359 4.59033 7.28125 4.85268 7.28125 5.17627V8.04768C7.28125 8.37127 7.54359 8.63361 7.86719 8.63361H10.7386C11.0622 8.63361 11.3245 8.37127 11.3245 8.04768V5.17627C11.3245 4.85268 11.0622 4.59033 10.7386 4.59033ZM10.1527 7.46174H8.45312V5.76221H10.1527V7.46174Z"/>
    <path d="M16.1312 4.59033H13.2598C12.9362 4.59033 12.6738 4.85268 12.6738 5.17627V8.04768C12.6738 8.37127 12.9362 8.63361 13.2598 8.63361H16.1312C16.4548 8.63361 16.7171 8.37127 16.7171 8.04768V5.17627C16.7171 4.85268 16.4548 4.59033 16.1312 4.59033ZM15.5452 7.46174H13.8457V5.76221H15.5452V7.46174Z"/>
    <path d="M10.7386 10.0449H7.86719C7.54359 10.0449 7.28125 10.3073 7.28125 10.6309V13.5023C7.28125 13.8259 7.54359 14.0882 7.86719 14.0882H10.7386C11.0622 14.0882 11.3245 13.8259 11.3245 13.5023V10.6309C11.3245 10.3073 11.0622 10.0449 10.7386 10.0449ZM10.1527 12.9163H8.45312V11.2168H10.1527V12.9163Z"/>
    <path d="M16.1312 10.0449H13.2598C12.9362 10.0449 12.6738 10.3073 12.6738 10.6309V13.5023C12.6738 13.8259 12.9362 14.0882 13.2598 14.0882H16.1312C16.4548 14.0882 16.7171 13.8259 16.7171 13.5023V10.6309C16.7171 10.3073 16.4548 10.0449 16.1312 10.0449ZM15.5452 12.9163H13.8457V11.2168H15.5452V12.9163Z"/>
    </g>
    <defs>
    <clipPath id="clip0_2133_40003">
    <rect width="20" height="20" fill="white" transform="translate(2 2)"/>
    </clipPath>
    </defs>
  </svg>
)

const SidebarTitle = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '18px',
  fontWeight: theme.typography.fontWeightBold,
  color: isLightMode(theme.palette.mode) ? theme.palette.blue[100] : theme.palette.common.white,
}))

const FilterOption = styled(Button)(({ theme }) => {
  const backgroundColor = isLightMode(theme.palette.mode) ? theme.palette.grey[500] : theme.palette.blue[600]
  const infoColor = theme.palette.info.main

  return {
    height: '44px',
    padding: '0 24px',
    backgroundColor: 'transparent',
    color: isLightMode(theme.palette.mode) ? theme.palette.blue[100] : theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: '14px',
    boxShadow: 'none',
    textTransform: 'capitalize',
    justifyContent: 'flex-start',
    width: '100%',
    '&:hover': {
      backgroundColor,
      color: infoColor,
    },
    '&:disabled': {
      color: theme.palette.secondary.main,
    },
    '&:active': {
      backgroundColor,
      color: infoColor,
    },
    '&.selected': {
      backgroundColor,
      color: infoColor,
    }
  }
})

const FilterType = styled(FilterOption)(({ theme }) => ({
  '& svg': {
    fill: isLightMode(theme.palette.mode) ? theme.palette.blue[100] : theme.palette.common.white,
    transition: 'fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  '& .MuiButton-startIcon': {
    marginRight: '16px'
  },
  '& .MuiButton-endIcon': {
    marginLeft: 'auto'
  },
  '&:hover': {
    '& svg': {
      fill: theme.palette.info.main,
    }
  },
  '&:disabled': {
    '& svg': {
      fill: theme.palette.secondary.main,
    }
  },
  '&:active': {

  }
}))

const SelectedOption = styled(Typography)(({ theme }) => ({
  height: '44px',
  fontSize: '14px',
  fontWeight: theme.typography.fontWeightRegular,
  color: '#9293A4',
  display: 'flex',
  alignItems: 'center',
  padding: '0 24px 0 60px',
}))

const FilterOptionsBar = ({ options, selectedOption, onOptionSelect, index = 0 }) => {
  const theme = useTheme()

  return <Grid sx={{
    backgroundColor: alpha(isLightMode(theme.palette.mode) ? theme.palette.common.white : theme.palette.grey[200], 0.96),
    width: '256px',
    position: 'absolute',
    top: 0,
    left: '256px',
    height: '100%',
    borderRight: '1px solid #E8EAF6',
    paddingTop: `${68 + (index * 88)}px`
  }}>
    {
      options.map((option, i) =>
        <FilterOption
          key={i}
          className={option === selectedOption ? 'selected' : ''}
          onClick={() => onOptionSelect(option)}
        >{option}</FilterOption>
      )
    }
  </Grid>
}

const RobotFilter = ({ options, selectedOption, onOptionSelect, icon, title, disabled, index }) => {
  const [showBar, setShowBar] = useState(false)
  
  return (
    <>    
      <Grid
        onMouseEnter={() => setShowBar(true)}
        onMouseLeave={() => setShowBar(false)}
      >
        <FilterType
          disabled={disabled}
          startIcon={icon}
          endIcon={<ChevronRightIcon />}
        >{title}</FilterType>
        {showBar && <FilterOptionsBar options={options} selectedOption={selectedOption} onOptionSelect={onOptionSelect} index={index}/>}
      </Grid>
      {selectedOption && <SelectedOption>{selectedOption}</SelectedOption>}
    </>
  )
}

const Robot = styled(Button)(({ theme }) => ({
  height: '44px',
  padding: '0 16px',
  backgroundColor: 'transparent',
  color: isLightMode(theme.palette.mode) ? theme.palette.blue[100] : theme.palette.common.white,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: '16px',
  boxShadow: 'none',
  textTransform: 'none',
  justifyContent: 'flex-start',
  width: '100%',
  border: `1px solid ${theme.palette.grey[600]}`,
  borderRadius: '6px',
  marginBottom: '10px',
  '&:hover': {
    backgroundColor: isLightMode(theme.palette.mode) ? theme.palette.grey[500] : theme.palette.blue[600],
    color: theme.palette.info.main,
  },
  '&:active': {
    backgroundColor: isLightMode(theme.palette.mode) ? theme.palette.grey[500] : theme.palette.blue[600],
    color: theme.palette.info.main,
  },
  '&.selected': {
    color: theme.palette.info.main,
    borderColor: theme.palette.info.main,
    borderLeftWidth: '4px',
    paddingLeft: '12px'
  }
}))

const onlyUnique = (value, index, array) => array.indexOf(value) === index

const Sidebar = observer(() => {
  const [locations, setLocations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [buildings, setBuildings] = useState([])
  const [selectedBuilding, setSelectedBuilding] = useState(null)
  const theme = useTheme()
  const {
    settingsStore: { showSidebar, robotsSettings, currentRobotId, currentRobot, updateCurrentRobotId },
    videoPlayerStore: { isStreamStarted, pause },
    actionModalStore: { onShowActionModal },
  } = useStore()

  const clearFilters = () => {
    setSelectedLocation(null)
    setBuildings([])
    setSelectedBuilding(null)
  }

  useEffect(() => {
    const uniqueLocations = robotsSettings
      .map(({ location }) => location)
      .filter(onlyUnique)

    setLocations(uniqueLocations)

    if(currentRobot) {
      setSelectedLocation(currentRobot.location)
      setSelectedBuilding(currentRobot.building)
    }
  }, [])

  useEffect(() => {
    const currentLocation = selectedLocation || currentRobot?.location
    const uniqueBuildings = currentLocation
      ? robotsSettings
        .filter(({location}) => location === currentLocation)
        .map(({ building }) => building)
        .filter(onlyUnique)
      : []
    
    setBuildings(uniqueBuildings)

    const currentBuilding = selectedBuilding || currentRobot?.building

    if (uniqueBuildings.indexOf(currentBuilding) < 0) {
      setSelectedBuilding(null)
    }
  }, [selectedLocation, currentRobot, selectedBuilding])

  const handleRobotChange = (id) => {
    const updateCurrentRobotIdCallback = () => updateCurrentRobotId(id)

    if (isStreamStarted) {
      const actionModalConfirmCallback = async () => {
        await pause()
        updateCurrentRobotIdCallback()
      }

      onShowActionModal({
        actionModalName: ActionModalName.STREANMING,
        actionModalConfirmCallback,
      })
      return
    }

    updateCurrentRobotIdCallback()
  }

  return (
    <Grid sx={{
      backgroundColor: alpha(isLightMode(theme.palette.mode) ? theme.palette.common.white : theme.palette.grey[200], 0.96),
      borderRight: `1px solid ${isLightMode(theme.palette.mode) ? '#DCE0F0' : theme.palette.grey[100]}`,
      width: '256px',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: showSidebar ? 0 : '-256px',
      transition: theme.transitions.create(['left'], {
        duration: 250,
      }),
      zIndex: theme.zIndex.sidebar,

    }}>
      <Grid sx={{ height: '50%' }}>
        <Grid sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '68px',
          padding: '10px 24px',
        }}>
          <SidebarTitle>Location filters</SidebarTitle>
          {selectedLocation && <Button
            variant='text'
            color='info'
            sx={{
              textTransform: 'capitalize',
              padding: 0,
              fontSize: '14px',
              fontWeight: theme.typography.fontWeightRegular
            }}
            onClick={clearFilters}
          >
            Clear All
          </Button>}
        </Grid>
        <Grid>
          <RobotFilter
            title='Location'
            icon={<LocationIcon />}
            options={locations}
            selectedOption={selectedLocation}
            onOptionSelect={setSelectedLocation}
          />
          <RobotFilter
            title='Building'
            icon={<BuildingIcon />}
            options={buildings}
            selectedOption={selectedBuilding}
            onOptionSelect={setSelectedBuilding}
            disabled={!selectedLocation}
            index={1}
          />
        </Grid>
      </Grid>
      <Grid sx={{
        height: '50%',
        borderTop: `1px solid ${isLightMode(theme.palette.mode) ? '#DCE0F0' : theme.palette.grey[100]}`
      }}>
        <SidebarTitle sx={{padding: '16px 24px'}}>Robot list</SidebarTitle>
        {
          selectedLocation && selectedBuilding
            ? <Grid sx={{ overflowY: 'auto', height: 'calc(100% - 50px)', padding: '0 24px' }}>
              {robotsSettings
                .filter(({location}) => location === selectedLocation)
                .filter(({building}) => building === selectedBuilding)
                .map(({id, name}) => 
                  <Robot
                    key={id}
                    className={`${id === currentRobotId ? 'selected' : ''}`}
                    onClick={() => handleRobotChange(id)}
                  >{name}</Robot>)
                }
              </Grid>
            : <Typography
                sx={{
                  fontSize: '12px',
                  color: isLightMode(theme.palette.mode) ? theme.palette.secondary.main : theme.palette.grey[600],
                  marginTop: '160px',
                  padding: '0 24px',
                  textAlign: 'center',
                }}
          >Robot list is empty</Typography>
        }
      </Grid>
    </Grid>
  )
})

export default Sidebar
