import React from 'react'
import { projectsData } from '../../Data'
import css from "./ProjectsDesk.module.css"


function ProjectsDesk({projectIndex}) {
 

  return (
    <div className={css.projectsDesk}>
      <p>ProjectsDesk</p>
      <img
        src={projectsData[projectIndex].image}
        alt={projectsData[projectIndex].title}
      />
    </div>
  );
}

export default ProjectsDesk