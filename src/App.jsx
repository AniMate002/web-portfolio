import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import MainPage from './pages/MainPage/MainPage'
import Home from './pages/Home/Home'
import MainLoadingPage from './pages/MainLoadingPage/MainLoadingPage'
import Gradient from './pages/Gradient/Gradient'

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
    <div className='select-none'>
    <MainLoadingPage />
    <Gradient />
      <Routes>
        <Route path='/' element={<MainPage />}> //THIS IS LIKE AN INTERFACE
          <Route index element={<Home />}/>
          {/* HERE WILL ROUTES: ABOUT, MAIN HOME, CONTACTS */}
          {/* ROUTE "PROJECTS" WILL BE IN A SEPERATE ROUTE */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
