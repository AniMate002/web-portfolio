import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import { NavLink } from 'react-router'
import { PowerGlitch } from 'powerglitch'


export const NavAppearTimeLine = gsap.timeline({delay: 3, repeat: 0})
const Navigation = () => {


  useLayoutEffect(() => {
    PowerGlitch.glitch(".nav-btn", {
      playMode: "hover"
    })

    for (let i = 0; i <= 4; i++) {
      NavAppearTimeLine.fromTo(
        `.nav-btn-${i}`,
        { marginLeft: "-300px" },
        {
          marginLeft: 0,
          duration: 0.6,
          ease: "power1.inOut",
        },
        `-=${0.5}`
      );
    }
    
  }, [])

  return (
    // <div className='flex flex-col gap-2 items-start mt-14'>
    //     <button className='font-bold tracking-tighter text-sm'>Home</button>
    //     <button className='font-bold tracking-tighter text-sm'>About</button>
    //     <button className='font-bold tracking-tighter text-sm'>Projects</button>
    //     <button className='font-bold tracking-tighter text-sm'>Contacts</button>
    //     <button className='font-bold tracking-tighter text-sm'>Hire me</button>
    // </div>

    <div className='w-[600px] mt-40 oswald-font text-5xl relative'>
        <button className='nav-btn nav-btn-0 relative z-30 uppercase block text-left w-fit  opacity-[0.2]'>hire me</button>
        <button className='nav-btn nav-btn-1 relative z-30 uppercase block text-left w-fit  opacity-[0.2]'>contacts</button>
        <NavLink to={'/'} className={({isActive}) => `nav-btn nav-btn-2 relative z-30 w-fit uppercase opacity-[1] drop-shadow-2xl drop-shadow-white block ${isActive ? "text-white" : "text-white"}`}>/home</NavLink>
        <button className='nav-btn nav-btn-3 relative z-30 uppercase block text-left w-fit  opacity-[0.2]'>about</button>
        <button className='nav-btn nav-btn-4 relative z-30 uppercase block text-left w-fit  opacity-[0.2]'>projects</button>

        {/* <div className='absolute top-1/2 left-[-40px] w-[200px] h-[50px] bg-white blur-xl z-[0] opacity-[0.5]'></div> */}

    </div>
  )
}

export default Navigation