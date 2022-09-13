import React, {useState} from 'react'
import { useStore } from '../../store'
import {default as SimpleKeyboard} from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'
import './style.css'

const layout = {
    default: [
        '1 2 3 4 5 6 7 8 9 0 - =',
        'q w e r t y u i o p {backspace}',
        '{capslock} a s d f g h j k l \' {enter}',
        '{shiftleft} z x c v b n m , . / {shiftright}',
        '{controlleft} {altleft} {space}'
    ],
    shift: [
        '! @ # $ % ^ & * ( ) _ +',
        'Q W E R T Y U I O P {backspace}',
        '{capslock} A S D F G H J K L " {enter}',
        '{shiftleft} Z X C V B N M < > ? {shiftright}',
        '{controlleft} {altleft} {space}'
    ]
}

const display = {
    '{backspace}': '⌫',
    '{enter}': '↵',
    '{shiftleft}': '↑',
    '{shiftright}': "↑",
    '{controlleft}': 'Ctrl',
    '{altleft}': '☺',
    '{capslock}': '⇪'
}

const Keyboard = () => {
    const {publishKey} = useStore()
    const [layoutName, setLayoutName] = useState('default')

    const onKeyPress = (button) => {
        if (button === '{capslock}') {
            setLayoutName(layoutName === 'default' ? 'shift' : 'default')
        }
        publishKey(button)
    }

    return (
        <div className='keyboard-wrapper'>
            <SimpleKeyboard
                layoutName={layoutName}
                onKeyPress={onKeyPress}
                theme={'hg-theme-default custom-theme-dark'}
                baseClass={'simple-keyboard-main'}
                physicalKeyboardHighlight={true}
                syncInstanceInputs={true}
                mergeDisplay={true}
                layout={layout}
                display={display}
            />
        </div>
    )
}

export default Keyboard
