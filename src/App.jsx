import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import MainPage from './pages/MainPage/MainPage'
import Home from './pages/Home/Home'
import MainLoadingPage from './pages/MainLoadingPage/MainLoadingPage'
import Gradient from './pages/Gradient/Gradient'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Projects from './pages/Projects/Projects'
import HireMe from './pages/HireMe/HireMe'
import { gsap } from 'gsap/gsap-core'

gsap.config({
  nullTargetWarn: false,
  force3D: true,
  autoSleep: true,
  autoKillThreshold: true
})

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
          <Route  path='/about' element={<About />} />
          <Route  path='/contacts' element={<Contacts />} />
          <Route  path='/projects' element={<Projects />} />
          <Route exac path='/hire-me' element={<HireMe />}/>
          {/* HERE WILL ROUTES: ABOUT, MAIN HOME, CONTACTS */}
          {/* ROUTE "PROJECTS" WILL BE IN A SEPERATE ROUTE */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
