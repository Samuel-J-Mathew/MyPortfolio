import React, { useState } from "react";
import { createContext } from "react";

export const NewsContext = createContext();

const Context = (props) => {
    const [projectData, setProjectData] = useState([
        {
            id: 1,
            title: "Overload – Full-Stack Fitness Tracking App",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE1.svg",
            videoSrc: "/Videos/tea-flow.mp4",
            image1: "/Images/Show-Case-Image/Overload-1.jpg",
            image2: "/Images/Show-Case-Image/Overload-2.jpg",
            image3: "/Images/Show-Case-Image/Overload-3.jpg",
            image4: "/Images/Show-Case-Image/Overload-4.jpg",
            image5: null,
            direction: "https://tea-flow.vercel.app/",
        },
        {
            id: 2,
            title: "ChoreWars: Gamified Task Manager App",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE5.svg",
            videoSrc: "/Videos/Russian-Mockups-video.mp4",
            image1: "/Images/Show-Case-Image/Chorewars-1.jpg",
            image2: "/Images/Show-Case-Image/Chorewars-2.jpg",
            image3: "/Images/Show-Case-Image/Chorewars-3.jpg",
            image4: "/Images/Show-Case-Image/Chorewars-4.jpg",
            image5: null,
            direction: "https://russian-meckups.vercel.app/",
        },
        {
            id: 3,
            title: "MacroCooking: RESTful AI Personalized Recipe Builder",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE3.svg",
            videoSrc: "/Videos/the-cult.mp4",
            image1: "/Images/Show-Case-Image/MacroRecipe-1.jpg",
            image2: "/Images/Show-Case-Image/MacroRecipe-2.jpg",
            image3: "/Images/Show-Case-Image/MacroRecipe-3.jpg",
            image4: null,
            image5: null,
            direction: "https://the-cult-rust.vercel.app/",
        },
        {
            id: 4,
            title: "Website for Lifting Customs",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE7.svg",
            videoSrc: "/Videos/Future-Goals.mp4",
            image1: "/Images/Show-Case-Image/Lifting-1.jpg",
            image2: "/Images/Show-Case-Image/Lifting-2.jpg",
            image3: null,
            image4: null,
            image5: null,
            direction: "https://future-goals-gamma.vercel.app/",
        },
        {
            id: 5,
            title: "Website for AOTL ",
            published: "2025",
            src: "/Images/Thumbnails/IMAGE10.svg",
            videoSrc: "/Videos/Future-Goals.mp4",
            image1: "/Images/Show-Case-Image/AOTL-1.jpg",
            image2: "/Images/Show-Case-Image/AOTL-2.jpg",
            image3: null,
            image4: null,
            image5: null,
            direction: "https://future-goals-gamma.vercel.app/",
        },
       
    ]);
    return (
        <NewsContext.Provider value={[projectData, setProjectData]}>
            {props.children}
        </NewsContext.Provider>
    );
};

export default Context;
