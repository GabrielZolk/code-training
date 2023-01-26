import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
    </div>
  )
}

export default App
