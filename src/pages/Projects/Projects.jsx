import React, { useState } from 'react'
import LeftSlider from './LeftSlider'
import RightDetail from './RightDetail'
import { projects } from '../../data/projects.js'





const Projects = () => {
    const [activeSlider, setActiveSlider] = useState(1)
    const [showDetail, setShowDetail] = useState(false)



    return (
        <div className='w-screen h-screen overflow-hidden top-0 left-0 absolute flex items-center py-[30px] z-40'>
            <LeftSlider projects={projects} activeSlider={activeSlider} setActiveSlider={setActiveSlider} setShowDetail={setShowDetail}/>
            <div className='h-full w-[2px] bg-white opacity-[0.2] ml-2 relative right-[40px]'></div>
            <RightDetail projects={projects} activeSlider={activeSlider} showDetail={showDetail} setShowDetail={setShowDetail}/>
        </div>
    )
}

export default Projects