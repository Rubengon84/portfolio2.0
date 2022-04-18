import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";
import ProjectGridLayer from "../ProjectGridLayer";
import { changeClasses, changeText } from "../../HelperFunctions";

// Load Images for the showroom
import apptivityImage from "../../Images/projects/apptivity.PNG";
import portfolioImage from "../../Images/projects/portfolio.PNG";
import catsImage from "../../Images/projects/cats.PNG";
import rugImage from "../../Images/projects/rug.PNG";
import pigeonsImage from "../../Images/projects/pigeons.PNG";
import photoShowroomImage from "../../Images/projects/photo-showroom.PNG";
import mastermindImage from "../../Images/projects/masterMind.PNG";
import redditImage from "../../Images/projects/reddit.PNG";

gsap.registerPlugin(ScrollTrigger);

// Component to hold all the projects links and make the animation of shrink or grow when user scrolls. 
function Projects() {
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
          <ProjectGridLayer
            link={"https://reddit-jimmy.netlify.app/"}
            projectImage={redditImage}
          />
          <ProjectGridLayer
            link={"https://rubengon84.github.io/"}
            projectImage={portfolioImage}
          />
          <ProjectGridLayer
            link={"https://dreamy-mcnulty-895324.netlify.app/"}
            projectImage={mastermindImage}
          />
          <ProjectGridLayer
            link={"https://apptivity-app.netlify.app"}
            centerPiece={true}
            projectImage={apptivityImage}
          />
          <ProjectGridLayer
            link={"https://cats-api-table.herokuapp.com/"}
            projectImage={catsImage}
          />
          <ProjectGridLayer
            link={"https://rug-website-project.netlify.app/"}
            projectImage={rugImage}
          />
          <ProjectGridLayer
            link={"https://ivan-gallery.herokuapp.com/"}
            projectImage={photoShowroomImage}
          />
          <ProjectGridLayer
            link={"https://wikipigeons.netlify.app/"}
            projectImage={pigeonsImage}
          />
        </div>
      </div>
    </div>
  );
}
export default Projects;
