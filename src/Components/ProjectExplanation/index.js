import React from "react";
import css from "./ProjectExplanation.module.css";
import ButtonIcon from "../ButtonIcon";
import gitRepo from "../../Images/Icons/git-repo.png"
import linkImage from "../../Images/Icons/website-icon.png"
import TechLogo from "../TechLogo";
import { techStack } from "../../Data";

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
          style={{ backgroundImage: `url(${projectData.gif})` }}
        >  
        </div>
        <div className={css.linksTechContainer}>
          <div>
            <h3>Links</h3>
            <div className={css.linksContainer}>
              <ButtonIcon link={projectData.links.deployed} image={linkImage} text={"Link to App"} />
              <ul>
                {projectData.links.gitHub.map((link, index) => {
                  return (
                    <li key={index}>
                      <ButtonIcon
                        link={link}
                        image={gitRepo}
                        text={"Link to Repo"}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>

          <h3>Tech Stack</h3>
          <div className={css.techContainer}>
            {projectData.techStack.map((tech, index) => {
              return <TechLogo techLogo={techStack[`${tech}`]} key={index} />;
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectExplanation;
