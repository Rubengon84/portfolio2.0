import React from "react";
import { Slide } from "react-slideshow-image";
import { projectsData } from "../../Data";
import ProjectExplanation from "../ProjectExplanation";
import ProjectSlide from "../ProjectSlide";
import "react-slideshow-image/dist/styles.css";
import css from "./ProjectsDesk.module.css";

function ProjectsDesk({ projectIndex, getProjectIndex }) {
  return (
    <div className={css.projectsDesk}>
      <Slide
        slidesToShow={1}
        slidesToScroll={1}
        defaultIndex={projectIndex}
        autoplay={false}
        indicators={true}
        canSwipe={true}
        onChange={ window.innerWidth <= 500? (previous, next) => {
                getProjectIndex(previous);
                getProjectIndex(next);
              }: ""
        }
        cssClass={css.slideContainer}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {projectsData.map((project, index) => {
          return (
            <ProjectSlide
              key={index}
              index={index}
              selected={projectIndex === index? true : false}
              projectImage={project.image}
              projectTitle={project.title}
              projectAddress={project.address}
              getProjectIndex={getProjectIndex}
            />
          );
        })}
      </Slide>
      <ProjectExplanation projectData={projectsData[projectIndex]} />
    </div>
  );
}

export default ProjectsDesk;
