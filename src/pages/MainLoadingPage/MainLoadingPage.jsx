import React, { useLayoutEffect } from 'react'
import { PowerGlitch } from 'powerglitch'
import { gsap } from "gsap";
import { useLocation } from 'react-router';


export const showLoadingPage= (callbackFn) => {
    gsap.set("#fading-name-loading", { opacity: 1});
    gsap.set("#main-loading-page", {display: "flex"})
    gsap.to("#main-loading-page", {opacity: 1, duration: 1, onComplete: () => callbackFn()})
    
}

const MainLoadingPage = () => {
    const location = useLocation()
    
    useLayoutEffect(() => {
        PowerGlitch.glitch("#glitch-production-loading")
        // gsap.set("#main-loading-page", { display: "flex", opacity: 1});
        let tm1 = gsap.timeline({delay: 1})
        tm1.to("#fading-name-loading", {opacity: 0, duration: 1})
        tm1.to("#main-loading-page", {opacity:0, duration: 1})
        tm1.set("#main-loading-page", {display: "none"})
    }, [location.pathname])

    return (
        <div id='main-loading-page' className='w-[100vw] h-[100vh] z-[100] bg-gradient-to-br from-[#0D0D0D] to-[#0d0c0d] absolute flex items-center justify-center'>
            {/* <img className='w-[200px]' src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTdxMWhoZm5ncHA1NGl2ZjgzOGJ0NjNoc2IwbWZ5NHd4YWM5Zms2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/38xX65HgCGMPpZMTyc/giphy.webp'/> */}
            <p className='text-slate-600 oswald-font text-xl'><span id='fading-name-loading'>Kiryl Shauchenka</span> <span id='glitch-production-loading' className='text-slate-500'>Production</span></p>
        </div>
    )
}

export default MainLoadingPage