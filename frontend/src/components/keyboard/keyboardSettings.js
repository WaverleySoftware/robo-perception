import { makeStyles } from 'tss-react/mui'
import keyboardIcon from './icons'

export const layout = {
  default: [
      '{escape} 1 2 3 4 5 6 7 8 9 0 - = {backspace}',
      '{tab} q w e r t y u i o p [ ] \\',
      '{capslock} a s d f g h j k l ; \' {enter}',
      '{shiftleft} z x c v b n m , . / {arrowup} {shiftright}',
      '{fn} {controlleft} {altleft} {space} {altright} {controlright} {arrowleft} {arrowdown} {arrowright}',
  ],
  shift: [
      '{escape} ! @ # $ % ^ & * ( ) _ + {backspace}',
      '{tab} Q W E R T Y U I O P { } |',
      '{capslock} A S D F G H J K L : " {enter}',
      '{shiftleft} Z X C V B N M < > ? {arrowup} {shiftright}',
      '{fn} {controlleft} {altleft} {space} {altright} {controlright} {arrowleft} {arrowdown} {arrowright}',
  ],
}

export const display = {
  '{backspace}': '⌫',
  '{enter}': 'Enter',
  '{tab}': 'Tab',
  '{shiftleft}': 'Shift',
  '{shiftright}': 'Shift',
  '{controlleft}': 'Ctrl',
  '{controlright}': 'Ctrl',
  '{altleft}': 'Alt',
  '{altright}': 'Alt',
  '{capslock}': 'Caps',
  '{arrowup}': ' ',
  '{fn}': 'Fn',
}

export const buttonTheme = [
  {
    class: 'number-buttons',
    buttons: '1 2 3 4 5 6 7 8 9 0',
  },
  {
    class: 'functional-buttons',
    buttons: '{escape} {tab} {capslock} {enter} {shiftleft} {shiftright} {controlleft} {controlright} {altleft} {altright} {fn}',
  },
  {
    class: 'arrow-buttons',
    buttons: '{arrowup} {arrowleft} {arrowdown} {arrowright}',
  },
  {
    class: 'move-buttons',
    buttons: 'i o l , . m j u',
  },
  {
    class: 'rotate-buttons',
    buttons: 'g h',
  },
  {
    class: 'incline-side-buttons',
    buttons: 'a s',
  },
  {
    class: 'incline-straight-buttons',
    buttons: 'd f',
  },
  {
    class: 'math-buttons',
    buttons: '- =',
  },
  {
    class: 'brackets-buttons',
    buttons: '[ ]',
  },
  {
    class: 'colon-comma-buttons',
    buttons: '; \'',
  },
]

export const buttonAttributes = [
  {
    attribute: 'data-img',
    value: 'body-roll-front',
    buttons: '1',
  },
  {
    attribute: 'data-img',
    value: 'body-roll-back',
    buttons: '2',
  },
  {
    attribute: 'data-img',
    value: 'body-roll-left',
    buttons: '3',
  },
  {
    attribute: 'data-img',
    value: 'body-roll-right',
    buttons: '4',
  },
  {
    attribute: 'data-img',
    value: 'body-elevation-up',
    buttons: '5',
  },
  {
    attribute: 'data-img',
    value: 'body-elevation-down',
    buttons: '6',
  },
  {
    attribute: 'data-img',
    value: 'arrow-up',
    buttons: '{arrowup}',
  },
  {
    attribute: 'data-img',
    value: 'arrow-left',
    buttons: '{arrowleft}',
  },
  {
    attribute: 'data-img',
    value: 'arrow-down',
    buttons: '{arrowdown}',
  },
  {
    attribute: 'data-img',
    value: 'arrow-right',
    buttons: '{arrowright}',
  },
  {
    attribute: 'data-img',
    value: 'move-forward',
    buttons: 'i',
  },
  {
    attribute: 'data-img',
    value: 'move-forward-right',
    buttons: 'o',
  },
  {
    attribute: 'data-img',
    value: 'move-right',
    buttons: 'l',
  },
  {
    attribute: 'data-img',
    value: 'move-back-right',
    buttons: '.',
  },
  {
    attribute: 'data-img',
    value: 'move-back',
    buttons: ',',
  },
  {
    attribute: 'data-img',
    value: 'move-back-left',
    buttons: 'm',
  },
  {
    attribute: 'data-img',
    value: 'move-left',
    buttons: 'j',
  },
  {
    attribute: 'data-img',
    value: 'move-forward-left',
    buttons: 'u',
  },
  {
    attribute: 'data-img',
    value: 'rotate-right',
    buttons: 'h',
  },
  {
    attribute: 'data-img',
    value: 'rotate-left',
    buttons: 'g',
  },
  {
    attribute: 'data-img',
    value: 'incline-left',
    buttons: 'a',
  },
  {
    attribute: 'data-img',
    value: 'incline-right',
    buttons: 's',
  },
  {
    attribute: 'data-img',
    value: 'incline-front',
    buttons: 'd',
  },
  {
    attribute: 'data-img',
    value: 'incline-back',
    buttons: 'f',
  },
  {
    attribute: 'data-img',
    value: 'underscore',
    buttons: '-',
  },
  {
    attribute: 'data-img',
    value: 'plus',
    buttons: '=',
  },
  {
    attribute: 'data-img',
    value: 'curle-bracket-left',
    buttons: '[',
  },
  {
    attribute: 'data-img',
    value: 'curle-bracket-right',
    buttons: ']',
  },
  {
    attribute: 'data-img',
    value: 'question-mark',
    buttons: '/',
  },
  {
    attribute: 'data-img',
    value: 'colon',
    buttons: ';',
  },
  {
    attribute: 'data-img',
    value: 'inverted-commas',
    buttons: '\'',
  },
  {
    attribute: 'data-key',
    value: 'space',
    buttons: '{space}',
  },
  {
    attribute: 'data-key',
    value: 'backspace',
    buttons: '{backspace}',
  },
]

