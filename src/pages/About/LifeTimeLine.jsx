import React from 'react'
import { gsap } from 'gsap/gsap-core'

export const showLifeTimeLine = () => {
    const tm1 = gsap.timeline()
    tm1.set("#about-life-time-line-container", {
        display: "block"
    }, "0")
    .to("#about-life-time-line", {
        width: "100%",
        duration: 1
    }, "0")
    .to("#about-life-time-breakpoints", {
        opacity: 1
    }, "1")
    .to("#about-life-time-more-to-come", {
        opacity: 1
    }, "5")

    for(let i = 0; i <= 4; i++){
        tm1.to(`.about-life-time-dot-${i}`, {
            opacity: 1
        }, `1.${i + 2}0`)
    }

    for(let i = 0; i <= 3; i++){
        tm1.to(`.about-life-time-year-${i}`, {
            opacity: 1
        }, `1.${i + 20}0`)
    }
    for(let i = 0; i <= 3; i++){
        tm1.to(`.about-life-time-info-${i}`, {
            opacity: 1
        }, `2.${i + 20}0`)
    }
    for(let i = 0; i <= 3; i++){
        tm1.to(`.about-life-time-vertical-line-${i}`, {
            height: "100px"
        }, `3.${i + 20}0`)
    }

    for(let i = 0; i <= 3; i++){
        tm1.to(`.about-life-time-vertical-info-${i}`, {
            opacity: 1
        }, `4.${i + 20}0`)
    }
} 

const LifeTimeLine = () => {
  return (
    <div id='about-life-time-line-container' className='w-[55%] relative mt-48 hidden opacity-[0.5]'>
        <div id='about-life-time-line' className='w-[0%] bg-[#c0c0c0] h-[2px] flex items-center'>
            <div className='about-life-time-dot about-life-time-dot-0 rounded-full block w-[10px] h-[10px] opacity-0 bg-[#cacaca]'></div>
            <div className='about-life-time-dot about-life-time-dot-1 rounded-full block w-[10px] h-[10px] opacity-0 bg-[#cacaca] ml-[15%]'></div>
            <div className='about-life-time-dot about-life-time-dot-2 rounded-full block w-[10px] h-[10px] opacity-0 bg-[#cacaca] ml-[25%]'></div>
            <div className='about-life-time-dot about-life-time-dot-3 rounded-full block w-[10px] h-[10px] opacity-0 bg-[#cacaca] ml-[12%]'></div>
        </div>
        <div id='about-life-time-breakpoints' className='absolute w-full h-[100px] top-[50%] translate-y-[-50%] flex items-center text-[#b1b1b1]'>
            <div className='ml-[0%] uppercase'>
                <p className='about-life-time-info about-life-time-info-0 opacity-0'>BORN</p>
                <p className='about-life-time-year about-life-time-year-0 opacity-0 mt-12'>2004</p>
            </div>
            <div className='ml-[11%] uppercase '>
                <p className='about-life-time-info about-life-time-info-1 opacity-0'>PRIMARY SCHOOL</p>
                <p className='mt-12 about-life-time-year about-life-time-year-1'>2011</p>
            </div>
            <div className='ml-[4%] mt-[90px] uppercase '>
                <p className='about-life-time-vertical-line about-life-time-vertical-line-0 h-[0px] w-[2px] bg-[#c0c0c0]'></p>
                <p className='about-life-time-vertical-info about-life-time-vertical-info-0 w-[20px] text-sm opacity-0'>FIRST ATTEMPS MAKING WEBSITES</p>
            </div>
            <div className='ml-[6%] uppercase '>
                <p className='about-life-time-info about-life-time-info-2 opacity-0'>GRADUATED</p>
                <p className='about-life-time-year about-life-time-year-2 opacity-0 mt-12'>2022</p>
            </div>
            <div className='ml-[4%] uppercase '>
                <p className='about-life-time-year about-life-time-year-3 opacity-0'>2023</p>
                <p className='about-life-time-info about-life-time-info-3 mt-11 opacity-0'>University</p>
            </div>
            <div className='ml-[4%] mt-[90px] uppercase '>
                <p className='about-life-time-vertical-line about-life-time-vertical-line-1 h-[0px] w-[2px] bg-[#c0c0c0]'></p>
                <p className='about-life-time-vertical-info about-life-time-vertical-info-1 w-[20px] text-sm opacity-0'>serious full-stack projects</p>
            </div>
            <div id='about-life-time-more-to-come' className='ml-auto uppercase opacity-0'>
                <p className='opacity-1'>20..</p>
                <p className='mt-11 opacity-1 w-[100px] text-sm h-[20px]'>more to come</p>
            </div>
        </div>
    </div>
  )
}

export default LifeTimeLine