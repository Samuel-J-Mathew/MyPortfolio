import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const MouseFollower = () => {
    const mouseGoBigDivs = useRef([]);
    const outerRef = useRef();
    useGSAP(() => {
        const handleMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;

            gsap.to(outerRef.current, {
                x,
                y,
                duration: 0.5,
                ease: "power1.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
// mouse follower scale
    // useGSAP(() => {
    //     if (!mouseGoBigDivs.current || mouseGoBigDivs.current.length === 0)
    //         return;

    //     const handleMouseEnter = () => {
    //         gsap.to(outerRef.current, {
    //             width: "100px",
    //             height: "100px",
    //             duration: 0.3,
    //             ease: "power1.out",
    //         });
    //     };
    //     const handleMouseLeave = () => {
    //         gsap.to(outerRef.current, {
    //             width: "48px",
    //             height: "48px",
    //             duration: 0.3,
    //             ease: "power1.out",
    //         });
    //     };
    //     mouseGoBigDivs.current.forEach((el) => {
    //         if (el) {
    //             el.addEventListener("mouseenter", handleMouseEnter);
    //             el.addEventListener("mouseleave", handleMouseLeave);
    //         }
    //     });

    //     return () => {
    //         mouseGoBigDivs.current.forEach((el) => {
    //             if (el) {
    //                 el.removeEventListener("mouseenter", handleMouseEnter);
    //                 el.removeEventListener("mouseleave", handleMouseLeave);
    //             }
    //         });
    //     };
    // }, [mouseGoBigDivs]);


    // useGSAP(() => {
    //     if (!mouseGoBigDivs.current || mouseGoBigDivs.current.length === 0)
    //         return;

    //     const handleMouseEnter = () => {
    //         gsap.to(outerRef.current, {
    //             width: "100px",
    //             height: "100px",
    //             duration: 0.3,
    //             ease: "power1.out",
    //         });
    //     };
    //     const handleMouseLeave = () => {
    //         gsap.to(outerRef.current, {
    //             width: "48px",
    //             height: "48px",
    //             duration: 0.3,
    //             ease: "power1.out",
    //         });
    //     };
    //     mouseGoBigDivs.current.forEach((el) => {
    //         if (el) {
    //             el.addEventListener("mouseenter", handleMouseEnter);
    //             el.addEventListener("mouseleave", handleMouseLeave);
    //         }
    //     });

    //     return () => {
    //         mouseGoBigDivs.current.forEach((el) => {
    //             if (el) {
    //                 el.removeEventListener("mouseenter", handleMouseEnter);
    //                 el.removeEventListener("mouseleave", handleMouseLeave);
    //             }
    //         });
    //     };
    // }, [mouseGoBigDivs]);
    // // mouse follower email
    // const innerRef = useRef();
    // const innerViewRef = useRef();
    // const innerEmailRef = useRef();
    // const contactEmailRef = useRef();

    // useGSAP(() => {
    //     const handleMouseEnter = () => {
    //         gsap.to(outerRef.current, {
    //             width: "100px",
    //             height: "100px",
    //             duration: 0.3,
    //             ease: "power1.out",
    //         });
    //         gsap.to(innerRef.current, {
    //             opacity: 1,
    //             duration: 0.3,
    //             ease: "power1.out",
    //         });
    //         gsap.to(innerEmailRef.current, {
    //             opacity: 1,
    //             duration: 0.3,
    //             ease: "power1.out",
    //         });
    //     };
    //     const handleMouseLeave = () => {
    //         gsap.to(outerRef.current, {
    //             width: "48px",
    //             height: "48px",
    //             duration: 0.3,
    //             ease: "power1.out",
    //         });
    //         gsap.to(innerRef.current, {
    //             opacity: 0,
    //             duration: 0.3,
    //             ease: "power1.out",
    //         });
    //     };
    //     contactEmailRef.current.addEventListener(
    //         "mouseenter",
    //         handleMouseEnter
    //     );
    //     contactEmailRef.current.addEventListener(
    //         "mouseleave",
    //         handleMouseLeave
    //     );

    //     return () => {
    //         contactEmailRef.current.removeEventListener(
    //             "mouseenter",
    //             handleMouseEnter
    //         );
    //         contactEmailRef.current.removeEventListener(
    //             "mouseleave",
    //             handleMouseLeave
    //         );
    //     };
    // }, []);

    return (
        <div
            ref={outerRef}
            className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[99] border border-color-fifth flex justify-center items-center p-1 invisible lg:visible opacity-0 lg:opacity-100"
            style={{ transform: "translate(-50%, -50%) scale(1)" }}
        >
            <div
                // ref={innerRef}
                className="pointer-events-none opacity-0 w-full h-full text-color-primary bg-[#000000b7] p-1 rounded-full flex flex-col justify-center items-center"
            >
                <p
                    // ref={innerViewRef}
                    className="font-font1 opacity-0 absolute font-semibold"
                >
                    View
                </p>
                <p
                    // ref={innerEmailRef}
                    className="font-font1 text-lg opacity-0 absolute"
                >
                    Email
                </p>
            </div>
        </div>
    );
};

export default MouseFollower;
