import React, { useLayoutEffect } from "react";
import { gsap } from "gsap/gsap-core";

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

    return (
        <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] flex items-center justify-center flex-col h-screen z-40 w-[100%] overflow-hidden">
            <img
                className="w-[550px]"
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnV2NGcyYXlndThsa3hrdDRzandjNGt6NDhuZzVwZ2FrZ2Y3cW56OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/idMwEqDdwBGS3XCXNa/giphy.webp"
            />
            <div className="absolute">
                <h2 className="uppercase text-6xl relative top-2 left-16">About</h2>
                <img
                    onMouseEnter={handleGifFaceMouseEnter}
                    onMouseLeave={handleGifFaceMouseLeave}
                    id="gif-spinning-head"
                    className="w-[200px] relative -top-2 left-0"
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmNjb253NXd2b21qOTZ5d2luM2ozYnhoeDc0cmo1MGhyczRnc2piNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/38xX65HgCGMPpZMTyc/giphy.webp"
                />
                <p className="uppercase text-4xl relative -top-44 left-44">me</p>
            </div>
            <p className="text-center">
                Hi, My name is Kiryl Shauchenka. I’m a creative full-stack developer passionate about crafting immersive
                web experiences.
            </p>

            <div>
                {floatingWordsArray.map((word) => (
                    <p
                        key={word.id}
                        id={`floating-word-${word.id}`}
                        style={{ top: `${word.top}%`, left: `${word.left}%` }}
                        className={`absolute opacity-30 uppercase text-2xl`}
                    >
                        {word.word}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default About;
