import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { isLightMode } from '../../themes/base'
import { makeStyles } from 'tss-react/mui'
import Gamepad from 'react-gamepad'
import classNames from 'classnames'

const useStyles = makeStyles()((theme) => { 
  return {
    root: {
      '& path[data-button]:hover': {
        cursor: 'pointer',
      },
      '& path[data-button].active': {
        fill: `${theme.palette.common[isLightMode(theme.palette.mode) ? 'black' : 'white']} !important`,
      },
    },
  }
})

const ButtonLabel = {
  DPadUp: 'DPadUp',
  DPadDown: 'DPadDown',
  DPadLeft: 'DPadLeft',
  DPadRight: 'DPadRight',
  Y: 'Y',
  X: 'X',
  A: 'A',
  B: 'B',
  LB: 'LB',
  RB: 'RB',
  LT: 'LT',
  RT: 'RT',
}

const buttonState = {
  [ButtonLabel.DPadUp]: false,
  [ButtonLabel.DPadDown]: false,
  [ButtonLabel.DPadLeft]: false,
  [ButtonLabel.DPadRight]: false,
  [ButtonLabel.Y]: false,
  [ButtonLabel.X]: false,
  [ButtonLabel.A]: false,
  [ButtonLabel.B]: false,
  [ButtonLabel.LB]: false,
  [ButtonLabel.RB]: false,
  [ButtonLabel.LT]: false,
  [ButtonLabel.RT]: false,
}

const AxisLabel = {
  LeftStickX: 'LeftStickX',
  LeftStickY: 'LeftStickY',
  RightStickX: 'RightStickX',
  RightStickY: 'RightStickY',
}

const axisState = {
  [AxisLabel.LeftStickX]: 0,
  [AxisLabel.LeftStickY]: 0,
  [AxisLabel.RightStickX]: 0,
  [AxisLabel.RightStickY]: 0,
}

const axisButtonL3 = 'l3'
const axisButtonR3 = 'r3'

const AxisMoveRadius = 10

