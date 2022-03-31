import React from "react";
import ProjectGridBlock from "../ProjectGridBlock";
import "../Projects/Projects.css";

function ProjectGridLayer({ centerPiece, projectImage, link }) {
  return (
    <div
      className={
        centerPiece ? `gridLayer centerPiece` : `gridLayer`
      }
    >
      <ProjectGridBlock link={link} projectImage={projectImage} center={centerPiece ? true : false} />
    </div>
  );
}

export default ProjectGridLayer;
