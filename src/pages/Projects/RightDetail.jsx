import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import { Link } from 'react-router';
import RightSmallDetail from './RightSmallDetail';
import RightFullDetail from './RightFullDetail';

export const animateButtonHoverOpacity = (e) => {
    gsap.to(e.target, {
        opacity: 0.8,
        scale: 1.05,
        ease: "power1.out",
    })

    gsap.to("#custom-cursor", {
        opacity: 0,
        scale: 2,
        ease: "power1.out"
    })
}

export const animateButtonMouseLeaveOpacity = (e) => {
    gsap.to(e.target, {
        opacity: 0.3,
        scale: 1,
        ease: "power1.out"
    })

    gsap.to("#custom-cursor", {
        opacity: 1,
        scale: 1,
        ease: "power1.out"
    })
}

const RightDetail = ({ projects, activeSlider, showDetail, setShowDetail }) => {

    


    const activeProject = projects[activeSlider - 1]

    return (
        <div className='flex-grow w-full h-full overflow-y-auto pb-4 overflow-x-clip no-scrollbar hidden xl:block'>
            <p className='uppercase tracking-widest mt-[12px]'>PROJECTS</p>
            <p className='uppercase oswald-font tracking-widest text-sm opacity-[0.5]'>{projects.length} items</p>

                <RightSmallDetail projects={projects} activeSlider={activeSlider} setShowDetail={setShowDetail} showDetail={showDetail}/>
                <RightFullDetail activeProject={activeProject} showDetail={showDetail} setShowDetail={setShowDetail}/>

        </div>
    );
}

export default RightDetail;
