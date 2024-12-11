import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import { Link } from 'react-router';

const RightDetail = ({ projects, activeSlider }) => {

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

    return (
        <div className='flex-grow w-full h-full'>
            <p className='uppercase tracking-widest mt-[12px]'>PROJECTS</p>
            <p className='uppercase oswald-font tracking-widest text-sm opacity-[0.5]'>{projects.length} items</p>

            <div style={{ perspective: "800px" }} className='flex items-center justify-center w-full mt-[50px]'>
                <p
                    id="projects-right-name"
                    style={{
                        transform: "rotate3d(0, 1, 0, 40deg)",
                        textShadow: "-19px 5px 100px white"
                    }}
                    className='relative z-40 w-[20%] flex-shrink-0 text-4xl ubuntu-bold uppercase'
                ></p>
                <div className='flex items-center justify-center w-[900px] h-[500px] relative z-30 ml-[-200px]'
                    style={{
                        transform: "rotate3d(0, 1, 0, -20deg)",
                    }}
                >
                    <div style={{backgroundColor: "rgba(47, 47, 47, 0.3)"}} className='absolute left-0 top-0 w-full h-full'>
                        <button className='uppercase flex items-center justify-center opacity-[0.3] bg-[#2F2F2F] rounded-xl w-[100px] h-[40px] absolute bottom-[-80px] left-[43%] translate-x-[-50%]'>info</button>
                        <Link target='_blank' to={projects[activeSlider - 1].link} className='uppercase flex items-center justify-center opacity-[0.3] bg-[#2F2F2F] rounded-xl w-[100px] h-[40px] absolute bottom-[-80px] left-[56%] translate-x-[-50%]'>visit</Link>
                    </div>
                    <img className='w-[750px]' src={projects[activeSlider - 1].image} />
                </div>
            </div>

            <div style={{ perspective: "800px" }} className='w-full flex items-center justify-center'>
                    
            </div>
        </div>
    );
}

export default RightDetail;
