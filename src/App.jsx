import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import MainPage from './pages/MainPage/MainPage'
import Home from './pages/Home/Home'
import MainLoadingPage from './pages/MainLoadingPage/MainLoadingPage'
import Gradient from './pages/Gradient/Gradient'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Projects from './pages/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  const handleContectMenu = (e) => {
    e.preventDefault()
  }

  const handleCopy = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    document.addEventListener("contextmenu", handleContectMenu)
    document.addEventListener("copy", handleCopy)

    return () => {
      document.removeEventListener("contextmenu", handleContectMenu)
      document.removeEventListener("copy", handleCopy)
    }
  }, [])

  return (
    <div className='select-none overflow-hidden'>
    <MainLoadingPage />
    <Gradient />
      <Routes>
        <Route path='/' element={<MainPage />}> //THIS IS LIKE AN INTERFACE
          <Route index element={<Home />}/>
          <Route index path='/about' element={<About />} />
          <Route index path='/contacts' element={<Contacts />} />
          <Route index path='/projects' element={<Projects />} />
          {/* HERE WILL ROUTES: ABOUT, MAIN HOME, CONTACTS */}
          {/* ROUTE "PROJECTS" WILL BE IN A SEPERATE ROUTE */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
