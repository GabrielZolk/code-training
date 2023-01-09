import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(() => {
    const valorArmazenado = localStorage.getItem('meu-app:contador')
    return valorArmazenado ? Number(valorArmazenado) : 0
  })

  useEffect(() => {
    localStorage.setItem('meu-app:contador', contador)
  }, [contador])

  function lidarComContador() {
    setContador(contador + 1)
  }

  // ---------------------------------------------------------------------------------

  const [inputChange, setInputChange] = useState('Digite no input');

  function lidarComInputChange(event) {
    setInputChange(event.target.value)
  }

  // ---------------------------------------------------------------------------------

  

  return (

    <div className="App">
      <button onClick={lidarComContador}>Incrementar</button>
      <p>Você clicou {contador} vezes</p>
      <div>
        <input placeholder='Digite aqui' onChange={lidarComInputChange}></input>
        |<div>
        {inputChange}
        </div>
      </div>
    </div>

  )
}

export default App
