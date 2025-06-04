import React from "react";

const About = () => {
    return (
        <div className="px-3.5 md:px-[5vw] lg:px-[12vw] relative mt-[10vw] mb-[7vw] text-color-primary font-font1">
            <div className="flex">
                <div className="w-[35%]">
                    <div className="w-[65%] p-[1vw] bg-color-primary rounded-full">
                        <img
                            src="/Images/Others/Joris.DToCMZOR_ZRGHnH.avif"
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-[65%]">
                    <div className="">
                        <h3 className="text-[80px] leading-[110%]">
                            I craft digital experiences combining design, motion
                            & development
                        </h3>
                    </div>
                    <div className="mt-[3vw]">
                        <p className="text-3xl leading-[130%]">
                            My creative journey began 15 years ago when I
                            discovered a passion for everything that could be
                            created through a computer. Curious and driven by
                            the desire to learn and practice, I spent countless
                            hours learning graphic and motion design, as well as
                            web development, through online resources and
                            personal projects. All of this naturally led me to
                            continue my studies in this field and then quickly
                            apply my skills in a professional setting.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-5 my-20 text-color-fifth">
                <p>About</p>
                <span className="w-full h-[1px] bg-color-third" />
            </div>
            <div className="flex">
                <div className="w-[35%]">
                    <p className="font-font4 leading-[100%] text-[80px]">
                        Toolbox
                    </p>
                </div>
                <div className="w-[65%] flex flex-wrap gap-5 text-[22px] sm:text-[3.8vw] md:text-[3.4vw] lg:text-[3vw] xl:text-[2.5vw] 2xl:text-[2.2vw]">
                    <div className="flex gap-5 items-center">
                        <p>HTML</p>
                        <span className="w-2 h-2 rounded-full bg-color-fourth block" />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>CSS</p>
                        <span className="w-2 h-2 rounded-full bg-color-fourth block" />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>JS</p>
                        <span className="w-2 h-2 rounded-full bg-color-fourth block" />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>React</p>
                        <span className="w-2 h-2 rounded-full bg-color-fourth block" />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>Tailwind</p>
                        <span className="w-2 h-2 rounded-full bg-color-fourth block" />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>Bootstrap</p>
                        <span className="w-2 h-2 rounded-full bg-color-fourth block" />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>Gsap</p>
                        <span className="w-2 h-2 rounded-full bg-color-fourth block" />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>Framer</p>
                        <span className="w-2 h-2 rounded-full bg-color-fourth block" />
                    </div>
                    <p>Animation</p>
                </div>
            </div>
            <div className="flex items-center gap-5 my-20 text-color-fifth">
                <p>About</p>
                <span className="w-full h-[1px] bg-color-third" />
            </div>
            <div className="flex">
                <div className="w-[35%]">
                    <p className="font-font4 leading-[100%] text-[80px]">
                        Education
                    </p>
                </div>
                <div className="w-[65%] flex flex-wrap gap-5 text-[22px] sm:text-[3.8vw] md:text-[3.4vw] lg:text-[3vw] xl:text-[2.5vw] 2xl:text-[2.2vw]">
                    <p>
                        I studied computer science on High School and now I'm
                        graduating on Chemistry from from a reputable local
                        college.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
