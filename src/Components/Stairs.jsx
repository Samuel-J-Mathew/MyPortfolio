import { delay, motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }) => {
    window.scrollTo(0, 0); // Reset scroll position on route change
    useLocation;
    const anim = (variants, custom) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants: variants,
            custom,
        };
    };
    const expand = {
        initial: {
            top: 0,
        },
        enter: (i) => ({
            top: "100%",
            transition: {
                duration: 0.3,
                delay: i * 0.05,
                ease: "easeInOut",
            },
            transitionEnd: {
                height: 0,
                top: 0,
            },
        }),
        exit: (i) => ({
            height: "100%",
            transition: {
                duration: 0.3,
                delay: i * 0.05,
                ease: "easeInOut",
            },
        }),
    };
    const numberOfStairs = 6;
    return (
        <div className="page stairs">
            <div className="t-c h-screen w-full fixed top-0 left-0 pointer-events-none flex z-[99999999999]">
                {[...Array(numberOfStairs)].map((_, i) => {
                    return (
                        <motion.div
                            {...anim(expand, numberOfStairs - i)}
                            key={i}
                            className="w-full h-full bg-color-fourth relative"
                        />
                    );
                })}
            </div>
            <div>{children}</div>;
        </div>
    );
};

export default Stairs;
