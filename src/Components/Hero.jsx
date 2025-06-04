import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Scroll from "./Scroll";

const Hero = () => {
    // image trail animation
    const heroMainRef = useRef();
    useGSAP(() => {
        const images = [
            "/Images/Thumbnails/IMAGE1.svg",
            // "/Images/Thumbnails/IMAGE2.svg",
            "/Images/Thumbnails/IMAGE3.svg",
            // "/Images/Thumbnails/IMAGE4.svg",
            "/Images/Thumbnails/IMAGE5.svg",
            // "/Images/Thumbnails/IMAGE6.svg",
            "/Images/Thumbnails/IMAGE7.svg",
            // "/Images/Thumbnails/IMAGE8.svg",
            // "/Images/Thumbnails/IMAGE9.svg",
            "/Images/Thumbnails/IMAGE10.svg",
            // "/Images/Thumbnails/IMAGE11.svg",
            // "/Images/Thumbnails/IMAGE12.svg",
        ];

        let lastX = 0;
        let lastY = 0;
        let currentImageIndex = 0;
        const distanceThreshold = 180;

        const handleMouseMove = (e) => {
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > distanceThreshold) {
                const img = document.createElement("img");
                img.classList.add("imageStyles");
                img.src = images[currentImageIndex];
                heroMainRef.current.appendChild(img);

                currentImageIndex = (currentImageIndex + 1) % images.length;

                gsap.set(img, {
                    scale: 0,
                    opacity: 0,
                    x: e.clientX,
                    y: e.clientY,
                });

                gsap.to(img, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                });

                gsap.to(img, {
                    opacity: 0,
                    scale: 0,
                    delay: 0.5,
                    duration: 0.6,
                    ease: "power2.out",
                    onComplete: () => img.remove(),
                });

                lastX = e.clientX;
                lastY = e.clientY;
            }
        };

        const main = heroMainRef.current;
        main.addEventListener("mousemove", handleMouseMove);

        return () => {
            main.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // scroll
    const HomeTextRef = useRef([]);
    const HomeMainRef = useRef(null);

    useGSAP(() => {
        const homeTl = gsap.timeline({
            scrollTrigger: {
                trigger: HomeMainRef.current,
                start: "top top",
                end: "bottom -40%",
                scrub: true,
                // markers: true,
            },
        });

        HomeTextRef.current.forEach((el, idx) => {
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
    // circle animation
    const circleRef = useRef(null);
    useGSAP(() => {
        gsap.to(circleRef.current, {
            rotation: 360,
            duration: 20, // adjust for speed
            ease: "linear",
            repeat: -1,
        });
    }, []);

    return (
        <section
            ref={HomeMainRef}
            id="home"
            className="min-h-svh w-full px-[2vw] flex items-center relative overflow-hidden text-color-primary"
        >
            {/* <div className="circle absolute top-1/2 left-1/2 -translate-1/2 pointer-events-none z-[-1] w-[40%]">
                <img
                    ref={circleRef}
                    className="w-full"
                    src="/Images/Others/Circle.svg"
                    alt=""
                />
            </div> */}
            <div
                ref={heroMainRef}
                className="w-full flex items-center justify-center"
            >
                <div className="w-full text-[14.4vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[180px] leading-[90%] pt-[6vw] pb-[8vw] select-none text-center font-font4">
                    <h2 ref={(el) => (HomeTextRef.current[1] = el)}>
                        Crafting smooth digital
                    </h2>
                    <div>
                        <span
                            ref={(el) => (HomeTextRef.current[3] = el)}
                            className="inline-block"
                        >
                            experiences
                        </span>{" "}
                        with{" "}
                        <span
                            ref={(el) => (HomeTextRef.current[4] = el)}
                            className="inline-block"
                        >
                            exceptional
                        </span>
                    </div>
                    <h2 ref={(el) => (HomeTextRef.current[2] = el)}>
                        care and precision.
                    </h2>
                </div>
            </div>
            <Scroll bottom={"bottom-[4%]"} />
        </section>
    );
};

export default Hero;
