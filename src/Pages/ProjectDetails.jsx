import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { NewsContext } from "../Utils/Context";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {
  const { id } = useParams();
  
  const [projectData] = useContext(NewsContext);
    useLayoutEffect(() => {
  const timeout = setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 50); // delay by 50ms for layout/paint to complete

  return () => clearTimeout(timeout); // clean up just in case
}, [id]);
  const project = projectData.find((p) => p.id === parseInt(id));
  const currentIndex = projectData.findIndex((p) => p.id === parseInt(id));
  const nextProject = projectData[(currentIndex + 1) % projectData.length];

  if (!project) {
    return <div className="text-color-primary p-10">Project not found</div>;
  }

  const singleProjectRef = useRef();
  const projectsMainRef = useRef();
  const nextProjectRef = useRef();
  const nextProjectMainRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      singleProjectRef.current,
      { x: "-3%" },
      {
        x: "-10%",
        scrollTrigger: {
          trigger: projectsMainRef.current,
          start: "top top",
          end: "center top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      nextProjectRef.current,
      { x: "3%" },
      {
        x: "10%",
        scrollTrigger: {
          trigger: nextProjectMainRef.current,
          start: "top bottom",
          end: "bottom -50%",
          scrub: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [id]);

  return (
    <section
      ref={projectsMainRef}
      className="relative overflow-hidden text-color-primary"
    >
      {/* Project title marquee */}
      <div className="py-12 sm:py-[6vw] md:py-[10vw] lg:py-[9vw] xl:py-[7.5vw] flex items-center mt-20 sm:mt-30 mb-10 sm:mb-15 relative">
        <div className="w-[10vw] h-full absolute top-0 left-0 bg-gradient-to-r from-[#0E090D]/50 via-transparent to-transparent z-20" />
        <div className="w-[10vw] h-full absolute top-0 right-0 bg-gradient-to-r from-transparent via-transparent to-[#0E090D]/50 z-20" />
        <div ref={singleProjectRef} className="whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center font-font3 text-[110px] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] 2xl:text-[10vw] whitespace-nowrap select-none group text-color-primary"
            >
              {project.title}
              <span className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 bg-color-fourth mx-10 rounded-full group-hover:scale-50 transition-all" />
            </span>
          ))}
        </div>
      </div>

{/* Project images */}
<div className="px-3.5 md:px-[12vw] lg:px-[15vw] space-y-12 md:space-y-16 lg:space-y-20">
  {/* Render top image if available */}
  {project.image1 && (
    <div className="w-full aspect-video overflow-hidden rounded-md">
      <img
        src={project.image1}
        alt={`${project.title} main image`}
        className="w-full h-full object-cover"
      />
    </div>
  )}

  {/* Filter additional images */}
  {(() => {
    const additionalImages = [project.image2, project.image3, project.image4, project.image5].filter(Boolean);
    const gridCols = additionalImages.length === 2 ? "grid-cols-2" : additionalImages.length === 1 ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3";

    return (
      <div className={`grid ${gridCols} gap-6`}>
        {additionalImages.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-md">
            <img
              src={img}
              alt={`${project.title} image ${i + 2}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    );
  })()}
</div>



      {/* Next project */}
      <div
        ref={nextProjectMainRef}
        className="py-25 sm:py-[12vw] md:py-[10vw] lg:py-[9vw] xl:py-[7.5vw] flex items-center flex-col justify-center relative"
      >
        <div className="w-[10vw] h-full absolute top-0 left-0 bg-gradient-to-r from-[#0E090D]/50 via-transparent to-transparent z-20" />
        <div className="w-[10vw] h-full absolute top-0 right-0 bg-gradient-to-r from-transparent via-transparent to-[#0E090D]/50 z-20" />

        <div className="flex gap-5 items-center px-3.5 md:px-[5vw] lg:px-[4vw] w-full">
          <span className="w-full h-[1px] bg-color-third" />
          <p className="whitespace-nowrap text-[#686868] text-base sm:text-lg md:text-xl font-font1">
            Next project
          </p>
          <span className="w-full h-[1px] bg-color-third" />
        </div>

        <div className="pt-15 sm:pt-[10vw] md:pt-[8vw] lg:pt-[7vw] xl:pt-[6vw] flex justify-end">
          <div ref={nextProjectRef} className="whitespace-nowrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center font-font3 text-8xl sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[8.5vw] whitespace-nowrap select-none cursor-pointer group text-color-primary"
              >
                <Link
                  to={`/details/${nextProject.id}`}
                  className="hover:underline transition-all"
                >
                  {nextProject.title}
                </Link>
                <span className="w-6.5 sm:w-[5.2vw] md:w-[4.2vw] lg:w-[3.2vw] xl:w-[2.5vw] h-6.5 bg-color-fourth mx-10 rounded-full group-hover:scale-50 transition-all" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
