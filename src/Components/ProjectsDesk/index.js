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
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 4,
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
              projectImage={project.image}
              projectAddress={project.address}
              getProjectIndex={getProjectIndex}
            />
          );
        })}
      </Slide>
      <h2>{projectsData[projectIndex].title}</h2>
      <ProjectExplanation projectData={projectsData[projectIndex]} />
    </div>
  );
}

export default ProjectsDesk;
