import React from "react";
import css from "./ProjectExplanation.module.css";
import ButtonIcon from "../ButtonIcon";
import gitRepo from "../../Images/Icons/git-repo.png"
import linkImage from "../../Images/Icons/website-icon.png"

function ProjectExplanation({ projectData }) {
  return (
    <section className={css.explanationContainer}>
      <h2>{projectData.title}</h2>
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
            <ButtonIcon link={projectData.links.deployed} image={linkImage} />
            <ul>
              {projectData.links.gitHub.map((link, index) => {
                return (
                  <li key={index}>
                    <ButtonIcon link={link} image={gitRepo} />
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
