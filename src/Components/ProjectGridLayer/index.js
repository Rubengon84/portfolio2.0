import React from "react";
import ProjectGridBlock from "../ProjectGridBlock";
import "../Projects/Projects.css";

function ProjectGridLayer({ centerPiece, projectImage }) {
  return (
    <div
      className={
        centerPiece ? `gridLayer centerPiece` : `gridLayer`
      }
    >
      <ProjectGridBlock projectImage={projectImage} center={centerPiece ? true : false} />
    </div>
  );
}

export default ProjectGridLayer;
