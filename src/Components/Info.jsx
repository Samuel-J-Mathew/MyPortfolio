import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Info = () => {
    const aboutMainRef = useRef();
    const introRef = useRef();
    useGSAP(() => {
        const aboutTextTl = gsap.timeline({
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: ".about",
                start: "top 80%",
                end: "bottom 60%",
                scrub: true,
                // markers: true,
            },
        });
        aboutTextTl.fromTo(
            ".text",
            {
                color: "#3a3237",
            },
            {
                color: "#F0DADA",
                stagger: 0.05,
            },
            "a"
        );
    }, []);
    const boldWords = [
        "Sam",
        "Alom,",
        "React,",
        "GSAP,",
        "Framer",
        "Motion.",
    ];
    return (
        <section
            id="about"
            ref={aboutMainRef}
            className="about w-full h-auto px-5 sm:px-8 md:px-[6vw] lg:px-[6vw] relative pt-20 sm:pt-[14vw] md:pt-[8vw] mb-55 sm:mb-[20vw] lg:mb-[16vw] xl:mb-[14vw] text-color-primary"
        >
            <div
                ref={introRef}
                className="w-full max-w-[1150px] mx-auto h-full flex justify-center items-center gap-10"
            >
                <div className="text-[27px] md:text-4xl lg:text-[38px] xl:text-[43px] 2xl:text-[47px] w-full font-font1 overflow-hidden leading-[130%]">
                    {"Hey there, I'm Sam Mathew, a Front-End Developer and Computer Science graduate focused on building clean, responsive, and user-friendly applications. I work with tools like JavaScript, Flutter, Firebase, Node.js, and Express to bring ideas to life across web and mobile platforms. I care about writing modular code, creating smooth user experiences, and building full-stack projects that feel polished and practical. Whether it's integrating real-time features, optimizing performance, or deploying scalable apps, I focus on delivering work that’s both functional and efficient."
                        .split(" ")
                        .map((c, i) => {
                            return (
                                <span
                                    key={i}
                                    className={`text select-none ${
                                        boldWords.includes(c)
                                            ? "font-bold"
                                            : "font-normal"
                                    } inline-block ${
                                        i == 0
                                            ? "ml-0 sm:ml-[12vw] lg:ml-[12vw] xl:ml-[12vw] 2xl:ml-48"
                                            : null
                                    }`}
                                >
                                    {c}&nbsp;
                                </span>
                            );
                        })}
                </div>
            </div>
            <Link
                to={"/about/"}
                className="flex items-center col-span-1 gap-3 sm:gap-4 justify-center font-font1 text-color-primary text-base md:text-lg lg:text-xl xl:text-2xl w-max mx-auto group relative pl-4 sm:pl-5.5 md:pl-7 p-0 md:p-2 mt-8 md:mt-12 lg:mt-14 xl:mt-18"
            >
                <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full flex flex-col justify-center items-center bg-color-fourth group-hover:scale-[3] easing absolute left-0 top-1/2 -translate-y-1/2 -rotate-45">
                    <img
                        className="w-[75%] h-[75%] opacity-0 transition-all group-hover:opacity-100 "
                        src="/Images/Icons/arrow.svg"
                        alt=""
                    />
                </span>
                <div className="flex flex-col h-4.5 md:h-5 lg:h-[21px] xl:h-[27px] leading-[100%]  overflow-hidden">
                    <span className="group-hover:-translate-y-[100%] easing">
                        Learn more
                    </span>
                    <span className="group-hover:-translate-y-[100%] easing text-color-fourth">
                        Learn more
                    </span>
                </div>
            </Link>
        </section>
    );
};

export default Info;
