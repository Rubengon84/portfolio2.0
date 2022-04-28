import React from "react";
import css from "./ProjectExplanation.module.css";

function ProjectExplanation({ projectData }) {
  return (
    <section className={css.explanationContainer}>
      <div className={css.description}>
        <p>{projectData.description}</p>
      </div>
      <div className={css.contentContainer}>
        <div
          className={css.contentImage}
          style={{ backgroundImage: `url(${projectData.image})` }}
        ></div>
        <div>
          <div>
            <h3>Links</h3>
            <a href={projectData.links.deployed}>
              <span>{projectData.links.deployed}</span>
            </a>
            <ul>
              {projectData.links.gitHub.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link}>{link}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3>Tech Stack</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectExplanation;
