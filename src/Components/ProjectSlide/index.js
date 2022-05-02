import React from "react";
import css from "./ProjectSlide.module.css";

function ProjectSlide({ projectImage, getProjectIndex, index, projectTitle, selected }) {
  return (
    <div
      className={
        selected ? `${css.eachSlide} ${css.selected}` : `${css.eachSlide}`
      }
    >
      {/* <img src={projectImage} alt={projectImage}/> */}
      <div
        className={css.slideImage}
        style={{ backgroundImage: `url(${projectImage})` }}
        onClick={() => getProjectIndex(index)}
      >
        <div
          className={selected ? "" : `${css.slideBlind}`}
        ></div>
      </div>
      <span>{projectTitle}</span>
    </div>
  );
}

export default ProjectSlide;
