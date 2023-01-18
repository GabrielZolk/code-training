import React, { useState } from 'react'

export default function BasicForm() {
    const [text, setText] = useState("Dialix")

    const handleInput = (e) => {
      setText(e.target.value)
    }

    return (
        <div>


            <h3>{text}</h3>
             {/* O atributo value geralmente é usado em casos de retorno a página anterior do formulário, para que o que foi preenchido anteriormente fique salvo */}
            <input name="text" onChange={handleInput} value={text} />
        </div>
    )
}
