import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'

function App() {
  let Component
  switch(window.location.pathname) {
    case '/':
      Component = Home
      break
    case '/about':
      Component = About
      break
    case '/profile':
      Component = Profile
      break
  }

  return (
    <>
   <Navbar />
   <Component />
    </>
  )
}

export default App
