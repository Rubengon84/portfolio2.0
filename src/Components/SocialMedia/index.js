import React from "react";
import MediaButton from "../MediaButton";
import cvLogo from "../../Images/Icons/CV.png";
import linkedidLogo from "../../Images/Icons/linkedin.png";
import mailLogo from "../../Images/Icons/mail.png"
import githubLogo from "../../Images/Icons/github-logo.png"
import css from "./SocialMedia.module.css";

function SocialMedia() {
  return (
    <aside className={css.socialMediaContainer}>
      <MediaButton
        image={linkedidLogo}
        link="https://www.linkedin.com/in/rubengon84/"
      />
      <MediaButton image={githubLogo} link="https://github.com/Rubengon84" />
      <MediaButton image={mailLogo} link="mailto:rubengon.uk@gmail.com" />
      <MediaButton
        image={cvLogo}
        link="https://drive.google.com/file/d/1cY4ZltQA8iNMpazutv9qRDod0ha7FD8H/view?usp=sharing"
      />
    </aside>
  );
  }

export default SocialMedia;
