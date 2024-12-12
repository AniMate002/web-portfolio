import React, { useLayoutEffect, useState } from 'react'
import ReactCurvedText from 'react-curved-text';
import { gsap } from 'gsap/gsap-core';

const CurvedText = () => {
    return (
        <ReactCurvedText 
            width={600}
            height={600}
            cx={300}
            cy={300}
            rx={250}
            ry={250}
            startOffset={60}
            reversed={true}
            text={` HIRE ME `.repeat(10)}
            textProps={{ style: { fontSize: 24, fill: "white", wordSpacing: "20px" } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ style: {fill: "transparent", background: "transparent"}}}
        />
    )
}

const HireMe = () => {
    const [isSphereClicked, setIsSphereClicked] = useState(false)
    
    const rotation = gsap.timeline({})
    useLayoutEffect(() => {
        rotation.to("#hire-me-curved-text", {
            rotateX: "420deg",
            rotate: "400deg",
            repeat: -1,
            transformOrigin: "center",
            ease: "power4.inOut",
            duration: 8,
            yoyo: true,
            willChange: "transform"
        })
    }, [])

    useLayoutEffect(() => {
        if(isSphereClicked){
            const tm1 = gsap.timeline()
            tm1.to("#hire-me-curved-text", {
                scale: 0.6,
                opacity: 0,
                onComplete: () => gsap.set("#hire-me-curved-text", {display: "none"})
            }, "0")
            .to("#hire-me-sphere", {
                y: -150
            })
            .to(["#hire-me-number", "#hire-me-email"], {
                opacity: 1,
                stagger: 0.2
            })
        }else{
            gsap.set("#hire-me-curved-text", {display: "block"})
            const tm1 = gsap.timeline()
            tm1
            .to(["#hire-me-number", "#hire-me-email"], {
                opacity: 0
            })
            .to("#hire-me-sphere", {
                y: 0
            })
            .to("#hire-me-curved-text", {
                scale: 1,
                opacity: 1,
                onComplete: () => rotation.resume()
            }, "0")
            
        }
    }, [isSphereClicked])

    const handleSphereMouseEnter = () => {
        gsap.to("#hire-me-sphere", {
            scale: 1.2,
            ease: "power1.out"
        })

        gsap.to("#custom-cursor", {
            backgroundColor: "white",
            width: "30px",
            height: "30px"
        })
    }

    const handleSphereMouseLeave = () => {
        gsap.to("#hire-me-sphere", {
            scale: 1,
            ease: "power1.out"
        })

        gsap.to("#custom-cursor", {
            backgroundColor: "transparent",
            width: "20px",
            height: "20px"
        })
    }

    const handleClickSphere = () => {
        setIsSphereClicked(prev => !prev)
    }

    return (
        <div
            style={{ perspective: "800px" }}
            className='absolute left-0 top-0 w-screen h-screen flex items-center justify-center flex-col'>
            <img 
                id="hire-me-sphere"
                onClick={handleClickSphere}
                onMouseEnter={handleSphereMouseEnter}
                onMouseLeave={handleSphereMouseLeave}
                className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20'
                src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWt2N2UybHF6a3MxOXhwdXJjdG1ocWVqdmYwMTN2b3QybzUxYmptdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnHN9JLODvS1fr2/giphy.webp'/>
            <div 
                id="hire-me-curved-text"
                onClick={handleClickSphere}
                onMouseEnter={handleSphereMouseEnter}
                onMouseLeave={handleSphereMouseLeave}
                style={{
                    transform: "rotate3d(1, 0, 0, 45deg)",
                    textShadow: "0px -5px 100px white"
                }}
                className='relative z-30'>
                <CurvedText />
            </div>
            <p  className='absolute z-40 top-[56%]'>
                <p id='hire-me-number' className='opacity-0'><span className='opacity-[0.2]'>Call me:</span> <span className='opacity-[0.5]'>+48 451 188 044</span></p>
                <p id='hire-me-email' className='opacity-0'><span className='opacity-[0.2]'>Email:</span> <span className='opacity-[0.5]'>kirill1974111@gmail.com</span></p>
            </p>
            <p className='absolute w-screen bottom-[100px] text-center opacity-[0.5]'>Let’s build something extraordinary. Web-development, modern designs, and innovative solutions tailored just for you.</p>
        </div>
    )
}

export default HireMe