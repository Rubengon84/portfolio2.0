import React from 'react'
import "../Projects/Projects.css";

function ProjectGridBlock( {center, projectImage}) {
  return (
    <div
      className={center ? `gridBlock centerBlock` : `gridBlock`}
    >
    <img src={projectImage} alt={projectImage} className="projectImage"/>  
    </div>
  );
}

export default ProjectGridBlock