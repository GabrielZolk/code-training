import { ChildrenOne } from './components/ChildrenOne'
import { ChildrenTwo } from './components/ChildrenTwo'
import { AppProvider } from './context/AppProvider'
import './App.css'



export function App() {

  return (
    <AppProvider>
      <ChildrenOne />
      <ChildrenTwo />
    </AppProvider>
  )
}





export default App



