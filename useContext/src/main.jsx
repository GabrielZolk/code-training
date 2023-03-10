import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { App2, App3 } from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* Infuncional */}
    <App />

    {/* Funcional com prop drilling */}
    <App2 />

    {/* Modo certo - useContext */}
    <App3 />
  </React.StrictMode>,
)
