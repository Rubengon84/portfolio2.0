import React from "react";
import ProjectGridBlock from "../ProjectGridBlock";
import "../Projects/Projects.css";

// Component to hold the images and give enough space to make the functionality of shrink or grow when the user scrolls down or up.
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