const Joystick = observer(() => {
  const [buttons, setButtons] = useState(buttonState)
  const [axis, setAxis] = useState(axisState)
  const [axisButtonPressed, setAxisButtonPressed] = useState('')
  const [axisShift, setAxisShift] = useState([0,0])
  const theme = useTheme()
  const { classes } = useStyles()
  
  const handleClickEvent = (event) => {
    const { target } = event
    const buttonName = target.dataset.button
    const isMouseDownEvent = event.type === 'mousedown'
    if (buttonName in buttons) {
      setButtons((currentButtonsState) => ({...currentButtonsState, [buttonName]: isMouseDownEvent}))
    } else {
      if(buttonName === axisButtonL3 || buttonName === axisButtonR3) {
        setAxisButtonPressed(isMouseDownEvent ? buttonName : '')
        if (!isMouseDownEvent) {
          setAxis((currentAxisState) => ({
            ...currentAxisState,
            [buttonName === axisButtonL3 ? AxisLabel.LeftStickX : AxisLabel.RightStickX]: 0,
            [buttonName === axisButtonL3 ? AxisLabel.LeftStickY : AxisLabel.RightStickY]: 0
          }))
        }
        setAxisShift([event.pageX, event.pageY])
      }
    }
  }
  
  const isLightModeEnabled = isLightMode(theme.palette.mode)
  const strokeColor = isLightModeEnabled ? theme.palette.blue[100] : theme.palette.common.white
  const fillColor = isLightModeEnabled ? theme.palette.common.white : '#898EAB'
  
  const buttonChangeHandler = (buttonName, pressed) => {
    if (buttonName in buttons) {
      setButtons((currentButtonsState) => ({...currentButtonsState, [buttonName]: pressed}))
    }
  }

  const axisChangeHandler = (axisName, value) => {
    if (axisName in axis) {
      setAxis((currentAxisState) => ({...currentAxisState, [axisName]: value}))
    }
  }

  const axisMoveHandler = (e) => {
    if(axisButtonPressed) {
      const buttonName = e.target.dataset.button
      let shiftX = e.pageX - axisShift[0]
      let shiftY = axisShift[1] - e.pageY
      if (Math.abs(shiftX) > AxisMoveRadius) {
        shiftX = shiftX < 0 ? -AxisMoveRadius : AxisMoveRadius
      }
      if (Math.abs(shiftY) > AxisMoveRadius) {
        shiftY = shiftY < 0 ? -AxisMoveRadius : AxisMoveRadius
      }
      // calculate distance between center of the circle and current cursor position
      const d = Math.sqrt(Math.pow(shiftX, 2) + Math.pow(shiftY, 2))

      // if the distance is bigger than radius of the circle we need to find the coordinates of the dot on a circle
      if (d > AxisMoveRadius) {
        shiftX = shiftX / d * AxisMoveRadius
        shiftY = shiftY / d * AxisMoveRadius
      }
      setAxis((currentAxisState) => ({
        ...currentAxisState,
        [buttonName === axisButtonL3 ? AxisLabel.LeftStickX : AxisLabel.RightStickX]: shiftX / AxisMoveRadius,
        [buttonName === axisButtonL3 ? AxisLabel.LeftStickY : AxisLabel.RightStickY]: shiftY / AxisMoveRadius,
      }))
    }
  }

  return (
    <Grid sx={{margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Gamepad
        onButtonChange={buttonChangeHandler}
        onAxisChange={axisChangeHandler}
      >
        <svg width="352" height="212" viewBox="0 0 352 212" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.root} onMouseDown={ handleClickEvent } onMouseUp={ handleClickEvent }>
          <path d="M322.063 38.0005C322.063 38.0005 314.764 38.0005 310.063 38.0005C305.362 38.0005 278.063 38.0005 270.063 37.9397C262.063 37.8789 258.577 37.9397 258.577 37.9397H232.516C231.724 33.3182 227.773 29.8032 223.015 29.8032H129.494C124.736 29.8032 120.785 33.3182 119.993 37.9397H93.5241C93.5241 37.9397 88.8915 37.9407 79.063 37.9397C67.9526 37.9386 47.5543 37.9385 44.563 37.9397C41.5717 37.9409 34.063 37.9397 29.563 38.0004C24.909 46.171 -8.08792 85.0476 3.42206 185.731C3.42206 185.731 3.42206 205.355 34.4641 208.5C88.7447 214 88.7447 195.337 88.7447 195.337C88.7447 195.337 89.6962 175.314 105.043 175.314H239.063C254.41 175.314 256.063 177 263.425 195.337C268.563 213.5 299.568 210.991 317.705 208.5C348.747 201.007 348.747 185.731 348.747 185.731C360.257 85.0476 322.063 38.0005 322.063 38.0005Z" fill={`url(#${isLightModeEnabled ? 'paint0_linear_1944_93187' : 'paint0_linear_1976_51956'}) `} stroke="#B7C0D9" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M65.2321 152.968C93.6659 152.968 116.716 129.918 116.716 101.484C116.716 73.0502 93.6659 50 65.2321 50C36.7982 50 13.748 73.0502 13.748 101.484C13.748 129.918 36.7982 152.968 65.2321 152.968Z" fill={fillColor} stroke="#B7C0D9" strokeWidth="2" strokeMiterlimit="10"/>
          <path data-button={ButtonLabel.DPadUp} className={classNames({ 'active': buttons.DPadUp })} d="M55.0646 69.3722C55.0291 67.1385 56.8301 65.3086 59.0641 65.3086H71.4581C73.6673 65.3086 75.4581 67.0995 75.4581 69.3086V83.0071C75.4581 84.0677 75.0369 85.0849 74.2871 85.835L68.2757 91.8487C66.7139 93.4111 64.1812 93.4116 62.6188 91.8498L56.4517 85.685C55.7168 84.9504 55.2966 83.9586 55.2801 82.9197L55.0646 69.3722Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10"/>
          <path data-button={ButtonLabel.DPadDown} className={classNames({ 'active': buttons.DPadDown })} d="M75.3935 133.581C75.429 135.815 73.628 137.645 71.394 137.645H59C56.7909 137.645 55 135.854 55 133.645V119.947C55 118.886 55.4214 117.869 56.1716 117.119L62.1853 111.105C63.7476 109.543 66.2806 109.543 67.8426 111.105L74.0075 117.273C74.7418 118.007 75.1615 118.998 75.1781 120.037L75.3935 133.581Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10"/>
          <path data-button={ButtonLabel.DPadLeft} className={classNames({ 'active': buttons.DPadLeft })} d="M33.1281 111.644C30.8943 111.68 29.0645 109.879 29.0645 107.645V95.251C29.0645 93.0418 30.8553 91.251 33.0645 91.251H46.762C47.8232 91.251 48.8408 91.6726 49.591 92.4231L55.6024 98.4368C57.1639 99.999 57.1637 102.531 55.6018 104.093L49.4369 110.258C48.7023 110.993 47.7108 111.413 46.6721 111.429L33.1281 111.644Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10"/>
          <path data-button={ButtonLabel.DPadRight} className={classNames({ 'active': buttons.DPadRight })} d="M97.3348 91.3156C99.5686 91.2801 101.398 93.0811 101.398 95.3151V107.709C101.398 109.918 99.6076 111.709 97.3985 111.709H83.7004C82.6395 111.709 81.6221 111.288 80.872 110.538L74.8611 104.527C73.2992 102.965 73.299 100.433 74.8606 98.8703L81.0259 92.7026C81.7605 91.9677 82.7523 91.5475 83.7912 91.531L97.3348 91.3156Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M286.048 152.968C314.482 152.968 337.532 129.918 337.532 101.484C337.532 73.0502 314.482 50 286.048 50C257.615 50 234.564 73.0502 234.564 101.484C234.564 129.918 257.615 152.968 286.048 152.968Z" fill={fillColor} stroke="#B7C0D9" strokeWidth="2" strokeMiterlimit="10"/>
          <path data-button={ButtonLabel.Y} className={classNames({ 'active': buttons.Y })} d="M286.547 90C293.174 90 298.547 84.6274 298.547 78C298.547 71.3726 293.174 66 286.547 66C279.919 66 274.547 71.3726 274.547 78C274.547 84.6274 279.919 90 286.547 90Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10"/>
          <path data-button={ButtonLabel.A} className={classNames({ 'active': buttons.A })} d="M286.547 136.969C293.174 136.969 298.547 131.596 298.547 124.969C298.547 118.341 293.174 112.969 286.547 112.969C279.919 112.969 274.547 118.341 274.547 124.969C274.547 131.596 279.919 136.969 286.547 136.969Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10"/>
          <path data-button={ButtonLabel.X} className={classNames({ 'active': buttons.X })} d="M262.564 112.984C269.192 112.984 274.564 107.612 274.564 100.984C274.564 94.357 269.192 88.9844 262.564 88.9844C255.937 88.9844 250.564 94.357 250.564 100.984C250.564 107.612 255.937 112.984 262.564 112.984Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10"/>
          <path data-button={ButtonLabel.B} className={classNames({ 'active': buttons.B })} d="M309.531 112.984C316.159 112.984 321.531 107.612 321.531 100.984C321.531 94.357 316.159 88.9844 309.531 88.9844C302.904 88.9844 297.531 94.357 297.531 100.984C297.531 107.612 302.904 112.984 309.531 112.984Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M133.564 198C151.79 198 166.564 183.225 166.564 165C166.564 146.775 151.79 132 133.564 132C115.339 132 100.564 146.775 100.564 165C100.564 183.225 115.339 198 133.564 198Z" fill={fillColor} stroke="#B7C0D9" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M213.564 198C231.79 198 246.564 183.225 246.564 165C246.564 146.775 231.79 132 213.564 132C195.339 132 180.564 146.775 180.564 165C180.564 183.225 195.339 198 213.564 198Z" fill={fillColor} stroke="#B7C0D9" strokeWidth="2" strokeMiterlimit="10"/>
          <path
            data-button={axisButtonL3}
            style={{ transform: `translate(${AxisMoveRadius * axis.LeftStickX}px, ${AxisMoveRadius * -axis.LeftStickY}px)`, cursor: 'grab'}}
            className={classNames({ 'active': axis.LeftStickX || axis.LeftStickY || axisButtonPressed === axisButtonL3 })}
            onMouseMove={axisMoveHandler}
            d="M157.564 165C157.564 178.255 146.819 189 133.564 189C120.31 189 109.564 178.255 109.564 165C109.564 151.745 120.31 141 133.564 141C146.819 141 157.564 151.745 157.564 165Z" stroke={strokeColor} strokeWidth="2" fill={fillColor}
          />
          <path
            data-button={axisButtonR3}
            style={{ transform: `translate(${AxisMoveRadius * axis.RightStickX}px, ${AxisMoveRadius * -axis.RightStickY}px)`, cursor: 'grab' }}
            className={classNames({ 'active': axis.RightStickX || axis.RightStickY || axisButtonPressed === axisButtonR3})}
            onMouseMove={axisMoveHandler}
            d="M237.564 165C237.564 178.255 226.819 189 213.564 189C200.31 189 189.564 178.255 189.564 165C189.564 151.745 200.31 141 213.564 141C226.819 141 237.564 151.745 237.564 165Z" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
          <path d="M231.775 52.5134C231.775 48.9161 228.859 46 225.261 46C221.664 46 218.748 48.9161 218.748 52.5134V63.8593C218.748 67.4566 221.664 70.3727 225.261 70.3727C228.859 70.3727 231.775 67.4566 231.775 63.8593V52.5134Z" stroke="#B7C0D9" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M132.775 52.5134C132.775 48.9161 129.859 46 126.261 46C122.664 46 119.748 48.9161 119.748 52.5134V63.8593C119.748 67.4566 122.664 70.3727 126.261 70.3727C129.859 70.3727 132.775 67.4566 132.775 63.8593V52.5134Z" stroke="#B7C0D9" strokeWidth="2" strokeMiterlimit="10"/>
          <path data-button={ButtonLabel.RB} className={classNames({ 'active': buttons.RB })} d="M270.482 25.0001C262.458 25.0002 258.892 33.8637 258 38H289.752H322C316.896 25.0001 312.339 25 307.93 25.0001C292.773 25.0002 279.844 24.9999 270.482 25.0001Z" fill={fillColor} stroke={strokeColor} strokeWidth="2"/>
          <path data-button={ButtonLabel.LB} className={classNames({ 'active': buttons.LB })} d="M81.42 25.0001C89.5072 25.0002 93.1014 33.8637 94 38H62H29C34.1437 25.0001 39.2361 25 43.6801 25.0001C58.9558 25.0002 71.985 24.9999 81.42 25.0001Z" fill={fillColor} stroke={strokeColor} strokeWidth="2"/>
          <path data-button={ButtonLabel.LT} className={classNames({ 'active': buttons.LT })} d="M71.9778 2.00007C77.7251 2.00007 82.888 7.74867 85.42 12.6374C86.5468 14.8131 84.7917 17 82.3416 17H41.2857C38.358 17 36.434 13.9475 38.0825 11.528C43.8896 3.00498 50.4424 2.00007 52.9111 2.00007C65.3226 2.00022 64.3119 2.00007 71.9778 2.00007Z" fill={fillColor} stroke={strokeColor} strokeWidth="2.25"/>
          <path data-button={ButtonLabel.RT} className={classNames({ 'active': buttons.RT })} d="M279.022 2.00007C273.275 2.00007 268.112 7.74867 265.58 12.6374C264.453 14.8131 266.208 17 268.658 17H309.714C312.642 17 314.566 13.9475 312.918 11.528C307.11 3.00498 300.558 2.00007 298.089 2.00007C285.677 2.00022 286.688 2.00007 279.022 2.00007Z" fill={fillColor} stroke={strokeColor} strokeWidth="2.25"/>
          <defs>
          <linearGradient id="paint0_linear_1944_93187" x1="175.747" y1="29.0005" x2="175.747" y2="230.001" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DFE5F7"/>
          <stop offset="0.489583" stopColor="#D5DBEB"/>
          <stop offset="1" stopColor="#BDC3D7"/>
          </linearGradient>
          <linearGradient id="paint0_linear_1976_51956" x1="175.747" y1="29.0005" x2="175.747" y2="230.001" gradientUnits="userSpaceOnUse">
          <stop stopColor="#686A8A"/>
          <stop offset="0.489583" stopColor="#4F5171"/>
          <stop offset="1" stopColor="#4F5171"/>
          </linearGradient>
          </defs>
        </svg>
      </Gamepad>
    </Grid>
  )
})

export default Joystick
