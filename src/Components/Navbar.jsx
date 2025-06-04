import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [navbarScroll, setnavbarScroll] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setnavbarScroll(false); // scrolling down
            } else {
                setnavbarScroll(true); // scrolling up
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //
    const navMenu = [
        { title: "home", pageDirection: "/" },
        { title: "work", pageDirection: "/work/" },
        { title: "about", pageDirection: "/about/" },
    ];

    return (
        <div
            className={`fixed top-0 flex justify-between items-center z-[999] px-5 md:px-10 lg:px-[5vw] left-1/2 -translate-x-1/2 max-w-[126rem] w-full mx-auto h-25 md:h-32 lg:h-36 text-color-primary ${
                navbarScroll ? "translate-y-0" : "-translate-y-full"
            } custom-easing`}
        >
            <NavLink
                to={"/"}
                className="flex flex-col h-[24px] sm:h-[25px] lg:h-[25px] xl:h-[29px] 2xl:h-[30px] leading-[100%]  overflow-hidden group uppercase logo text-[28px] sm:text-3xl xl:text-4xl tracking-[2px] font-font4"
            >
                <span className="group-hover:-translate-y-[100%] easing">
                    Mejbaul a.
                </span>
                <span className="group-hover:-translate-y-[100%] easing text-color-fourth">
                    Mejbaul a.
                </span>
            </NavLink>
            <div className="menu flex items-center text-xl md:text-2xl xl:text-[27px] gap-4.5 sm:gap-5 tracking-[1px] font-font4">
                {navMenu.map(({ title, pageDirection }, idx) => {
                    return (
                        <NavLink
                            key={idx}
                            to={`${pageDirection}`}
                            className={({ isActive }) =>
                                `cursor-pointer flex flex-col items-center relative group ${
                                    isActive
                                        ? "text-color-primary"
                                        : "text-color-fifth"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <div className="flex flex-col h-4.5 md:h-5.5 lg:h-5.5 xl:h-6 leading-[100%] capitalize overflow-hidden">
                                        <span className="group-hover:-translate-y-[100%] easing">
                                            {title}
                                        </span>
                                        <span className="group-hover:-translate-y-[100%] easing text-color-fourth">
                                            {title}
                                        </span>
                                    </div>

                                    <span
                                        className={`w-1 h-1 rounded-full block  transition-opacity easing absolute -bottom-3.5 left-1/2 -translate-x-1/2 ${
                                            isActive
                                                ? "bg-color-fourth translate-y-0 opacity-100 pointer-events-auto"
                                                : "translate-y-2 opacity-0 pointer-events-none"
                                        }`}
                                    />
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default Navbar;

// <NavLink
//                                 key={idx}
//                                 to={`${pageDirection}`}
//                                 ref={(el) => (mouseGoBigDivs.current[idx] = el)}
//                                 // onClick={() => {
//                                 //     console.log("Animating:", animating);
//                                 //     if (!animating) {
//                                 //         console.log(
//                                 //             "Navigating to",
//                                 //             pageDirection
//                                 //         );
//                                 //         navigate(pageDirection);
//                                 //     }
//                                 // }}
//                                 className={({ isActive }) =>
//                                     `cursor-pointer flex flex-col items-center relative group ${
//                                         isActive
//                                             ? "text-color-primary"
//                                             : "text-color-fifth"
//                                     }`
//                                 }
//                             >
//                                 {({ isActive }) => (
//                                     <>
//                                         <div className="flex flex-col h-4 lg:h-5 leading-[100%] capitalize overflow-hidden mb-2">
//                                             <span className="group-hover:-translate-y-[100%] easing">
//                                                 {title}
//                                             </span>
//                                             <span className="group-hover:-translate-y-[100%] easing text-color-fourth">
//                                                 {title}
//                                             </span>
//                                         </div>

//                                         <span
//                                             className={`w-1 h-1 rounded-full block  transition-opacity easing absolute -bottom-1.5 left-1/2 -translate-x-1/2 ${
//                                                 isActive
//                                                     ? "bg-color-fourth translate-y-0 opacity-100 pointer-events-auto"
//                                                     : "translate-y-2 opacity-0 pointer-events-none"
//                                             }`}
//                                         />
//                                     </>
//                                 )}
//                             </NavLink>
