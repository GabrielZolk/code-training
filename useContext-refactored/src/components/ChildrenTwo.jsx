import { useAppContext } from "../hook/useAppContext"


export function ChildrenTwo() {
    const { setName } = useAppContext()

    // const { setName } = useContext(AppContext) ---- (Use app const substituído pelo hook criado)
    return (
      <button onClick={() => setName('Carlinhos da Massa')}>Mude o Nome</button>
    )
  }