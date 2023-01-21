// Stage 1

import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Zolk')

  return (
    <>
      <div>{name}</div>
      <ChildrenOne />
    </>
  )
}

function ChildrenOne() {
  return <ChildrenTwo />
}

function ChildrenTwo() {
  return (
    <button onClick={() => setName('Carlinhos da Massa')}>Mude o Nome</button>
  )
}





// Gambiarra através de parâmetros - Prop drilling

export function App2() {
  const [name2, setName2] = useState('Zolk2')

  return (
    <>
      <div>{name2}</div>
      <ChildrenOne2 changeName={setName2}/>
    </>
  )
}

function ChildrenOne2({ changeName }) {
  return <ChildrenTwo2 changeName={changeName} />
}

function ChildrenTwo2({ changeName }) {
  return (
    <button onClick={() => changeName('Carlinhos da Massa2')}>Mude o Nome2</button>
  )
}

export default App