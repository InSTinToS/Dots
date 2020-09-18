import React from 'react'
import { Container } from './styles'
import GlobalStyle from 'styles/globalStyle'

import Dots from 'Dots'

const App: React.FC = () => {
  return (
    <Container>
      <Dots
        onLeftClick={() => {
          console.log('left')
        }}
        onRightClick={() => {
          console.log('right')
        }}
      />

      <GlobalStyle />
    </Container>
  )
}

export default App
