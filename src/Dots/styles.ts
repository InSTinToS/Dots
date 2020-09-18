import styled from 'styled-components'

import { animated } from 'react-spring'

interface StyleProps {
  size: string
  gap: string
  radius: string
  color: string
}

export const Dot = styled(animated.button)``

const Style = styled.div.attrs({ className: 'Dots' })<StyleProps>`
  display: flex;

  ${Dot} {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: ${({ radius }) => radius};
    background-color: ${({ color }) => color};
  }

  ${Dot} + ${Dot} {
    margin-left: ${({ gap }) => gap};
  }
`

export default Style
