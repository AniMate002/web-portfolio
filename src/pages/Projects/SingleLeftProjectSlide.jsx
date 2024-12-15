import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap/gsap-core';

const SingleLeftProjectSlide = ({ id, image, name, type, setActiveSlider, setShowDetail }) => {
  const slideRef = useRef();

  useLayoutEffect(() => {
    gsap.set(slideRef.current, {
      filter: "blur(100px) grayscale(100%)",
    });

    gsap.to(slideRef.current, {
      filter: "blur(0px) grayscale(100%)", 
      duration: 1,
      ease: "power2.out",
    }, 3);
  }, []);

  const handleSlideMouseEnter = () => {

    setActiveSlider(id)

    gsap.to(slideRef.current, {
        filter: "grayscale(0%)",
        duration: 0.3,
        ease: "power2.inOut",
        scale: 1.05
    })

    gsap.to("#custom-cursor", {
      backgroundColor: "grey",
      width: "30px",
      height: "30px"
    })

  }

  const handleSlideMouseLeave = () => {
    gsap.to(slideRef.current, {
        filter: "grayscale(100%)",
        duration: 0.3,
        ease: "power2.inOut",
        scale: 1
    })

    gsap.to("#custom-cursor", {
      backgroundColor: "transparent",
      width: "20px",
      height: "20px"
    })

  }

  const hadleSliderClick = () => {
    setShowDetail(prev => !prev)
  }

  return (
    <div 
        onClick={hadleSliderClick}
        onMouseEnter={handleSlideMouseEnter} 
        onMouseLeave={handleSlideMouseLeave} 
        ref={slideRef} 
        className="flex items-end flex-col py-4 "
    >
      <div className="flex items-start sm:gap-4 gap-2">
        <p className="uppercase opacity-[0.5] sm:text-base text-sm">#0{id}</p>
        <img src={image} className="xl:w-[230px] sm:w-[300px] w-[100px] custom-shadow 2xl:w-[320px]" />
      </div>
      <p className="mt-2 uppercase opacity-[0.5] sm:text-base text-sm">{name}</p>
      <p className='sm:text-sm text-[10px] opacity-[1]'>#{type}</p>
    </div>
  );
};

export default SingleLeftProjectSlide;
