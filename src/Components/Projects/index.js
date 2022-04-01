import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";
import ProjectGridLayer from "../ProjectGridLayer";
import { changeClasses } from "../../HelperFunctions";

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

function Projects() {

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".gridContainer",
          start: "top top",
          end: () => (window.innerHeight * 2),
          onEnterBack: () => { changeClasses("gridLayer", "")},
          onLeave: () => { changeClasses("gridLayer", "active")},
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

  // // Images to make it look better, not related to the effect
  // const size = Math.max(window.innerWidth, window.innerHeight);
  // gsap.set(".gridBlock", {
  //   backgroundImage: (i) =>
  //     `url(https://picsum.photos/${size}/${size}?random=${i})`,
  // });

  // const bigImg = new Image();
  // bigImg.addEventListener("load", function () {
  //   gsap.to(".centerPiece .gridBlock", { autoAlpha: 1, duration: 0.5 });
  // });

  // bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
  // console.log(bigImg);
  return (
    <div>
      <h1 className="header-section">
        Scroll down to see a photo gallery being revealed
      </h1>
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
          {/* <ProjectGridLayer /> */}
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
