import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NewsContext } from "../Utils/Context";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Work = ({workTitle}) => {
    const [projectData] = useContext(NewsContext);
    const projectSlideRef = useRef([]);
    const floatingImageRef = useRef([]);

    useGSAP(() => {
        projectSlideRef.current.forEach((el, i) => {
            gsap.fromTo(
                el,
                { x: 0 },
                {
                    x: [0, 2, 4].includes(i) ? "-6%" : "6%",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom -50%",
                        scrub: true,
                    },
                }
            );
        });
    }, []);

    const setSlideOpacity = (activeIndex = null) => {
        projectSlideRef.current.forEach((slide, i) => {
            gsap.to(slide, {
                opacity: activeIndex === null || activeIndex === i ? 1 : 0.25,
                ease: "power1.out",
                duration: 0.3,
            });
        });

        floatingImageRef.current.forEach((slidImage, i) => {
            gsap.to(slidImage, {
                opacity: activeIndex === i ? 1 : 0,
                scale: activeIndex === i ? 1 : 0,
                ease: "power1.out",
                duration: 0.3,
            });
        });
    };

    return (
        <div
            id="work"
            className="w-full text-color-primary px-3.5 md:px-[5vw] lg:px-[4vw] relative pb-3 z-30 overflow-hidden select-none max-w-[132rem] mx-auto"
        >
            {workTitle ? <div className="text-center">
                <div className="flex items-center gap-5">
                    <span className="w-full h-[1px] bg-[#2e262b]" />
                    <p className="whitespace-nowrap text-[37px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-6xl 2xl:text-[63px] font-font4 leading-[100%]">
                        Experience My Creative expertise
                    </p>
                    <span className="w-full h-[1px] bg-[#2e262b]" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-font1">
                    Check out some of my projects by area of expertise
                </h3>
            </div> : null}
            

            {projectData.map((project, i) => (
                <div key={i}>
                    {/* Gradient overlays */}
                    <div className="w-10 sm:w-20 md:w-30 h-full absolute top-0 left-0 bg-gradient-to-r from-[#0E090D]/50 via-transparent to-transparent z-20 pointer-events-none select-none" />
                    <div className="w-10 sm:w-20 md:w-30 h-full absolute top-0 right-0 bg-gradient-to-r from-transparent via-transparent to-[#0E090D]/50 z-20 pointer-events-none select-none" />

                    <Link
                        to="/details/"
                        onMouseEnter={() => setSlideOpacity(i)}
                        onMouseLeave={() => setSlideOpacity(null)}
                        className={`flex relative ${
                            [0, 2, 4].includes(i)
                                ? "justify-start"
                                : "justify-end"
                        }`}
                    >
                        {/* Floating image */}
                        <div
                            ref={(el) => (floatingImageRef.current[i] = el)}
                            className="w-[15vw] 2xl:w-70 absolute left-1/2 top-1/2 -translate-1/2 pointer-events-none select-none opacity-0 scale-0 z-50"
                        >
                            <img
                                src={project.src}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Text track */}
                        <div
                            ref={(el) => (projectSlideRef.current[i] = el)}
                            className="font-font3 text-[90px] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[180px] whitespace-nowrap select-none cursor-pointer group"
                        >
                            {Array.from({ length: 10 }).map((_, j) => (
                                <span
                                    key={j}
                                    className="inline-flex items-center py-22 sm:py-25 xl:py-32"
                                >
                                    {project.title}
                                    <span className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 transition-all rounded-full"></span>
                                </span>
                            ))}
                        </div>
                    </Link>

                    {[0, 1, 2,3].includes(i) && (
                        <div className="flex items-center gap-5 leading-0">
                            <span className="w-full h-[1px] bg-[#2e262b]" />
                            <p className="whitespace-nowrap text-color-fifth text-xs sm:text-sm md:text-[15px] font-font1">
                                Click to view project
                            </p>
                            <span className="w-full h-[1px] bg-[#2e262b]" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Work;
