import React from "react";
import "../Projects/Projects.css";

// Component to hold the images of the Projects and holds the functionality of opening that project in a new tab.
function ProjectGridBlock({ center, projectImage, getProjectIndex, index }) {
  return (
    <div className={center ? `gridBlock centerBlock` : `gridBlock`}>
        <img src={projectImage} alt={projectImage} className="projectImage" onClick={() => getProjectIndex(index)} />
    </div>
  );
}

export default ProjectGridBlock;
