import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import LenisSmoothScroll from "./Utils/LenisSmoothScroll";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import WorkPage from "./Pages/WorkPage";
import ProjectDetails from "./Pages/ProjectDetails";
import MouseFollower from "./Components/MouseFoller";
import ScrollProgressBar from "./Components/ScrollProgressBar";
import { AnimatePresence } from "framer-motion";

const App = () => {
    const location = useLocation();

    return (
        <>
            <ScrollProgressBar />
            <MouseFollower />
            <LenisSmoothScroll>
                <Navbar />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about/" element={<AboutPage />} />
                        <Route path="/work/" element={<WorkPage />} />
                        <Route path="/details/:id" element={<ProjectDetails />} />
                    </Routes>
                </AnimatePresence>
            </LenisSmoothScroll>
        </>
    );
};

export default App;

// const [animating, setAnimating] = useState(true);
// mouse follower
// const mouseGoBigDivs = useRef([]);
// const outerRef = useRef();
// useGSAP(() => {
//     const handleMouseMove = (e) => {
//         const { clientX: x, clientY: y } = e;

//         gsap.to(outerRef.current, {
//             x,
//             y,
//             duration: 0.5,
//             ease: "power1.out",
//         });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
// }, []);
// // mouse follower scale
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
