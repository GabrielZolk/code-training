import { useContext } from 'react'
import { createContext, useState } from 'react'
import './App.css'





// Stage 1

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

export default App






// Gambiarra através de parâmetros - Prop drilling

export function App2() {
  const [name2, setName2] = useState('Zolk2')

  return (
    <>
      <div>{name2}</div>
      <ChildrenOne2 changeName={setName2} />
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





// Modo correto - useContext

const AppContext = createContext(null)

export function App3() {
  const [name3, setName3] = useState('Zolk3')

  return (
    <AppContext.Provider value={{ name3, setName3 }}>
      <div>{name3}</div>
      <ChildrenOne3 changeName={setName3} />
    </AppContext.Provider>
  )
}

function ChildrenOne3() {
  return <ChildrenTwo3 />
}

function ChildrenTwo3() {
  const { setName3 } = useContext(AppContext)
  return (
    <button onClick={() => setName3('Carlinhos da Massa3')}>Mude o Nome3</button>
  )
}