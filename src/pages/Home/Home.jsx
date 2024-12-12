import React, { useLayoutEffect } from 'react'
import GirlImg from '../../images/girl.jpg'
import { gsap } from 'gsap/gsap-core'
import { PowerGlitch } from 'powerglitch'
import RunningLine from './components/RunningLine'
import BlurCard from './components/BlurCard'




export const handleGirlMouseLeave = () => {
  gsap.to("#custom-cursor", {
    borderRadius: "100%",
    backgroundColor: "transparent",
    width: "20px",
    height: "20px",
    duration: 0.1,
    innerText: "+",
  })
}



const HomePageTimeLine = gsap.timeline({delay: 3})
const Home = () => {
    useLayoutEffect(() => {
        // PowerGlitch.glitch("#home-page-girl-face", {
        //     "timing": {
        //       "duration": 5000,
        //       "easing": "linear"
        //     },
        //     "glitchTimeSpan": {
        //       "start": 0.78,
        //       "end": 1
        //     }
        //   })
        HomePageTimeLine.to("#home-page-shader-gif", {opacity: 1})
        HomePageTimeLine.to("#home-page-girl-face", {opacity:1})
    }, [])

    const handleGirlMouseEnter = () => {
      gsap.to("#custom-cursor", {
        borderRadius: 0,
        width: "300px",
        height: "340px",
        duration: 0.2,
        background: "white"
      })
    }

    const handleGirlClick = () => {
      // alert("Gt")
      const tm1 = gsap.timeline()
      tm1.to("#home-page-girl-face", {zIndex: 30, duration: 0}, "0")
      handleGirlMouseLeave()
      tm1.to("#home-page-girl-face", {
        rotateY: "+=720",
        scale: 1.5,
        duration: 1.5,
        ease: "power4.out",
        opacity: 0,
        onComplete: () => {
          
          // tm1.set("#home-girl-backside", {display:"block"})
        }
      }, "0")


      tm1.to("#home-girl-backside", {opacity: 1, display: "block", duration: 1.5, ease: "power4.out"}, "0.6")


    }

    return (
        <div className='text-white flex w-full items-center justify-center flex-col'>
            <img id='home-page-shader-gif' className='absolute z-20 top-0 h-full p-[30px] opacity-0' src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm90ajh1bm41Nnpwd2V1MTg0NW5hZ2IyOTl1M3MwaGx1d3djOHR6byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T5tnw3xsSagXhUrSKD/giphy.gif'/>
            <img onClick={handleGirlClick} onMouseEnter={handleGirlMouseEnter} onMouseLeave={handleGirlMouseLeave} id='home-page-girl-face' src={GirlImg} className='w-[300px] mt-[-20vh] opacity-0 border-4 border-white relative z-50'/>
            <div id='home-girl-backside' className='absolute w-[450px] h-[540px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-54%] z-40 bg-[#1c1c1c] opacity-0'></div>
            <RunningLine />
            <BlurCard />
        </div>
    )
}

export default Home