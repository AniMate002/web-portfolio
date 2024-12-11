import React from 'react'
import { NavLink } from 'react-router'
import { gsap } from 'gsap/gsap-core'

const Contacts = () => {
    
    const handleNavLinkMouseEnter = (e) => {
        if(e.target.innerText == "EMAIL"){
            gsap.to(e.target, {
                innerText: "kirill1974111@gmail.com",
                duration: 0.2
            })
        }
        gsap.to(e.target, {
            opacity: 1,
            scale: 1.1
        })

        gsap.to("#custom-cursor", {
            opacity: 0,
            scale: 2,
            duration: 0.2
        })
    }
    const handleNavLinkMouseLeave = (e) => {
        if(e.target.innerText == "kirill1974111@gmail.com"){
            gsap.to(e.target, {
                innerText: "EMAIL",
                duration: 0.1
            })
        }
        gsap.to(e.target, {
            opacity: 0.3,
            scale: 1
        })
        gsap.to("#custom-cursor", {
            opacity: 1,
            duration: 0.2,
            scale: 1
        })
    }

    return (
        <div className='absolute w-screen h-screen overflow-hidden top-0 left-0 flex items-center justify-center'>
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjd6MHV1emVzNWlidWQ5a3A5bXVkNTNycXBramg0NWdzcGJ4ZjM4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SNeZeuwlDrryu152pH/giphy.webp" />
            
            <div className='absolute bottom-[100px] flex gap-8'>
                <NavLink onMouseEnter={handleNavLinkMouseEnter} onMouseLeave={handleNavLinkMouseLeave} className="opacity-[0.3] h-[50px] flex items-center justify-center" target='_blank' to={"https://github.com/AniMate002"}>
                    GITHUB
                </NavLink>
                <NavLink onMouseEnter={handleNavLinkMouseEnter} onMouseLeave={handleNavLinkMouseLeave} className="opacity-[0.3] h-[50px] flex items-center justify-center" target='_blank' to={"https://www.linkedin.com/in/kirill-shauchenka-356802296/"}>
                    LINKEDIN
                </NavLink>
                <NavLink onMouseEnter={handleNavLinkMouseEnter} onMouseLeave={handleNavLinkMouseLeave} className="opacity-[0.3] h-[50px] flex items-center justify-center" target='_blank' to={"https://t.me/soda_lakerino_002"}>
                    TELEGRAM
                </NavLink>
                <p onMouseEnter={handleNavLinkMouseEnter} onMouseLeave={handleNavLinkMouseLeave} className="opacity-[0.3] h-[50px] flex items-center justify-center" >
                    EMAIL
                </p>
            </div>

        </div>
    )
}

export default Contacts