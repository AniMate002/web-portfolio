import React from 'react'
import { stats, stats_numbers } from '../../../data/stats'
import { gsap  } from 'gsap/gsap-core'
import { handleGirlMouseLeave } from '../Home'


const SingleStat = ({name, level}) => {
    const bars = Math.round(level / 2)
    const barsString = "|".repeat(bars)
    return (
        <div>
            <p className='opacity-[0.5]'>
                    {name}
                </p>
                <p>{barsString} {level}%</p>
        </div>
    )
}

const SingleStatNumbers = ({text}) => {
    return (
        <p className='pl-4 opacity-[0.5]'>{text}</p>
    )
}

const handleBlurCardMouseEnter = () => {
    gsap.to("#custom-cursor", {
        backgroundColor: "white",
        height: "30px",
        width: "30px",
        innerText: "-"
    })
}

const handleBlurCardMouseLeave = () => {
    gsap.to("#custom-cursor", {
        backgroundColor: "transparent",
        width: "20px",
        height: "20px",
        onComplete: () => gsap.set("#custom-cursor", { innerText: "+"})
    })
}


const handleBlurCardClick = (e) => {
    const tm1 = gsap.timeline()
    tm1.to("#home-page-girl-face", {zIndex: 50, duration: 0}, "0")
    handleGirlMouseLeave()
    tm1.to("#home-page-girl-face", {
    rotateY: "-=720",
    scale: 1,
    duration: 1.5,
    ease: "power4.out",
    opacity: 1,
    onComplete: () => {
        handleGirlMouseLeave()
    }
    }, "0.3")

    tm1.to("#home-girl-backside", {opacity: 0, display:"none", duration: 1.5, ease: "power4.out"}, "0")
}


const BlurCard = () => {

    const renderedStats = stats.map(stat => <SingleStat key={stat.id} {...stat}/>)
    const renderedStatsNumbers = stats_numbers.map(stat => <SingleStatNumbers key={stat.id} {...stat}/>)

    return (
        <div 
            onClick={handleBlurCardClick}
            onMouseEnter={handleBlurCardMouseEnter} 
            onMouseLeave={handleBlurCardMouseLeave}
            id='home-girl-backside' 
            className='absolute w-[450px] h-[540px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-54%] z-40 bg-[#1c1c1c] opacity-0 hidden'>

            <p className='p-4'><span className='opacity-[0.2]'>Common Stats:</span> Skills and Focus</p>
            <div className='px-4 flex flex-col gap-4'>
                { renderedStats }
            </div>

            <p className='px-4 mt-6 mb-2'><span className='opacity-[0.2]'>Unique Stats:</span> Only numbers</p>
            <div className='flex flex-col gap-2'>
                { renderedStatsNumbers }
            </div>
        </div>
    )
}

export default BlurCard