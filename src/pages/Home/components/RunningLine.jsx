import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap/gsap-core'

const RunningLine = () => {
    useLayoutEffect(() => {
        gsap.fromTo("#running-line", {
            left: 0,
            duration: 0
        },
        {
           left: -250,
           duration: 3,
           ease: "none",
           repeat: -1 
        })
    }, [])
    return (
        <div className='w-screen px-[30px] mt-20 overflow-hidden '>
            <div className='w-full bg-white h-[4px]'></div>
            <div id='running-line' className='flex gap-14 uppercase text-xl items-center justify-start whitespace-nowrap relative'>
                {[...Array(12)].map(el => <span>h<span className='relative z-30'>ope n</span><span className='relative z-30'>e</span>wl<span className='relative z-30'>y</span> di<span className='relative z-30'>es</span></span>)}
            </div>
            <div className='w-full bg-white h-[4px]'></div>
        </div>
    )
}

export default RunningLine