import { useEffect } from 'react'
// Guardar Ref de valores
import { useRef } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [textInput, setTextInput] = useState('')
  const [data, setData] = useState([])
  const countRef = useRef(0)
  const buttonRef = useRef()

  {/* Procurar users no site */}
  {/* Requisitar na API a cada letra digitada, com lógica para o código esperar o user terminar de digitar com useRef */}
  const timeToCallSomething = useRef(null)

  const fetchSomething = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${textInput}`).then((res) => res.json()).then((data) => setData(data.results))
  }

  console.log(data)

  useEffect(() => {
    if(timeToCallSomething.current) {
      clearInterval(timeToCallSomething.current)
    }
    // Este timeout faz com que a requisição só seja feita após passar o tempo determinado, e não a cada tecla digitada como sugere a lógica
    timeToCallSomething.current = setTimeout(fetchSomething, 2000)
    

    // CleanUp
    return () => clearInterval(timeToCallSomething.current)
  }, [textInput])


  // Tras a referência do elemento HTML
  // useEffect(() => {
  //   buttonRef.current.click()
  // }, [])


  // Guarda o estado anterior no contador referência
  //  useEffect(() => {
  //   countRef.current = count
  // }, [count])


  // Gerar número automático no click  do count
  // useEffect(() => {
  //   countRef.current = Math.random()
  //   console.log(countRef.current)
  // })


  //infinite count
  // useEffect(() => {
   // setCount((prevValue) => prevValue + 1 )
  // })

  return (
    <div className="App">
      <h1>Zolk useRef</h1>
      <div className="card">
        <p>Contador Original: {count}</p>
        <p>Contador Referência: {countRef.current}</p>

        {/* Procurar users no site */}
        {/* Requisitar na API a cada letra digitada, com lógica para o código esperar o user terminar de digitar com useRef */}
        <form>
          <input value={textInput} onChange={(e) => setTextInput(e.target.value)} name='name' />
          <button type='submit'>submit</button>
        </form>
        <button ref={buttonRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
