import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactMainRef = useRef();
    const borderRef = useRef();

    useGSAP(() => {
        gsap.to(borderRef.current, {
            scrollTrigger: {
                trigger: contactMainRef.current,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                // markers: true,
            },
            opacity: 1,
            scale: 1,
            ease: "power2.inOut",
        });
    }, []);

    return (
        <section
            ref={contactMainRef}
            className="overflow-hidden w-full h-full px-0 sm:px-5 relative z-50 text-color-primary flex justify-end items-center flex-col pt-[4vw] mx-auto"
        >
            <div className="w-full h-[75vh] sm:h-[70vh] flex flex-col max-w-[126rem] justify-center items-center relative">
                <div
                    ref={borderRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none scale-[1.3] px-3 sm:px-5 md:px-10 lg:px-[5vw] opacity-0"
                >
                    <span className="w-full h-full border border-color-third rounded-[50px]  block pointer-events-none" />
                </div>

                <p className="text-[8vw] sm:text-[6vw] md:text-[4vw] xl:text-[56px] text-center font-font4 tracking-[1px] leading-[100%]">
                    Let's create magic together
                </p>
                <h2
                    className="text-[11.7vw] sm:text-[10.6vw] md:text-[9vw] xl:text-[135px] text-center leading-[100%] tracking-[-0.2vw] font-font1 text-color-primary hover:text-color-fourth transform-color easing cursor-pointer"
                >
                    sam@samuelmathew.work
                </h2>

                <div className="leading-[100%] grid grid-cols-2 gap-x-6 gap-y-4 justify-center mt-6 sm:mt-8 lg:mt-15 font-font1 px-8">
                    {[
                        { title: "Github", url: "https://github.com/Samuel-J-Mathew" },
                        { title: "Linkedin", url: "https://www.linkedin.com/in/samuel-j-mathew" }
                    ].map(({ title, url }, idx) => (
                        <a
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center col-span-1 gap-3 sm:gap-4 justify-center font-font1 text-color-primary text-base md:text-lg lg:text-xl xl:text-2xl w-max mx-auto group relative pl-4 sm:pl-5.5 md:pl-7 p-0 md:p-2"
                        >
                            <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full flex flex-col justify-center items-center bg-color-fourth group-hover:scale-[3] easing absolute left-0 top-1/2 -translate-y-1/2 -rotate-45">
                                <img
                                    className="w-[75%] h-[75%] opacity-0 transition-all group-hover:opacity-100"
                                    src="/Images/Icons/arrow.svg"
                                    alt=""
                                />
                            </span>
                            <div className="flex flex-col h-4.5 md:h-5 lg:h-[21px] xl:h-[27px] leading-[100%] overflow-hidden">
                                <span className="group-hover:-translate-y-[100%] easing">
                                    {title}
                                </span>
                                <span className="group-hover:-translate-y-[100%] easing text-color-fourth">
                                    {title}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm lg:text-base my-5 sm:my-6 md:my-8 font-font1">
                <div className="relative w-[8px] h-[8px] rounded-full bg-[#9EFE88]">
                    <span className="pulse absolute w-full h-full bg-[#9EFE88] rounded-full opacity-80" />
                </div>
                Available for a full-time position
            </div>
        </section>
    );
};

export default Contact;
