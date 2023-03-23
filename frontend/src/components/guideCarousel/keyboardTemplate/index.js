import { makeStyles } from 'tss-react/mui'
import { useRef, useEffect } from 'react'
import ShiftKeyboard from './shift'
import NormalKeyboard from './normal'

const useStyles = makeStyles()((theme) => { 

  return {
    root: {
      '.active': {
        '& rect': {
          stroke: `${theme.palette.info.main} !important`
        },
        '& path': {
          fill: `${theme.palette.info.main} !important`
        }
      },
      '.current': {
        '& rect': {
          fill: `${theme.palette.info.main} !important`,
          stroke: `${theme.palette.info.main} !important`
        },
        '& path': {
          fill: `${theme.palette.common.white} !important`
        }
      },
    },
  }
})

const KeyboardTemplate = ({ template = 'normal', actions = [], current }) => {
  const keyboardRef = useRef(null)
  const Component = template === 'normal' ? NormalKeyboard : ShiftKeyboard
  const { classes } = useStyles()

  useEffect(() => {
    actions
      .filter(action => action !== current)
      .forEach(action => keyboardRef.current.querySelector(`[data-action="${action}"]`)?.classList.add('active'))
    
    keyboardRef.current.querySelector(`[data-action="${current}"]`)?.classList.add('current')
  }, [actions, keyboardRef, template, current])

  return <Component ref={(ref) => (keyboardRef.current = ref)} className={classes.root}/>
}

export default KeyboardTemplate
