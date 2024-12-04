import React, { useLayoutEffect } from 'react'
import GirlImg from '../../images/girl.jpg'
import { gsap } from 'gsap/gsap-core'
import { PowerGlitch } from 'powerglitch'

export const HomePageTimeLine = gsap.timeline({delay: 3})
const Home = () => {
    useLayoutEffect(() => {
        PowerGlitch.glitch("#home-page-girl-face", {
            "timing": {
              "duration": 5000,
              "easing": "linear"
            },
            "glitchTimeSpan": {
              "start": 0.78,
              "end": 1
            }
          })
        HomePageTimeLine.to("#home-page-shader-gif", {opacity: 1})
        HomePageTimeLine.to("#home-page-girl-face", {opacity:1})
    }, [])

    return (
        <div className='text-white flex w-full items-center justify-center '>
            {/* <img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGpja2w4ZGEyem8weWswM2ZzeTlwemdrczY3YXZuM2h6cGF2cjY4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pVBIEA5xCCHk8hjkjq/giphy.webp'/> */}
            {/* <img className='border-4' src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGQ2dzF3NXJ1dHI2bXg1eXZ2enB5Znl4aWNlbWp3eXg5bnd4bnJkYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TlK63EpVc0XRNp8L0qc/giphy.webp'/> */}
            <img id='home-page-shader-gif' className='absolute top-0 h-full p-[30px] opacity-0' src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm90ajh1bm41Nnpwd2V1MTg0NW5hZ2IyOTl1M3MwaGx1d3djOHR6byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T5tnw3xsSagXhUrSKD/giphy.gif'/>
            <img id='home-page-girl-face' src={GirlImg} className='w-[300px] mt-[-20vh] opacity-0 border-4 border-white'/>
        </div>
    )
}

export default Home