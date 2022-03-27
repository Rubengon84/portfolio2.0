import React from 'react'
import css from "../Projects/Projects.module.css"

function ProjectGridBlock( {center}) {
  return (
    <div
      className={center ? `${css.gridBlock} centerBlock` : `${css.gridBlock}`}
      id={center ? `centerBlock` : ""}
    ></div>
  );
}

export default ProjectGridBlock