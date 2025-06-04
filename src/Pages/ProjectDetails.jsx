import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {
    const singleProjectRef = useRef();
    const projectsMainRef = useRef();
    const nextProjectRef = useRef();
    const nextProjectMainRef = useRef();
    useGSAP(() => {
        gsap.fromTo(
            singleProjectRef.current,
            { x: "-3%" },
            {
                x: "-10%",
                scrollTrigger: {
                    trigger: projectsMainRef.current,
                    start: "top top",
                    end: "center top",
                    scrub: true,
                    // markers: true,
                },
            }
        );

        gsap.fromTo(
            nextProjectRef.current,
            { x: "3%" },
            {
                x: "10%",
                scrollTrigger: {
                    trigger: nextProjectMainRef.current,
                    start: "top bottom",
                    end: "bottom -50%",
                    scrub: true,
                    // markers: true,
                },
            }
        );
    }, []);
    return (
        <section
            ref={projectsMainRef}
            className="relative overflow-hidden text-color-primary"
        >
            <div className="py-12 sm:py-[6vw] md:py-[10vw] lg:py-[9vw] xl:py-[7.5vw] flex items-center mt-20 sm:mt-30 mb-10 sm:mb-15 relative">
                <div className="w-[10vw] h-full absolute top-0 left-0 bg-gradient-to-r from-[#0E090D]/50 via-transparent to-transparent z-20" />
                <div className="w-[10vw] h-full absolute top-0 right-0 bg-gradient-to-r from-transparent via-transparent to-[#0E090D]/50 z-20" />

                <div ref={singleProjectRef} className="whitespace-nowrap">
                    <span
                        className={`inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none group text-color-primary`}
                    >
                        Overload -  Fitness Tracker
                        <span
                            // ref={(elem) =>
                            //     (shapeRef.current[1] = elem)
                            // }
                            className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                        ></span>
                    </span>
                    <span
                        className={`inline-flex items-center font-font3 text-[110px] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] 2xl:text-[10vw] whitespace-nowrap select-none group text-color-primary`}
                    >
                        Overload -  Fitness Tracker
                        <span
                            // ref={(elem) =>
                            //     (shapeRef.current[1] = elem)
                            // }
                            className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                        ></span>
                    </span>
                    <span
                        className={`inline-flex items-center font-font3 text-[110px] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] 2xl:text-[10vw] whitespace-nowrap select-none group text-color-primary`}
                    >
                        Overload -  Fitness Tracker
                        <span
                            // ref={(elem) =>
                            //     (shapeRef.current[1] = elem)
                            // }
                            className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                        ></span>
                    </span>
                    <span
                        className={`inline-flex items-center font-font3 text-[110px] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] 2xl:text-[10vw] whitespace-nowrap select-none group text-color-primary`}
                    >
                        Overload -  Fitness Tracker
                        <span
                            // ref={(elem) =>
                            //     (shapeRef.current[1] = elem)
                            // }
                            className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                        ></span>
                    </span>
                    <span
                        className={`inline-flex items-center font-font3 text-[110px] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] 2xl:text-[10vw] whitespace-nowrap select-none group text-color-primary`}
                    >
                        Overload -  Fitness Tracker
                        <span
                            // ref={(elem) =>
                            //     (shapeRef.current[1] = elem)
                            // }
                            className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                        ></span>
                    </span>
                    <span
                        className={`inline-flex items-center font-font3 text-[110px] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] 2xl:text-[10vw] whitespace-nowrap select-none group text-color-primary`}
                    >
                        Overload -  Fitness Tracker
                        <span
                            // ref={(elem) =>
                            //     (shapeRef.current[1] = elem)
                            // }
                            className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                        ></span>
                    </span>
                    <span
                        className={`inline-flex items-center font-font3 text-[110px] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] 2xl:text-[10vw] whitespace-nowrap select-none group text-color-primary`}
                    >
                        Overload -  Fitness Tracker
                        <span
                            // ref={(elem) =>
                            //     (shapeRef.current[1] = elem)
                            // }
                            className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                        ></span>
                    </span>
                    <span
                        className={`inline-flex items-center font-font3 text-[110px] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] 2xl:text-[10vw] whitespace-nowrap select-none group text-color-primary`}
                    >
                        Overload -  Fitness Tracker
                        <span
                            // ref={(elem) =>
                            //     (shapeRef.current[1] = elem)
                            // }
                            className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                        ></span>
                    </span>
                    <span
                        className={`inline-flex items-center font-font3 text-[110px] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] 2xl:text-[10vw] whitespace-nowrap select-none group text-color-primary`}
                    >
                        Overload -  Fitness Tracker
                        <span
                            // ref={(elem) =>
                            //     (shapeRef.current[1] = elem)
                            // }
                            className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                        ></span>
                    </span>
                    <span
                        className={`inline-flex items-center font-font3 text-[110px] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] 2xl:text-[10vw] whitespace-nowrap select-none group text-color-primary`}
                    >
                        Overload -  Fitness Tracker
                        <span
                            // ref={(elem) =>
                            //     (shapeRef.current[1] = elem)
                            // }
                            className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                        ></span>
                    </span>
                </div>

                {/* <div className=" flex flex-col absolute bottom-0 justify-center items-center gap-2 lg:gap-3 text-lg">
                    <div className="h-10 md:h-12 lg:h-14 xl:h-16 w-[1px] bg-color-third">
                        <span
                            // ref={scrollRef}
                            className="bg-color-primary w-full h-full block"
                        />
                    </div>
                    <p className="text-color-primary font-font1 tracking-[2px] text-xs lg:text-sm xl:text-base">
                        Scroll
                    </p>
                </div> */}
            </div>
            <div className="px-3.5 md:px-[12vw] lg:px-[15vw]">
                <div className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-20">
                    <div className="aspect-video overflow-hidden col-span-1">
                        <img
                            className="w-full h-full"
                            src="https://jorisbrianti.fr/_astro/images/BloomAdmin1.Chvs4jDF_Z236JDv.webp"
                            alt=""
                        />
                    </div>
                    <div className="aspect-video overflow-hidden col-span-1">
                        <img
                            className="w-full h-full"
                            src="https://jorisbrianti.fr/_astro/images/RHSWP1.MlJF-lf2_Z28gHHg.webp"
                            alt=""
                        />
                    </div>
                    <div className="aspect-video overflow-hidden col-span-1">
                        <img
                            className="w-full h-full"
                            src="https://jorisbrianti.fr/_astro/images/BloomAdmin1.Chvs4jDF_Z236JDv.webp"
                            alt=""
                        />
                    </div>
                    <div className="aspect-video overflow-hidden col-span-1">
                        <img
                            className="w-full h-full"
                            src="https://jorisbrianti.fr/_astro/images/BloomOS3.CS3M2gSd_ZGlRmL.webp"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div
                ref={nextProjectMainRef}
                className="py-25 sm:py-[12vw] md:py-[10vw] lg:py-[9vw] xl:py-[7.5vw] flex items-center flex-col justify-center relative"
            >
                <div className="w-[10vw] h-full absolute top-0 left-0 bg-gradient-to-r from-[#0E090D]/50 via-transparent to-transparent z-20" />
                <div className="w-[10vw] h-full absolute top-0 right-0 bg-gradient-to-r from-transparent via-transparent to-[#0E090D]/50 z-20" />
                <div className="flex gap-5 items-center px-3.5 md:px-[5vw] lg:px-[4vw] w-full">
                    <span className="w-full h-[1px] bg-color-third" />
                    <p className="whitespace-nowrap text-[#686868] text-base sm:text-lg md:text-xl font-font1">
                        Next project
                    </p>
                    <span className="w-full h-[1px] bg-color-third" />
                </div>
                <div className="pt-15 sm:pt-[10vw] md:pt-[8vw] lg:pt-[7vw] xl:pt-[6vw] flex justify-end">
                    <div ref={nextProjectRef} className="whitespace-nowrap">
                        <span
                            className={`inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group text-color-primary`}
                        >
                            Tea flow
                            <span
                                // ref={(elem) =>
                                //     (shapeRef.current[1] = elem)
                                // }
                                className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                            ></span>
                        </span>
                        <span
                            className={`inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group text-color-primary`}
                        >
                            Tea flow
                            <span
                                // ref={(elem) =>
                                //     (shapeRef.current[1] = elem)
                                // }
                                className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                            ></span>
                        </span>
                        <span
                            className={`inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group text-color-primary`}
                        >
                            Tea flow
                            <span
                                // ref={(elem) =>
                                //     (shapeRef.current[1] = elem)
                                // }
                                className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                            ></span>
                        </span>
                        <span
                            className={`inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group text-color-primary`}
                        >
                            Tea flow
                            <span
                                // ref={(elem) =>
                                //     (shapeRef.current[1] = elem)
                                // }
                                className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                            ></span>
                        </span>
                        <span
                            className={`inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group text-color-primary`}
                        >
                            Tea flow
                            <span
                                // ref={(elem) =>
                                //     (shapeRef.current[1] = elem)
                                // }
                                className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                            ></span>
                        </span>
                        <span
                            className={`inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group text-color-primary`}
                        >
                            Tea flow
                            <span
                                // ref={(elem) =>
                                //     (shapeRef.current[1] = elem)
                                // }
                                className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                            ></span>
                        </span>
                        <span
                            className={`inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group text-color-primary`}
                        >
                            Tea flow
                            <span
                                // ref={(elem) =>
                                //     (shapeRef.current[1] = elem)
                                // }
                                className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                            ></span>
                        </span>
                        <span
                            className={`inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group text-color-primary`}
                        >
                            Tea flow
                            <span
                                // ref={(elem) =>
                                //     (shapeRef.current[1] = elem)
                                // }
                                className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                            ></span>
                        </span>
                        <span
                            className={`inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group text-color-primary`}
                        >
                            Tea flow
                            <span
                                // ref={(elem) =>
                                //     (shapeRef.current[1] = elem)
                                // }
                                className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                            ></span>
                        </span>
                        <span
                            className={`inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group text-color-primary`}
                        >
                            Tea flow
                            <span
                                // ref={(elem) =>
                                //     (shapeRef.current[1] = elem)
                                // }
                                className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 sm:h-[5.2vw] md:h-[4.2vw] lg:h-[3.2vw] xl:h-[2.5vw] bg-color-fourth mx-10 sm:mx-[6.5vw] md:mx-[5.5vw] lg:mx-[4.5vw] xl:mx-[3.5vw] group-hover:scale-50 easing  transition-all rounded-full"
                            ></span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
