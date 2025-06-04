import { useEffect, useRef } from "react";

const ScrollProgressBar = () => {
    const barRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = scrollTop / docHeight;
            if (barRef.current) {
                barRef.current.style.transform = `scaleX(${scrollProgress})`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        // 👇 Call it once initially
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <span
            ref={barRef}
            className="w-full h-[2px] bg-color-fourth fixed bottom-0 right-0 z-[999] origin-top"
        />
    );
};

export default ScrollProgressBar;
