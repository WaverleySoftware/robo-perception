import React, {useState, useRef, useEffect} from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../store'
import {default as SimpleKeyboard} from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'
import { useTheme } from '@mui/material/styles'
import './style.css'
import { display, layout, buttonTheme, buttonAttributes, useStyles, syntethicKeysMap } from './keyboardSettings'

const Keyboard = observer(() => {
    const {rosStore: { handleKeyboardShortcuts }} = useStore()
    const [layoutName, setLayoutName] = useState('default')
    const { classes } = useStyles();
    const keyboardRef = useRef(null);

    const onKeyPress = (button) => {
        if (button === '{capslock}') {
            setLayoutName(layoutName === 'default' ? 'shift' : 'default')
        }
        const key = syntethicKeysMap[button] || button
        handleKeyboardShortcuts(key)
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

    const theme = useTheme()

    return (
        <div className='keyboard-wrapper'>
            <SimpleKeyboard
                keyboardRef={ref => (keyboardRef.current = ref)}
                layoutName={layoutName}
                onKeyPress={onKeyPress}
                theme={`hg-theme-default ${classes.root}`}
                baseClass={'simple-keyboard-main'}
                physicalKeyboardHighlight={true}
                physicalKeyboardHighlightPress={true}
                physicalKeyboardHighlightPreventDefault={true}
                physicalKeyboardHighlightTextColor={theme.palette.common.white}
                physicalKeyboardHighlightBgColor={theme.palette.background.keyboardButtonBgPressed}
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
