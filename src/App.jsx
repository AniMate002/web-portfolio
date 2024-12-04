import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import MainPage from './pages/MainPage/MainPage'
import Home from './pages/Home/Home'
import MainLoadingPage from './pages/MainLoadingPage/MainLoadingPage'
import Gradient from './pages/Gradient/Gradient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainLoadingPage />
    <Gradient />
      <Routes>
        <Route path='/' element={<MainPage />}> //THIS IS LIKE AN INTERFACE
          <Route index element={<Home />}/>
          {/* HERE WILL ROUTES: ABOUT, MAIN HOME, CONTACTS */}
          {/* ROUTE "PROJECTS" WILL BE IN A SEPERATE ROUTE */}
        </Route>
      </Routes>
    </>
  )
}

export default App
