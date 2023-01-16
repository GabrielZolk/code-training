import './App.css'
import { useModal } from './hooks/useModal'

function App() {
  const { isOpen, handleOpen, handleClose, handleMulti } = useModal(false)

  return (
    <div className="App">
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen && <div>Modal Content</div>}
      <button onClick={handleClose}>Close Modal</button>
      <button onClick={handleMulti}>Open / Close</button>
    </div>
  )
}

export default App
