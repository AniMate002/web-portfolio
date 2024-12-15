import React, { useLayoutEffect } from 'react'
import Title from './components/Title'
import Navigation from './components/Navigation'
import Quote from './components/Quote'
import RightBottom from './components/RightBottom'
import GifFace from './components/GifFace'
import { Outlet } from 'react-router'
import { gsap } from 'gsap/gsap-core'
import BlurryCursor from './Cursor'



const MainPage = () => {

    return (
      <div className='relative w-[100vw] h-[100vh] bg-black outline md:outline-offset-[-30px] outline-offset-[-10px] outline-3 outline-white p-[20px] md:p-[70px] text-white montserrat-font'>
        <Title />
        <Navigation />
        <Quote />
        <RightBottom />
        <Outlet />
        <GifFace />
        <BlurryCursor />
      </div>
    )
}

export default MainPage