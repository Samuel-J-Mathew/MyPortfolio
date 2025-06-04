import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Scroll = ({bottom}) => {
    // scroll animation
    const scrollRef = useRef();
    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.set(scrollRef.current, { transformOrigin: "top" });
        tl.fromTo(
            scrollRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                duration: 1.2,
                ease: "power3.inOut",
                delay: 0.4,
            }
        );
        tl.set(scrollRef.current, { transformOrigin: "bottom" });
        tl.to(scrollRef.current, {
            scaleY: 0,
            duration: 1.2,
            ease: "power3.inOut",
        });
    }, []);
    return (
        <div className={`absolute ${bottom} left-1/2 translate-x-[-50%] flex flex-col justify-center items-center gap-2 lg:gap-3 text-lg`}>
            <div className="h-12 md:h-14 lg:h-16 w-[1px] bg-color-third">
                <span
                    ref={scrollRef}
                    className="bg-color-primary w-full h-full block"
                />
            </div>
            <p className="text-color-primary font-font1 tracking-[1px] text-xs lg:text-sm xl:text-base select-none">
                Scroll Down
            </p>
        </div>
    );
};

export default Scroll;
