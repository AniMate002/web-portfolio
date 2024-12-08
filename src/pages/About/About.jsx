import React, { useLayoutEffect } from "react";
import { gsap } from "gsap/gsap-core";
import LifeTimeLine, { showLifeTimeLine } from "./LifeTimeLine";

const About = () => {
    const floatingWordsArray = [
        {
            id: 0,
            word: "next js",
            top: 13,
            left: 30,
        },
        {
            id: 1,
            word: "scss",
            top: 16,
            left: 60,
        },
        {
            id: 2,
            word: "react",
            top: 35,
            left: 65,
        },
        {
            id: 3,
            word: "node js",
            top: 45,
            left: 75,
        },
        {
            id: 4,
            word: "express js",
            top: 60,
            left: 70,
        },
        {
            id: 5,
            word: "mysql",
            top: 80,
            left: 60,
        },
        {
            id: 6,
            word: "java",
            top: 80,
            left: 40,
        },
        {
            id: 7,
            word: "Three.js",
            top: 60,
            left: 30,
        },{
            id: 8,
            word: "SpringBoot",
            top: 40,
            left: 20,
        }
    ];

    const animateRandomMovement = (id) => {
        const newTop = gsap.utils.random(-100, 100) + "px";
        const newLeft = gsap.utils.random(-100, 100) + "px";

        gsap.to(`#floating-word-${id}`, {
            x: newLeft,
            y: newTop,
            duration: gsap.utils.random(1, 3),
            ease: "circ.inOut",
            onComplete: () => animateRandomMovement(id),
        });
    };

    useLayoutEffect(() => {
        for (let i = 0; i < floatingWordsArray.length; i++) {
            animateRandomMovement(i);
        }

        gsap.fromTo("#gif-spinning-head", 
            {
                scale: 1.1,
                duration: 0,
            },
            {
                scale: 1,
                duration: 0.2,
                ease: "bounce.out",
                repeat: -1,
                repeatDelay: 1,
            }
        )

        return () => {
            floatingWordsArray.forEach((word) => {
                gsap.killTweensOf(`#floating-word-${word.id}`);
            });
        };
    }, []);


    const handleGifFaceMouseEnter = () => {
        gsap.to("#custom-cursor", {
            backgroundColor: "#E3E3E3",
            width: "50px",
            height: "50px",
            duration: 0.3,
            onComplete: () => {
                // document.getElementById("custom-cursor").innerText = "+"
            }
        });
    };

    const handleGifFaceMouseLeave = () => {
        gsap.to("#custom-cursor", {
            backgroundColor: "transparent",
            width: "20px",
            height: "20px",
            duration: 0.3,
            onComplete: () => {
                // document.getElementById("custom-cursor").innerText = ""
            }
        });
    };


    const handleClickGifSpinningFace = () => {
        const tm1 = gsap.timeline()
        tm1.to("#gif-spinning-head", {
            x: -300,
            y: -50,
            width: 300
        }, "0")
        .to("#about-wawing-lines", {
            x: -400,
            y: -100,
            width: 300
        }, "0.2")
        .to("#about-about-word", {
            y: -100
        }, "0.1")
        .to(".about-floating-word", {
            // display: "none",
            opacity: 0.1,
            fontSize: "14px"
        }, "0.2")
        .to("#about-me-word", {
            y: -266,
            fontSize: "3.75rem",
            x: 120,
        }, "0.25")
        .to("#about-about-word-underline", {
            width: 300, 
            ease: "power1.inOut",
            duration: 0.5,
            onComplete: () => showLifeTimeLine()

        }, "0.3")
        .to("#about-main-text", {
            height: 300,
            ease: "power1.inOut",
            duration: 1
        }, "0.4")
        .to(".about-highlight-word", {
            color: "#e0e0e0"
        }, "1.4")
        .to("#about-short-main-text", {
            display: "none",
            opacity: 0,
        }, "0")
    } 

    return (
        <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] flex items-center justify-center flex-col h-screen z-40 w-[100%] overflow-hidden">
            <img
                id="about-wawing-lines"
                className="w-[550px]"
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnV2NGcyYXlndThsa3hrdDRzandjNGt6NDhuZzVwZ2FrZ2Y3cW56OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/idMwEqDdwBGS3XCXNa/giphy.webp"
            />
            <div className="absolute">
                <h2 
                    id="about-about-word"
                    className="uppercase text-6xl top-2 left-16 relative"
                >About
                <div 
                    id="about-about-word-underline"
                    className="absolute w-[0] -bottom-2 left-0 h-[3px] bg-white rounded-full opacity-[1]"></div>
                </h2>
                <img
                    onClick={handleClickGifSpinningFace}
                    onMouseEnter={handleGifFaceMouseEnter}
                    onMouseLeave={handleGifFaceMouseLeave}
                    id="gif-spinning-head"
                    className="w-[200px] relative -top-2 left-0"
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmNjb253NXd2b21qOTZ5d2luM2ozYnhoeDc0cmo1MGhyczRnc2piNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/38xX65HgCGMPpZMTyc/giphy.webp"
                />
                <p 
                    id="about-me-word"
                    className="uppercase text-4xl relative -top-44 left-44"
                >me</p>
                <p 
                    id="about-main-text"
                    className="w-[600px] h-[0px] overflow-y-auto absolute left-[60px] top-0 text-[#616161] no-scrollbar"
                    >
                    Hi, I’m Kiryl Shauchenka, a 20-year-old <span className="about-highlight-word">Full-Stack Developer</span> passionate about crafting dynamic and immersive web applications. With a strong foundation in both front-end and back-end development, I specialize in building scalable, efficient, and user-friendly solutions that bridge functionality with design.
                    <div className="m-10"></div>
                    I have hands-on experience with modern frameworks and technologies such as <span className="about-highlight-word">React, Node.js, Next.js, Express.js, MySQL, Spring Boot</span>, and more. Whether it's designing intuitive user interfaces or architecting robust server-side systems, I’m committed to delivering <span className="about-highlight-word">high-quality software that exceeds expectations.</span>
                    <br />
                    Beyond coding, I’m a <span className="about-highlight-word">continuous learner</span>, always exploring the latest advancements in technology to refine my skills and stay ahead in the industry. I enjoy contributing to <span className="about-highlight-word">open-source projects</span>, solving complex problems, and pushing the boundaries of what’s possible in web development.
                    <br />
                    <span className="about-highlight-word">Let’s connect</span> and collaborate to create something amazing!
                </p>
            </div>
            <p id="about-short-main-text" className="text-center">
                Hi, My name is Kiryl Shauchenka. I’m a creative full-stack developer passionate about crafting immersive
                web experiences.
            </p>

            <div>
                {floatingWordsArray.map((word) => (
                    <p
                        key={word.id}
                        id={`floating-word-${word.id}`}
                        style={{ top: `${word.top}%`, left: `${word.left}%` }}
                        className={`about-floating-word absolute opacity-30 uppercase text-2xl`}
                    >
                        {word.word}
                    </p>
                ))}
            </div>

            <LifeTimeLine />
        </div>
    );
};

export default About;
