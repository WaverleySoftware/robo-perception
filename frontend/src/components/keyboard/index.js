import React, {useState, useRef, useEffect, useCallback} from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../store'
import {default as SimpleKeyboard} from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'
import { useTheme } from '@mui/material/styles'
import './style.css'
import {
  display,
  layout,
  buttonTheme,
  buttonAttributes,
  useStyles,
  syntethicKeysMap,
  defaultLayoutName,
  shiftLayoutName,
  capslockLayoutName,
} from './keyboardSettings'

const isLinuxOS = navigator.userAgent.indexOf('Linux') >= 0

const Keyboard = observer(() => {
    const {
      rosStore: { handleKeyboardShortcuts },
      videoPlayerStore: { isFullscreen, toggleFullscreen},
      navigationStore: { activeTab },
    } = useStore()
    const keyboardRef = useRef(null)
    const [shiftPress, setShiftPress] = useState({isPressed: false, isVirtual: false, firstClick: false})
    const [capslockPress, setCapslockPress] = useState({isPressed: false, isVirtual: false, firstClick: false})
    const theme = useTheme()
    
    /**
     * keyboard press button handler
     * @param {string} button - button key
     * @param {object|undefined} e - event object comes only when virtual button pressed
     */
    const onKeyPress = (button, e) => {
      const key = syntethicKeysMap[button] || button
      const isVirtual = Boolean(e)

      if (button === '{capslock}') {
        if(!capslockPress.isPressed) {
          setCapslockPress({
            isVirtual,
            isPressed: true,
            firstClick: true
          })
        } else {
          /*
           * On Linux OS onKeyPress handler for capslock button is invoked on every press from physical keyboard.
           * Whereas on Mac Os current handler is not invoked when capslock is already pressed and active.
           * That's why additionally we need to track "firstClick" property
           */
          if(capslockPress.isVirtual || (!isVirtual && isLinuxOS)) {
            setCapslockPress({
              isVirtual,
              isPressed: true,
              firstClick: true
            })
          } else {
            if(capslockPress.isVirtual || (!isVirtual && isLinuxOS)) {
              setCapslockPress({
                isVirtual,
                isPressed: true,
                firstClick: false
              })
            }
          }
        }
      }
      
      /*
       * We need to track if shift is pressed, because it has higher priority than capslock
       */
      if (button === '{shiftleft}'|| button === '{shiftright}') {
        setShiftPress({ isPressed: true, isVirtual, firstClick: !shiftPress.isPressed })
      }

      if(isFullscreen && key === 'Escape') {
        toggleFullscreen()
      }

      handleKeyboardShortcuts(key)
    }


     /**
     * keyboard release button handler
     * @param {string} button - button key
     * @param {object|undefined} e - event object comes only when virtual button pressed
     */
    const onKeyReleased = (button, e) => {
      const isVirtual = Boolean(e)

      if (button === '{capslock}' && capslockPress.isPressed) {
        /*
         * On Linux OS capslock release must be ignored when capslock is active
         */
        if(isLinuxOS && capslockPress.firstClick) {
          return
        }
        /*
         * Physical keyboard is a prior to virtual one. That's why, for example, if physical capslock was pressed,
         * then virtual capslock button was pressed, the virtual event must be ignored
         */
        if ((!capslockPress.firstClick && capslockPress.isVirtual && isVirtual) || !isVirtual) {
          setCapslockPress({ isPressed: false, isVirtual: false, firstClick: false })
        }
      } else if (button === '{shiftleft}'|| button === '{shiftright}') {
        if((isVirtual && !shiftPress.firstClick) || !isVirtual) {
          setShiftPress({ isPressed: false, isVirtual: false, firstClick: false })
        }
      } else {
        /*
         * The state of virtual shiftPress must be reset after user presses another button
         */
        if (shiftPress.isPressed && shiftPress.isVirtual) {
          setShiftPress({ isPressed: false, isVirtual: false, firstClick: false })
        }
      }
    }

    const handleBlur = () => {
        keyboardRef.current.recurseButtons(buttonElement => {
            buttonElement.removeAttribute("style");
        });
    }

    useEffect(() => {
        window.addEventListener('blur', handleBlur);
        return () => window.removeEventListener('blur', handleBlur);
    }, []);

    const paintButtons = useCallback((elements, isPressed) => {
      elements.forEach(element => {
        if(isPressed) {
          element.style.color = theme.palette.common.white
          element.style.backgroundColor = theme.palette.background.keyboardButtonBgPressed
        } else {
          element.style = null
        }
      })
    }, [theme.palette.common.white, theme.palette.background.keyboardButtonBgPressed])

    useEffect(() => {
      const capslockButton = keyboardRef.current.buttonElements['{capslock}']
      // trick with setTimeout is needed to fix issue with highlighting inside simple-keyboard library
      setTimeout(() => paintButtons(capslockButton, capslockPress.isPressed), 200)
    })

    useEffect(() => {
      const shiftLeftButton = keyboardRef.current.buttonElements['{shiftleft}']
      const shiftRightButton = keyboardRef.current.buttonElements['{shiftright}']
      paintButtons([...shiftLeftButton, ...shiftRightButton], shiftPress.isPressed)
    }, [shiftPress, paintButtons])

    let layoutName = defaultLayoutName
  
    if (shiftPress.isPressed) {
      layoutName = shiftLayoutName
    } else if (capslockPress.isPressed) {
      layoutName = capslockLayoutName
    }

    const { classes } = useStyles(layoutName)

    return (
        <div className='keyboard-wrapper'>
            <SimpleKeyboard
                keyboardRef={ref => (keyboardRef.current = ref)}
                layoutName={layoutName}
                onKeyPress={onKeyPress}
                onKeyReleased={onKeyReleased}
                theme={`hg-theme-default ${classes.root}`}
                baseClass={'simple-keyboard-main'}
                physicalKeyboardHighlight={true}
                physicalKeyboardHighlightPress={true}
                physicalKeyboardHighlightPreventDefault={activeTab === 0}
                physicalKeyboardHighlightTextColor={theme.palette.common.white}
                physicalKeyboardHighlightBgColor={theme.palette.background.keyboardButtonBgPressed}
                physicalKeyboardHighlightPressUsePointerEvents={true}
                syncInstanceInputs={true}
                mergeDisplay={true}
                layout={layout}
                display={display}
                buttonTheme={buttonTheme}
                buttonAttributes={buttonAttributes}
            />
        </div>
    )
})

export default Keyboard
