import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useLocation, useNavigate } from 'react-router';
import { PowerGlitch } from 'powerglitch';
import { showLoadingPage } from '../../MainLoadingPage/MainLoadingPage';

const Navigation = () => {
  const NavAppearTimeLine = gsap.timeline({ delay: 3, repeat: 0 });
  const navigate = useNavigate();
  const location = useLocation();

  const normalizeNavString = target => "/" + target.innerText.replace(" ", "-").trim().toLowerCase().replace("home", "")

  useLayoutEffect(() => {
    PowerGlitch.glitch('.nav-btn', {
      playMode: 'hover',
    });

    for (let i = 0; i <= 4; i++) {
      NavAppearTimeLine.fromTo(
        `.nav-btn-${i}`,
        { marginLeft: '-300px' },
        {
          marginLeft: 0,
          duration: 0.6,
          ease: 'power1.inOut',
        },
        `-=${0.5}`
      );
    }
  }, []);

  useEffect(() => {
    for(let i = 0; i <= 4; i++){
      const currNav = document.querySelector(`.nav-btn-${i}`)
      if(isActive(normalizeNavString(currNav))){
        gsap.set(currNav, {opacity: 1})
      }else{
        gsap.set(currNav, { opacity: 0.2})
      }
    }
  }, [location.pathname])

  const handleNavigationMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    gsap.to('#custom-cursor', {
      borderRadius: '10px',
      width: `${rect.width + 40}px`,
      height: '70px',
      duration: 0.1,
      backgroundColor: '#E3E3E3',
    });

    gsap.to(e.target, {
      opacity: 1,
    });
  };

  const handleNavigationMouseLeave = (e) => {
    gsap.to('#custom-cursor', {
      borderRadius: '100%',
      backgroundColor: 'transparent',
      width: '20px',
      height: '20px',
      duration: 0.1,
    });

    if (!isActive(normalizeNavString(e.target))) {
      // alert("/" + e.target.innerText.replace(" ", "-").trim().replace("home", "").toLowerCase())
      gsap.to(e.target, {
        opacity: 0.2,
      });
    }else{
      gsap.to(e.target, {
        opacity: 1,
      });
    }
  };

  const handleNavigate = (to) => {
    if (location.pathname !== to) showLoadingPage(() => navigate(to));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className=" md:mt-40 mt-10 oswald-font text-3xl md:text-5xl relative z-50 w-fit ">
      <button
        onMouseEnter={handleNavigationMouseEnter}
        onMouseLeave={handleNavigationMouseLeave}
        onClick={() => handleNavigate('/hire-me')}
        className={`nav-btn nav-btn-0 cursor-none relative z-30 uppercase block text-left w-fit ${
          isActive('/hire-me') ? 'opacity-[1]' : 'opacity-[0.2]'
        }`}
      >
        Hire Me
      </button>
      <button
        onMouseEnter={handleNavigationMouseEnter}
        onMouseLeave={handleNavigationMouseLeave}
        onClick={() => handleNavigate('/contacts')}
        className={`nav-btn nav-btn-1 cursor-none relative z-30 uppercase block text-left w-fit ${
          isActive('/contacts') ? 'opacity-[1]' : 'opacity-[0.2]'
        }`}
      >
        Contacts
      </button>
      <button
        onMouseEnter={handleNavigationMouseEnter}
        onMouseLeave={handleNavigationMouseLeave}
        onClick={() => handleNavigate('/')}
        className={`nav-btn nav-btn-2 cursor-none relative z-30 uppercase block text-left w-fit ${
          isActive('/') ? 'opacity-[1]' : 'opacity-[0.2]'
        }`}
      >
        Home
      </button>
      <button
        onMouseEnter={handleNavigationMouseEnter}
        onMouseLeave={handleNavigationMouseLeave}
        onClick={() => handleNavigate('/about')}
        className={`nav-btn nav-btn-3 cursor-none relative z-30 uppercase block text-left w-fit ${
          isActive('/about') ? 'opacity-[1]' : 'opacity-[0.2]'
        }`}
      >
        About
      </button>
      <button
        onMouseEnter={handleNavigationMouseEnter}
        onMouseLeave={handleNavigationMouseLeave}
        onClick={() => handleNavigate('/projects')}
        className={`nav-btn nav-btn-4 cursor-none relative z-30 uppercase block text-left w-fit ${
          isActive('/projects') ? 'opacity-[1]' : 'opacity-[0.2]'
        }`}
      >
        Projects
      </button>
    </div>
  );
};

export default Navigation;
