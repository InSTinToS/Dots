import React, { useState } from 'react'
import Style, { Dot } from './styles'

import { useSpring } from 'react-spring'

interface DotsProps {
  onLeftClick: () => void
  onRightClick: () => void
  size?: number
  gap?: number
  radius?: number
  color?: string
}

const Dots: React.FC<DotsProps> = ({
  onLeftClick,
  onRightClick,
  size = 16,
  gap = 20,
  radius = 100,
  color = '#000',
}) => {
  const props = {
    size: `${size}px`,
    gap: `${gap}px`,
    radius: `${radius}%`,
    color,
  }

  const maxMove = size + gap

  const [move, setMove] = useState('')

  const [left, setLeft] = useSpring(() => ({
    transform: 'translate(0px)',
    opacity: 1,
    reset: true,

    from: {
      transform: 'translateX(0px)',
      opacity: 1,
    },
  }))

  const [center, setCenter] = useSpring(() => ({
    transform: 'translate(0px) scale(1.4)',
    reset: true,

    from: {
      transform: 'translateX(0px)  scale(1)',
    },
  }))

  const [right, setRight] = useSpring(() => ({
    transform: 'translate(0px)',
    reset: true,
    opacity: 1,

    from: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
  }))

  const [newRight, setNewRight] = useSpring(() => ({
    transform: 'translate(0px)',
    opacity: 0,
    reset: true,

    from: {
      transform: 'translateX(0px)',
      opacity: 0,
    },
  }))

  const [newLeft, setNewLeft] = useSpring(() => ({
    transform: 'translate(0px)',
    opacity: 0,
    reset: true,

    from: {
      transform: 'translateX(0px)',
      opacity: 0,
    },
  }))

  const rightClick = () => {
    setMove('right')
    onRightClick()

    setNewRight({
      transform: `translate(-${maxMove}px) scale(1)`,
      opacity: 1,

      from: {
        transform: 'translateX(0px) scale(1)',
        opacity: 0,
      },
    })

    setRight({
      transform: `translate(-${maxMove}px)  scale(1.4)`,
      opacity: 1,

      from: {
        opacity: 1,
        transform: 'translateX(0px) scale(1)',
      },
    })

    setCenter({
      transform: `translate(-${maxMove}px)  scale(1)`,

      from: {
        transform: 'translateX(0px) scale(1.4)',
      },
    })

    setLeft({
      transform: `translate(-${maxMove}px)  scale(1)`,
      opacity: 0,

      from: {
        transform: 'translateX(0px) scale(1)',
        opacity: 1,
      },
    })

    setNewLeft({
      opacity: 0,
    })
  }

  const leftClick = () => {
    setMove('left')
    onLeftClick()

    setNewLeft({
      transform: `translate(${maxMove}px) scale(1)`,
      opacity: 1,

      from: {
        transform: 'translateX(0px) scale(1)',
        opacity: 0,
      },
    })

    setRight({
      transform: `translate(${maxMove}px)  scale(1)`,
      opacity: 0,

      from: {
        opacity: 1,
        transform: 'translateX(0px) scale(1)',
      },
    })

    setCenter({
      transform: `translate(${maxMove}px)  scale(1)`,

      from: {
        transform: 'translateX(0px) scale(1.4)',
      },
    })

    setLeft({
      transform: `translate(${maxMove}px)  scale(1.4)`,
      opacity: 1,

      from: {
        transform: 'translateX(0px) scale(1)',
        opacity: 1,
      },
    })

    setNewRight({
      opacity: 0,
    })
  }

  return (
    <Style {...props}>
      <Dot id='newLeft' style={newLeft} onClick={leftClick}>
        {' '}
      </Dot>

      <Dot
        id='left'
        style={left}
        onClick={() => move !== 'left' && leftClick()}
      >
        {' '}
      </Dot>

      <Dot
        id='center'
        style={center}
        onClick={() => (move !== 'left' ? leftClick() : rightClick())}
      >
        {' '}
      </Dot>

      <Dot
        id='right'
        style={right}
        onClick={() => move !== 'right' && rightClick()}
      >
        {' '}
      </Dot>

      <Dot id='newRight' style={newRight} onClick={rightClick}>
        {' '}
      </Dot>
    </Style>
  )
}

export default Dots
