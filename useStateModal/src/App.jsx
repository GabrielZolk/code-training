import { useState } from 'react'
import './index.css'
import Modal from './Components/Modal'

const BUTTON_STYLE = {
  borderRadius: '5px',
  width: '300px',
  height: '100px',
  color: 'white',
  backgroundColor: 'red',
  cursor: 'pointer',
  fontSize: '30px',
  fontWeight: 'bold',
}

function App() {
  const [openModal, setOpenModal] = useState(false)

  function handleOpenModal() {
    setOpenModal(true)
  }

  function handleCloseModal() {
    setOpenModal(!openModal)
  }

  return (
    <>
      <Modal isOpen={openModal} closeModal={handleCloseModal} >
        Content
      </Modal>
      <div style={{ display: 'flex', justifyContent: 'center', alignItens: 'center', marginTop: "40vh" }}>
        <button style={BUTTON_STYLE} onClick={handleOpenModal}>View Content</button>
      </div>
    </>
  )
}

export default App
