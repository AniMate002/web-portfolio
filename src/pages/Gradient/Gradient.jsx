import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const Gradient = () => {


  const animateRandomMovement = (elementId) => {
    gsap.to(`#${elementId}`, {
        duration: gsap.utils.random(4, 8),
        top: gsap.utils.random(5, 90) + "%",
        left: gsap.utils.random(5, 90) + "%",
        ease: "power1.inOut",
        width: gsap.utils.random(300, 500) + "px",
        height: gsap.utils.random(300, 500) + "px",
        onComplete: () => animateRandomMovement(elementId)
    })
  };

  useLayoutEffect(() => {
    animateRandomMovement("left-light");
    animateRandomMovement("left-bottom-light");
    animateRandomMovement("right-light");
  }, []);

  

  return (
    <div className="absolute z-[50] w-full h-full overflow-hidden pointer-events-none">
      <div
        id="left-light"
        className="absolute top-1/3 left-[15%] bg-gray-600 blur-3xl rounded-full opacity-[0.2] w-[500px] h-[400px]"
      ></div>
      <div
        id="left-bottom-light"
        className="absolute top-2/3 left-[20%] bg-gray-600 blur-3xl rounded-full opacity-[0.2] w-[200px] h-[200px]"
      ></div>
      <div
        id="right-light"
        className="absolute top-1/2 left-[70%] bg-gray-600 blur-3xl rounded-full opacity-[0.2] w-[400px] h-[300px]"
      ></div>
    </div>
  );
};

export default Gradient;
