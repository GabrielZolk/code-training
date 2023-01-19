import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'

const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <HangmanPart>
      Zolk
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </HangmanPart>
  )
}

export default App
