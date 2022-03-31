import React from "react";
import "../Projects/Projects.css";

function ProjectGridBlock({ center, projectImage, link }) {
  return (
    <div
      onClick={() => {
        console.log("hi");
      }}
      className={center ? `gridBlock centerBlock` : `gridBlock`}
    >
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
