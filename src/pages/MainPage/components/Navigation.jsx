import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import { NavLink, useLocation, useNavigate } from 'react-router'
import { PowerGlitch } from 'powerglitch'





const Navigation = () => {
  const NavAppearTimeLine = gsap.timeline({delay: 3, repeat: 0})
  const navigate = useNavigate()
  const location = useLocation()




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

  const handleNavigationMouseEneter = (e) => {
    const rect = e.target.getBoundingClientRect();
    gsap.to("#custom-cursor", {
      borderRadius: "10px",
      width: `${rect.width + 40}px`, // Устанавливаем ширину на основе размеров элемента
      height: "70px",
      duration: 0.1,
      backgroundColor: "#E3E3E3"
    });
  
    gsap.to(e.target, {
      opacity: 1,
    });
  };

  const handleNavigationMouseLeave = (e) => {
    gsap.to("#custom-cursor", {
      borderRadius: "100%",
      backgroundColor: "transparent",
      width: "20px",
      height: "20px",
      duration: 0.1,
    })
    if(!e.target.className.includes("nav-btn-2")){
      gsap.to(e.target, {
        opacity: 0.2
      })
    }
  }

  const handleNavigate = (to) => {
    gsap.to("#custom-cursor", {
      width:"200vw",
      height: "200vh",
      duration: 0.5,
      opacity: 1,
      onComplete: () => {
        navigate(to)
        gsap.to("#custom-cursor", {
          width: "30px",
          height: "30px",
          duration: 0,
        })
      }
    })
  
  }



  return (
    // <div className='flex flex-col gap-2 items-start mt-14'>
    //     <button className='font-bold tracking-tighter text-sm'>Home</button>
    //     <button className='font-bold tracking-tighter text-sm'>About</button>
    //     <button className='font-bold tracking-tighter text-sm'>Projects</button>
    //     <button className='font-bold tracking-tighter text-sm'>Contacts</button>
    //     <button className='font-bold tracking-tighter text-sm'>Hire me</button>
    // </div>

    <div className='w-[600px] mt-40 oswald-font text-5xl relative z-50'>
      {/* <h2>{location.pathname}</h2> */}
        <button onMouseEnter={handleNavigationMouseEneter} onMouseLeave={handleNavigationMouseLeave} className='nav-btn cursor-none nav-btn-0 relative z-30 uppercase block text-left w-fit  opacity-[0.2]'>hire me</button>
        <button onMouseEnter={handleNavigationMouseEneter} onMouseLeave={handleNavigationMouseLeave} className='nav-btn cursor-none nav-btn-1 relative z-30 uppercase block text-left w-fit  opacity-[0.2]'>contacts</button>
        <button onClick={() => handleNavigate("/")} onMouseEnter={handleNavigationMouseEneter} onMouseLeave={handleNavigationMouseLeave} className={`nav-btn cursor-none nav-btn-1 relative z-30 uppercase block text-left w-fit  opacity-[0.2]`}>/home</button>
        <button onClick={() => handleNavigate("/about")} onMouseEnter={handleNavigationMouseEneter} onMouseLeave={handleNavigationMouseLeave}  className='nav-btn cursor-none nav-btn-3 relative z-30 uppercase block text-left w-fit  opacity-[0.2]'>about</button>
        <button onMouseEnter={handleNavigationMouseEneter} onMouseLeave={handleNavigationMouseLeave} className='nav-btn cursor-none nav-btn-4 relative z-30 uppercase block text-left w-fit  opacity-[0.2]'>projects</button>

        {/* <div className='absolute top-1/2 left-[-40px] w-[200px] h-[50px] bg-white blur-xl z-[0] opacity-[0.5]'></div> */}

    </div>
  )
}

export default Navigation