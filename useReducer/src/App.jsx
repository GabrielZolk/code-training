import { useReducer } from 'react'
import './App.css'


const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, contador: state.contador + 1 }
    case 'showText':
      return { ...state, showText: !state.showText }
    case 'IncrementAndShowText':
      return { contador: state.contador + 1, showText: !state.showText }
    case 'resetValue':
      return { contador: 0, showText: true }
    default:
      return "This action doesn't exist"
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    contador: 0,
    showText: true,
  })

  // A linha abaixo faz com que não seja necessário percorrer o caminho do state.contador ou state.showText ao inserir o JS no HTML
  const { contador, showText } = state;

  // const [contador, setContador] = useState(0)
  // const [showText, setShowText] = useState(true)

  // function handleClick() {
  //   setContador((contador) => contador + 1)
  //   setShowText(!showText)
  // }

  function handleClick() {
    dispatch({ type: 'Increment' })
    // setContador((contador) => contador + 1)
    dispatch({ type: 'showText' })
    // setShowText(!showText)
  }

  function superHandleClick() {
    dispatch({ type: 'IncrementAndShowText' })
  } 

  return (

    <div className="App">
      <h1> Zolk </h1>
      <p>Você clicou {contador} vezes</p>
      <button onClick={handleClick}>Click Comum</button>
      <button onClick={superHandleClick}>Super Click</button>
      <button onClick={() => dispatch({ type: 'resetValue' })}>Reset Values</button>
      {showText && <p>Código demonstrativo de estado useState/useReducer</p>}
    </div>

  )
}

export default App