export const useStyles = makeStyles()((theme) => ({
  root: {
    background: 'transparent',
    '& .hg-button': {
      height: '34px',
      backgroundColor: theme.palette.background.keyboardButtonBg,
      color: theme.palette.common.black,
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamily,
      borderRadius: '4px',
      borderBottom: 0,
      fontSize: '13px',
      padding: '4px',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      position: 'relative',
      '&:before': {
        position: 'absolute',
        fontSize: 0,
      },
      '&:hover': {
        backgroundColor: theme.palette.background.keyboardButtonBgHover,
        color: theme.palette.common.white,
      },
      '&:active': {
        backgroundColor: theme.palette.background.keyboardButtonBgPressed,
        color: theme.palette.common.white,
      },
      // groups of buttons
      '&.number-buttons': {
        fontSize: '10px',
      },
      '&.functional-buttons': {
        fontSize: '8px',
      },
      '&.arrow-buttons': {
        color: 'transparent !important',
        width: '34px',
        flexGrow: 'unset',
        '&:before': {
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }
      },
      '&.move-buttons': {
        '&:before': {
          left: '50%',
          bottom: '5px',
          transform: 'translate(-50%, 0)',
        }
      },
      '&.rotate-buttons': {
        '&:before': {
          left: '50%',
          bottom: '3px',
          transform: 'translate(-50%, 0)',
        }
      },
      '&.incline-straight-buttons': {
        '&:before': {
          bottom: '0',
          right: '1px',
        }
      },
      '&.incline-side-buttons': {
        '&:before': {
          bottom: 0,
          right: '4px',
        }
      },
      '&.brackets-buttons': {
        alignItems: 'flex-end',
        justifyContent: 'center',
        '& span': {
          marginBottom: '3px'
        },
        '&:before': {
          top: '3px',
          left: '6px',
        }
      },
      '&.colon-comma-buttons': {
        alignItems: 'flex-end',
        justifyContent: 'center',
        '&:before': {
          top: '5px',
          left: '4px',
        }
      },
      // individual buttons
      '&[data-img="body-roll-front"]': {
        '&:before': {
          content: keyboardIcon.getIcon('bodyRollFront'),
          bottom: 0,
          right: '3px',
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('bodyRollFront', theme.palette.common.white),
        },
      },
      '&[data-img="body-roll-back"]': {
        '&:before': {
          content: keyboardIcon.getIcon('bodyRollBack'),
          bottom: 0,
          right: '3px',
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('bodyRollBack', theme.palette.common.white),
        },
      },
      '&[data-img="body-roll-left"]': {
        '&:before': {
          content: keyboardIcon.getIcon('bodyRollLeft'),
          height: '19px',
          bottom: '6px',
          right: '5px',
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('bodyRollLeft', theme.palette.common.white),
        },
      },
      '&[data-img="body-roll-right"]': {
        '&:before': {
          content: keyboardIcon.getIcon('bodyRollRight'),
          height: '19px',
          bottom: '6px',
          right: '5px',
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('bodyRollRight', theme.palette.common.white),
        },
      },
      '&[data-img="body-elevation-up"]': {
        '&:before': {
          content: keyboardIcon.getIcon('bodyElevationUp'),
          bottom: 0,
          right: '4px',
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('bodyElevationUp', theme.palette.common.white),
        },
      },
      '&[data-img="body-elevation-down"]': {
        '&:before': {
          content: keyboardIcon.getIcon('bodyElevationDown'),
          bottom: 0,
          right: '4px',
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('bodyElevationDown', theme.palette.common.white),
        },
      },
      '&[data-img="arrow-up"]': {
        '&:before': {
          content: keyboardIcon.getIcon('arrowUp'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('arrowUp', theme.palette.common.white),
        },
      },
      '&[data-img="arrow-left"]': {
        '&:before': {
          content: keyboardIcon.getIcon('arrowLeft'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('arrowLeft', theme.palette.common.white),
        },
      },
      '&[data-img="arrow-down"]': {
        '&:before': {
          content: keyboardIcon.getIcon('arrowDown'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('arrowDown', theme.palette.common.white),
        },
      },
      '&[data-img="arrow-right"]': {
        '&:before': {
          content: keyboardIcon.getIcon('arrowRight'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('arrowRight', theme.palette.common.white),
        },
      },
      '&[data-img="move-forward"]': {
        '&:before': {
          content: keyboardIcon.getIcon('moveForward'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('moveForward', theme.palette.common.white),
        },
      },
      '&[data-img="move-forward-right"]': {
        '&:before': {
          content: keyboardIcon.getIcon('moveForwardRight'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('moveForwardRight', theme.palette.common.white),
        },
      },
      '&[data-img="move-right"]': {
        '&:before': {
          content: keyboardIcon.getIcon('moveRight'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('moveRight', theme.palette.common.white),
        },
      },
      '&[data-img="move-back-right"]': {
        '&:before': {
          content: keyboardIcon.getIcon('moveBackRight'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('moveBackRight', theme.palette.common.white),
        },
      },
      '&[data-img="move-back"]': {
        '&:before': {
          content: keyboardIcon.getIcon('moveBack'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('moveBack', theme.palette.common.white),
        },
      },
      '&[data-img="move-back-left"]': {
        '&:before': {
          content: keyboardIcon.getIcon('moveBackLeft'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('moveBackLeft', theme.palette.common.white),
        },
      },
      '&[data-img="move-left"]': {
        '&:before': {
          content: keyboardIcon.getIcon('moveLeft'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('moveLeft', theme.palette.common.white),
        },
      },
      '&[data-img="move-forward-left"]': {
        '&:before': {
          content: keyboardIcon.getIcon('moveForwardLeft'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('moveForwardLeft', theme.palette.common.white),
        },
      },
      '&[data-img="rotate-right"]': {
        '&:before': {
          content: keyboardIcon.getIcon('rotateRight'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('rotateRight', theme.palette.common.white),
        },
      },
      '&[data-img="rotate-left"]': {
        '&:before': {
          content: keyboardIcon.getIcon('rotateLeft'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('rotateLeft', theme.palette.common.white),
        },
      },
      '&[data-img="incline-left"]': {
        '&:before': {
          content: keyboardIcon.getIcon('inclineLeft'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('inclineLeft', theme.palette.common.white),
        },
      },
      '&[data-img="incline-right"]': {
        '&:before': {
          content: keyboardIcon.getIcon('inclineRight'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('inclineRight', theme.palette.common.white),
        }
      },
      '&[data-img="incline-front"]': {
        '&:before': {
          content: keyboardIcon.getIcon('inclineFront'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('inclineFront', theme.palette.common.white),
        },
      },
      '&[data-img="incline-back"]': {
        '&:before': {
          content: keyboardIcon.getIcon('inclineBack'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('inclineBack', theme.palette.common.white),
        },
      },
      '&[data-img="underscore"]': {
        alignItems: 'center',
        justifyContent: 'center',
        '& span': {
          marginTop: '5px'
        },
        '&:before': {
          content: keyboardIcon.getIcon('underscore'),
          left: '4px',
          top: '12px',
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('underscore', theme.palette.common.white),
        },
      },
      '&[data-img="plus"]': {
        alignItems: 'center',
        justifyContent: 'center',
        '& span': {
          marginTop: '4px'
        },
        '&:before': {
          content: keyboardIcon.getIcon('plus'),
          left: '4px',
          top: '4px',
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('plus', theme.palette.common.white),
        },
      },
      '&[data-img="curle-bracket-left"]': {
        '&:before': {
          content: keyboardIcon.getIcon('curleBracketLeft'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('curleBracketLeft', theme.palette.common.white),
        },
      },
      '&[data-img="curle-bracket-right"]': {
        '&:before': {
          content: keyboardIcon.getIcon('curleBracketRight'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('curleBracketRight', theme.palette.common.white),
        },
      },
      '&[data-img="question-mark"]': {
        justifyContent: 'center',
        alignItems: 'center',
        '&:before': {
          content: keyboardIcon.getIcon('questionMark'),
          top: '5px',
          left: '4px',
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('questionMark', theme.palette.common.white),
        },
      },
      '&[data-img="colon"]': {
        '&:before': {
          content: keyboardIcon.getIcon('colon'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('colon', theme.palette.common.white),
        },
      },
      '&[data-img="inverted-commas"]': {
        '&:before': {
          content: keyboardIcon.getIcon('invertedCommas'),
        },
        '&:hover:before': {
          content: keyboardIcon.getIcon('invertedCommas', theme.palette.common.white),
        },
      },
      '&[data-key="space"]': {
        minWidth: '180px',
      },
      '&[data-key="backspace"]': {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
}))

export const syntethicKeysMap = {
  '{escape}': 'Escape',
  '{backspace}': 'Backspace',
  '{enter}': 'Enter',
  '{tab}': 'Tab',
  '{shiftleft}': 'Shift',
  '{shiftright}': 'Shift',
  '{controlleft}': 'Control',
  '{controlright}': 'Control',
  '{altleft}': 'Alt',
  '{altright}': 'Alt',
  '{capslock}': 'CapsLock',
  '{arrowup}': 'ArrowUp',
  '{arrowleft}': 'ArrowLeft',
  '{arrowdown}': 'ArrowDown',
  '{arrowright}': 'ArrowRight',
  '{space}': ' ',
}
