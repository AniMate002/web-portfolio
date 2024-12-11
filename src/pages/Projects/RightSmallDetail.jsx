import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import { Link } from 'react-router';
import { animateButtonHoverOpacity, animateButtonMouseLeaveOpacity } from './RightDetail';





const RightSmallDetail = ({projects, activeSlider, setShowDetail, showDetail}) => {


        // SHOWING TEXT TRANSITION AFTER CHANGING SLIDE
    useLayoutEffect(() => {
        const targetElement = document.getElementById("projects-right-name");
        const text = projects[activeSlider - 1].name;

        targetElement.innerHTML = text.split('').map((char, index) => `<span key=${index} style="opacity: 0">${char}</span>`).join('');

        gsap.to(targetElement.children, {
            opacity: 1,  
            stagger: 0.1, 
            duration: 0.5,  
            ease: "power3.out", 
        });

    }, [activeSlider, projects]);

    // ANIMATION OF THE ANIMATION AFTER CLICKING INFO
    useLayoutEffect(() => {
        const tm1 = gsap.timeline()
        if(showDetail){
            tm1.to("#projects-right-image-container", {
                transform: "rotate3d(0, 0, 0, -20deg)",
                width: "700px",
                height: "350px",
            }, "0")
            .to("#projects-right-image", {
                width: "550px"
            }, "0")
            .to("#projects-right-name", {
                opacity: 0,
            }, "0")
            .to(["#projects-info-button", "#projects-visit-button"], {
                opacity: 0,
                display: "none"
            })
        }else{
            tm1.to("#projects-right-image-container", {
                transform: "rotate3d(0, 1, 0, -20deg)",
                width: "900px", 
                height: "500px", 
            }, "0")
            .to("#projects-right-image", {
                width: "750px"
            }, "0")
            .to("#projects-right-name", {
                opacity: 1,
            }, "0")
            .to(["#projects-info-button", "#projects-visit-button"], {
                opacity: 0.3,
                display: "flex"
            });
        }
    }, [showDetail])

    const handleClickInfo = () => {
        setShowDetail(true)
    }
  return (
    <div id='projects-right-info-container' style={{ perspective: "800px" }} className='flex flex-row items-center justify-center w-full mt-[50px]'>
        {/* RIGHT TEXT */}
        <p
            id="projects-right-name"
            style={{
                transform: "rotate3d(0, 1, 0, 40deg)",
                textShadow: "0px -5px 100px white"
            }}
            className='relative z-40 w-[20%] flex-shrink-0 text-4xl ubuntu-bold uppercase'
        ></p>

        {/* RIGHT IMAGE */}
        <div
            id="projects-right-image-container" 
            className='flex items-center justify-center w-[900px] h-[500px] relative z-30 ml-[-200px]'
            style={{
                transform: "rotate3d(0, 1, 0, -20deg)",
            }}
        >
            <div style={{backgroundColor: "rgba(47, 47, 47, 0.3)"}} className='absolute left-0 top-0 w-full h-full'>
                <button
                    onMouseEnter={animateButtonHoverOpacity}
                    onMouseLeave={animateButtonMouseLeaveOpacity}
                    id='projects-info-button'
                    onClick={handleClickInfo}
                    className='uppercase flex items-center justify-center opacity-[0.3] bg-[#2F2F2F] rounded-xl w-[100px] h-[40px] absolute bottom-[-80px] left-[43%] translate-x-[-50%]'>info</button>
                <Link
                    onMouseEnter={animateButtonHoverOpacity}
                    onMouseLeave={animateButtonMouseLeaveOpacity}
                    id='projects-visit-button'
                    target='_blank' 
                    to={projects[activeSlider - 1].link} 
                    className='uppercase flex items-center justify-center opacity-[0.3] bg-[#2F2F2F] rounded-xl w-[100px] h-[40px] absolute bottom-[-80px] left-[56%] translate-x-[-50%]'>visit</Link>
            </div>
            <img id='projects-right-image' className='w-[750px]' src={projects[activeSlider - 1].image} />
        </div>
    </div>
  )
}

export default RightSmallDetail