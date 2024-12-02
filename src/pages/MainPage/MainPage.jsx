import React, { useLayoutEffect } from 'react'
import Title from './components/Title'
import Navigation from './components/Navigation'
import Quote from './components/Quote'
import RightBottom from './components/RightBottom'
import GifFace from './components/GifFace'
import { Outlet } from 'react-router'
import { gsap } from 'gsap/gsap-core'



const MainPage = () => {

    return (
      <div className='relative w-[100vw] h-[100vh] bg-black outline outline-offset-[-30px] outline-3 outline-white p-[70px] text-white montserrat-font'>
        <Title />
        <Navigation />
        <Quote />
        <RightBottom />
        <Outlet />
        <GifFace />
      </div>
    )
}

export default MainPage