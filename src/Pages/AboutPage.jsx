import React, { use, useRef } from "react";
import Contact from "../Components/Contact";
import Stairs from "../Components/Stairs";
import Scroll from "../Components/Scroll";
import About from "../Components/About";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    const AboutPageMainRef = useRef(null);
    const AboutPageText = useRef([]);
    useGSAP(() => {
        const homeTl = gsap.timeline({
            scrollTrigger: {
                trigger: AboutPageMainRef.current,
                start: "top top",
                end: "bottom -30%",
                scrub: true,
                // markers: true,
            },
        });

        AboutPageText.current.forEach((el, idx) => {
            const direction = idx % 2 === 0 ? "8%" : "-8%";
            homeTl.to(
                el,
                {
                    x: direction,
                    opacity: 1,
                },
                "start"
            );
        });
    }, []);
    return (
        <Stairs>
            <>
                <section
                    ref={AboutPageMainRef}
                    className="w-full text-color-primary h-[90vh] flex justify-center items-center relative"
                >
                    <div className="text-[19vw] sm:text-[150px] md:text-[150px] lg:text-[180px] xl:text-[200px] 2xl:text-[250px] leading-[100%] font-font4 flex justify-center items-center gap-20">
                        <h2 ref={(el) => (AboutPageText.current[1] = el)}>
                            Frontend Developer
                        </h2>
                        <video
                            className="absolute top-1/2 left-1/2 -translate-1/2 w-[40%]"
                            loop
                            autoPlay
                            muted
                            src="/Images/Others/About • Joris Brianti.webm"
                        ></video>
                        <h2 ref={(el) => (AboutPageText.current[2] = el)}>
                            & FreeLancer
                        </h2>
                    </div>
                    <Scroll bottom={"bottom-0"} />
                </section>
                <section>
                    <About />
                </section>
                <Contact />
            </>
        </Stairs>
    );
};

export default AboutPage;
