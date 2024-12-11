import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import { Link } from 'react-router'
import { animateButtonHoverOpacity, animateButtonMouseLeaveOpacity } from './RightDetail'


const RightFullDetail = ({activeProject, showDetail, setShowDetail}) => {

    const renderedTechnologies = activeProject.technologies.map((technology, index) => <span className='text-sm' key={index}>{technology}</span>)
    const renderedDescription = activeProject.description.map((paragraph, index) => <p key={index + 34}>{paragraph}</p>)


    useLayoutEffect(() => {
        if(showDetail){
            gsap.set("#full-detail-container", {display: "block"})
            const tm1 = gsap.timeline()
            tm1.to("#full-detail-codename", {
                opacity: 1
            }, "0.5")
            .to("#full-detail-type", {
                opacity: 1
            }, "0.6")
            .to("#full-detail-technologies", {
                opacity: 1
            }, "0.7")
            .to("#full-detail-buttons", {
                opacity: 1
            }, "0.8")
            .to("#full-detail-description", {
                opacity: 0.8
            }, "0.9")
        }else{
            const tm1 = gsap.timeline()
            tm1.to(["#full-detail-codename", "#full-detail-type", "#full-detail-technologies", "#full-detail-buttons", "#full-detail-description"], {
                opacity: 0,
                onComplete: () => {
                    gsap.set("#full-detail-container", {display: "none"})
                }
            }, "0")
        }
    }, [showDetail])

    return (
        <div id='full-detail-container' className='mt-8 w-[700px] mx-auto hidden'>
                <p id='full-detail-codename' className='w-fit block uppercase opacity-0'><span className='opacity-[0.2]'>codename:</span> {activeProject.name}</p>
                <p id='full-detail-type' className='w-fit block uppercase opacity-0'><span className='opacity-[0.2]'>type:</span> {activeProject.type}</p>
            <p id='full-detail-technologies' className='w-fit flex uppercase items-baseline gap-2 opacity-0'>
                <span className='opacity-[0.2]'>Technologies:</span>
                <div className='flex gap-2 flex-wrap'>
                    {renderedTechnologies}
                </div>
            </p>

            <div id='full-detail-buttons' className='flex items-center justify-start w-full gap-4 opacity-0'>
                <Link
                    onMouseEnter={animateButtonHoverOpacity}
                    onMouseLeave={animateButtonMouseLeaveOpacity}
                    target='_blank' 
                    to={activeProject.link} 
                    className='uppercase flex items-center justify-center opacity-[0.3] bg-[#2F2F2F] rounded-xl w-[100px] mx-auto mt-2 h-[40px] '>visit</Link>
                <button
                    onClick={() => setShowDetail(false)}
                    onMouseEnter={animateButtonHoverOpacity}
                    onMouseLeave={animateButtonMouseLeaveOpacity}
                    className='uppercase flex items-center justify-center opacity-[0.3] bg-[#2F2F2F] rounded-xl w-[100px] mx-auto mt-2 h-[40px] '>return</button>

            </div>
            <p id='full-detail-description' className='flex flex-col gap-4 text-sm mt-4 opacity-[0]'>
                {renderedDescription}
            </p>
        </div>
    )
}

export default RightFullDetail