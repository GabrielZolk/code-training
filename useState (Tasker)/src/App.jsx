import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [lista, setLista] = useState([])
  const [value, setValue] = useState("")

  function lidarComValue(event) {
    setValue(event.target.value)
  }

  function lidarComAdd() {
    setLista([...lista, value])
  }

  return (

    <div className="app">
      <h1>Lista de Afazeres</h1>
      <div>
        <input onChange={lidarComValue}></input>
        <button onClick={lidarComAdd}>Adicionar a lista</button>
        <div className='list'>
          {lista.map(item => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default App
