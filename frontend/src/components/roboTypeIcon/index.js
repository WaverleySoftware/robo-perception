import React from 'react'
import { ReactComponent as LeggedSelectedIcon } from './legged_selected.svg'
import { ReactComponent as LeggedIcon } from './legged.svg'
import { ReactComponent as ManipulatorsIcon } from './manipulators.svg'
import { ReactComponent as QuadrocopterIcon } from './quadrocopter.svg'
import { ReactComponent as WheeledIcon } from './wheeled.svg'
import { ReactComponent as WheeledLeggedManipulIcon } from './wheeled_legged_manipul.svg'

import styled from '@emotion/styled'
import { useTheme } from '@mui/material'

const RobotTypeIcon = ({selected, type, className}) => {
  const theme = useTheme();
  let Icon;

  switch (type) {
    case 'Legged':
      Icon = selected && theme.palette.mode === 'light' ?
        <LeggedSelectedIcon className={className} /> :
        <LeggedIcon className={className} />
      break
    case 'Wheeled':
      Icon = <WheeledIcon className={className} />
      break
    case 'Manipulators':
      Icon = <ManipulatorsIcon className={className} />
      break
    case 'Wheeled/Legged+manipul':
      Icon = <WheeledLeggedManipulIcon className={className} />
      break
    default:
      Icon = <QuadrocopterIcon className={className} />
  }

  return Icon
}

export default styled(RobotTypeIcon)`
  max-height: ${props => props.maxHeight}
`
