import styled from '@emotion/styled'
import Checkbox from '@mui/material/Checkbox'

const Toggle = styled(Checkbox)`
  width: 36px;
  height: 18px;
  padding: 0;
  background-color: #1a1a1a;
  border-radius: 9px;
  
  &:after {
    content: "";
    position: absolute;
    width: 13px;
    height: 14px;
    background-color: #fff;
    right: ${props => (props.checked ? '2px' : '21px' )};
    top: 2px;
    border-radius: 50%;
    transition: right 0.3s ease;
  }

  .MuiSvgIcon-root {
    display: none;
  }
`

export default Toggle
