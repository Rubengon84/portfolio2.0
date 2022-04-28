import React from "react";
import css from "./ProjectSlide.module.css";

function ProjectSlide({projectImage, getProjectIndex, index, projectTitle}) {
  return (
    <div className={css.eachSlide}>
      {/* <img src={projectImage} alt={projectImage}/> */}
      <div style={{ backgroundImage: `url(${projectImage})` }} onClick={() => getProjectIndex(index)}></div>
      <span>{projectTitle}</span>
    </div>
  );
}

export default ProjectSlide;
