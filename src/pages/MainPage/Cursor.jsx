import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function BlurryCursor({isActive}) {
    const mouse = useRef({x: 0, y: 0});
    const delayedMouse = useRef({x: 0, y: 0});
    const rafId = useRef(null);
    const circle = useRef();
    const size = isActive ? 400 : 20;
    
    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
    
        mouse.current = {
            x: clientX,
            y: clientY
        }
    }

    const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075)
        }

        moveCircle(delayedMouse.current.x, delayedMouse.current.y);
        
        rafId.current = window.requestAnimationFrame(animate);
    }

    const moveCircle = (x, y) => {
        gsap.set(circle.current, {x, y, xPercent: -50, yPercent: -50})
    }

    useEffect( () => {
        animate();
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.cancelAnimationFrame(rafId.current)
        }
    }, [isActive])

    return (
            <div id='custom-cursor'
                style={{
                    width: size,
                    height: size,
                    filter: `blur(${isActive ? 30 : 0}px)`,
                    transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`
                }}
                className='hidden xl:flex top-0 left-0 fixed z-[70] text-3xl rounded-full bg-transparent border-2 border-gray-500 mix-blend-difference pointer-events-none text-black items-center justify-center' 
                ref={circle}
            >+</div>
    )
}