import React from 'react'
import SingleLeftSlide from './SIngleLeftSlide'

const LeftSlider = ({projects, setActiveSlider}) => {
    const renderedSlides = projects.map(project => <SingleLeftSlide setActiveSlider={setActiveSlider} key={project.id} {...project}/>)
    return (
        <div className='w-[47%] h-[100%] flex flex-col gap-16 overflow-y-scroll scroll-smooth items-end no-scrollbar pr-16 flex-shrink-0 '>
            { renderedSlides }
        </div>
    )
}

export default LeftSlider