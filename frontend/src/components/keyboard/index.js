import React, {useState} from 'react'
import { useStore } from '../../store'
import {default as SimpleKeyboard} from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'
import { useTheme } from '@mui/material/styles'
import './style.css'
import { display, layout, buttonTheme, buttonAttributes, useStyles } from './keyboardSettings'

const Keyboard = () => {
    const {rosStore: { publishKeyAction }} = useStore()
    const [layoutName, setLayoutName] = useState('default')
    const { classes } = useStyles();

    const onKeyPress = (button) => {
        if (button === '{capslock}') {
            setLayoutName(layoutName === 'default' ? 'shift' : 'default')
        }
        publishKeyAction(button)
    }

    const theme = useTheme()

    return (
        <div className='keyboard-wrapper'>
            <SimpleKeyboard
                layoutName={layoutName}
                onKeyPress={onKeyPress}
                theme={`hg-theme-default ${classes.root}`}
                baseClass={'simple-keyboard-main'}
                physicalKeyboardHighlight={true}
                physicalKeyboardHighlightPress={true}
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
}

export default Keyboard
