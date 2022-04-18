import React from "react";
import "../Projects/Projects.css";

// Component to hold the images of the Projects and holds the functionality of opening that project in a new tab.
function ProjectGridBlock({ center, projectImage, link }) {
  return (
    <div className={center ? `gridBlock centerBlock` : `gridBlock`}>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <img src={projectImage} alt={projectImage} className="projectImage" />
        </a>
      ) : (
        <img src={projectImage} alt={projectImage} className="projectImage" />
      )}
    </div>
  );
}

export default ProjectGridBlock;
