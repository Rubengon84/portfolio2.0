import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import css from "./Projects.module.css"
import ProjectGridLayer from "../ProjectGridLayer";

gsap.registerPlugin(ScrollTrigger);

function Projects() {

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${css.gridContainer}`,
          start: "top top",
          end: () => window.innerHeight * 1,
          scrub: true,
          pin: `.${css.grid}`,
          anticipatePin: 1,
        },
      })
      .set(`.${css.gridBlock}:not(#centerBlock)`, { autoAlpha: 0 })
      .to(
        `.${css.gridBlock}:not(#centerBlock)`,
        { duration: 0.1, autoAlpha: 1 },
        0.001
      )
      .from(`.${css.gridLayer}`, {
        scale: 3.3333,
        ease: "none",
      });
  }, []);

  // // Images to make it look better, not related to the effect
  // const size = Math.max(window.innerWidth, window.innerHeight);
  // gsap.set(`.${css.gridBlock}`, {
  //   backgroundImage: (i) =>
  //     `url(https://picsum.photos/${size}/${size}?random=${i})`,
  // });

  // const bigImg = new Image();
  // bigImg.addEventListener("load", function () {
  //   gsap.to(`.centerPiece .${css.gridBlock}`, { autoAlpha: 1, duration: 0.5 });
  // });

  // bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
  // console.log(bigImg);

  return (
    <div>
      <h1 className="header-section">
        Scroll down to see a photo gallery being revealed
      </h1>
      <div className={css.gridContainer} id="gridContainer">
        <div className={css.grid} id="grid">
          <ProjectGridLayer />
          <ProjectGridLayer />
          <ProjectGridLayer />
          <ProjectGridLayer centerPiece={true}/>
          <ProjectGridLayer />
          <ProjectGridLayer />
          <ProjectGridLayer />
          <ProjectGridLayer />
          <ProjectGridLayer />
        </div>
      </div>
    </div>
  );
}
export default Projects;
