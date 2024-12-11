import React, { useState } from 'react'
import LeftSlider from './LeftSlider'
import iecho from '../../images/projects/iecho.png'
import lueur from '../../images/projects/lueur.png'
import nova_plus from '../../images/projects/nova_plus.png'
import snap_fiesta from '../../images/projects/snap_fiesta.png'
import tech_lane_admin from '../../images/projects/tech_lane_admin.png'
import tuff_shop from '../../images/projects/tuff_shop.png'
import whisper_wire from '../../images/projects/whisper_wire.png'
import RightDetail from './RightDetail'





const Projects = () => {
    const [activeSlider, setActiveSlider] = useState(1)

    const projects = [
        {
            id: 1, 
            image: iecho,
            name: "iecho-ui-kit",
            link: "https://iecho-ui-kit.vercel.app/?path=/story/button--default"
        },
        {
            id: 2, 
            image: lueur,
            name: "Lueur",
            link: "https://lueur-production.up.railway.app/"
        },
        {
            id: 3, 
            image: nova_plus,
            name: "nova_plus",
            link: "https://nova-pulse.vercel.app/"
        },
        {
            id: 4, 
            image: snap_fiesta,
            name: "snap fiesta",
            link: "https://snap-fiesta.vercel.app/"
        },
        {
            id: 5, 
            image: tech_lane_admin,
            name: "tech lane admin",
            link: "https://tech-lane-admin-63n8-git-deploy-kiryls-projects-b85ee3fe.vercel.app/"
        },
        {
            id: 6, 
            image: tuff_shop,
            name: "tuff shop",
            link: "https://happy-shop-mu.vercel.app/"
        },
        {
            id: 7, 
            image: whisper_wire,
            name: "whisper wire",
            link: "https://whisper-wire-production.up.railway.app/login"
        }
    ]


    return (
        <div className='w-screen h-screen overflow-hidden top-0 left-0 absolute flex items-center py-[30px] z-40'>
            <LeftSlider projects={projects} activeSlider={activeSlider} setActiveSlider={setActiveSlider}/>
            <div className='h-full w-[2px] bg-white opacity-[0.2] ml-2 relative right-[40px]'></div>
            <RightDetail projects={projects} activeSlider={activeSlider}/>
        </div>
    )
}

export default Projects