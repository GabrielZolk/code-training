import { Button, Button2 } from "./components/Button.style"
import { Wrapper } from "./components/Wrapper.style"

function App() {

  return (
    <Wrapper>
      <Button
        backgroundColor="red"
        onClick={() => console.log("clicou")}>
        Sou um botão
      </Button>
      <Button backgroundColor="blue">Sou um botão</Button>
      <Button backgroundColor="green">Sou um botão</Button>
      <Button backgroundColor="yellow">Sou um botão</Button>
      <Button backgroundColor="white">Sou um botão</Button>
      <Button>Sou um botão</Button>
      <Button2>Button2</Button2>
      <a href="#">Clique Aqui</a>
    </Wrapper>
  )
}

export default App
