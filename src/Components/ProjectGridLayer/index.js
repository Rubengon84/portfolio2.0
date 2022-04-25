import React from "react";
import { Link } from "react-router-dom";
import ProjectGridBlock from "../ProjectGridBlock";
import "../Projects/Projects.css";

// Component to hold the images and give enough space to make the functionality of shrink or grow when the user scrolls down or up.
function ProjectGridLayer({ centerPiece, projectImage }) {
  return (
    <div
      className={
        centerPiece ? `gridLayer centerPiece` : `gridLayer`
      }
    >
    <Link to="/projects">
      <ProjectGridBlock projectImage={projectImage} center={centerPiece ? true : false} />
    </Link>
    </div>
  );
}

export default ProjectGridLayer;
