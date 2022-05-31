import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";
import ProjectGridLayer from "../ProjectGridLayer";
import { changeClasses, changeText } from "../../HelperFunctions";
import { projectsData } from "../../Data";

gsap.registerPlugin(ScrollTrigger);

// Component to hold all the projects links and make the animation of shrink or grow when user scrolls. 
function Projects({getProjectIndex}) {
  // UseEffect to create and load an animation timeline with scrollTrigger to shrink or grow the projects.
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".gridContainer",
          start: "top top",
          end: () => window.innerHeight * 2,
          onEnterBack: () => {
            changeClasses("gridLayer", "");
          },
          onLeave: () => {    
            changeClasses("gridLayer", "active");
            changeClasses("scrollContainer", "scrollContainerUp");
            changeClasses("arrowsDown", "arrowsUp");
            changeClasses("projectTitle", "projectTitleVisible");
            changeText("scrollSpan", "Home");
          },
          onLeaveBack: () => {  
            changeClasses("scrollContainer", "");
            changeClasses("arrowsDown", "");
            changeClasses("projectTitle", "");
            changeText("scrollSpan", "Projects");
          },
          scrub: true,
          pin: ".grid",
          anticipatePin: 1,
        },
      })
      .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
      .to(
        ".gridBlock:not(.centerBlock)",
        { duration: 0.1, autoAlpha: 1 },
        0.001
      )
      .from(".gridLayer", {
        scale: 3.3333,
        ease: "none",
      });
  }, []);

  return (
    <div className="projectsContainer">
      <h2 className="projectTitle">Projects</h2>
      <div className="gridContainer">
        <div className="grid">
          {projectsData.map( (project, index) => {
            return(
              <ProjectGridLayer
                getProjectIndex={getProjectIndex}
                projectImage={project.image}
                centerPiece={project.centerPiece ? true : false}
                index={index}
                key={index}
              /> 
            )
          })
          }
        </div>
      </div>
    </div>
  );
}
export default Projects;
