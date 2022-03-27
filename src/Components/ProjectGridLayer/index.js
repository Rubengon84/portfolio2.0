import React from "react";
import ProjectGridBlock from "../ProjectGridBlock";
import css from "../Projects/Projects.module.css";

function ProjectGridLayer({ centerPiece }) {
  return (
    <div
      className={
        centerPiece ? `${css.gridLayer} centerPiece` : `${css.gridLayer}`
      }
      id = {centerPiece ? `centerPiece` : ""}
    >
      <ProjectGridBlock center={centerPiece ? true : false} />
    </div>
  );
}

export default ProjectGridLayer;
