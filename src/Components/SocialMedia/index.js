import React from "react";
import MediaButton from "../MediaButton";
import cvLogo from "../../Images/Icons/CV.png";
import linkedidLogo from "../../Images/Icons/linkedin.png";
import homeLogo from "../../Images/Icons/home.png";
import mailLogo from "../../Images/Icons/mail.png";
import githubLogo from "../../Images/Icons/github-logo.png";
import css from "./SocialMedia.module.css";

// Container component to hold all the social media buttons.
function SocialMedia() {
  console.log(window.location.pathname);

  return (
    <aside className={css.socialMediaContainer}>
      <MediaButton
        image={linkedidLogo}
        link="https://www.linkedin.com/in/rubengon84/"
        text="Linkedin"
      />
      <MediaButton
        image={githubLogo}
        link="https://github.com/Rubengon84"
        text="GitHub"
      />
      <MediaButton
        image={mailLogo}
        link="mailto:rubengon.uk@gmail.com"
        text="Mail to Ruben Gonzalez"
      />
      <MediaButton
        image={cvLogo}
        link="https://drive.google.com/file/d/1cY4ZltQA8iNMpazutv9qRDod0ha7FD8H/view?usp=sharing"
        text="CV"
      />
      {window.location.pathname === "/projects" ? (
        <MediaButton image={homeLogo} noTarget={true} link="/" text="Home" />
      ) : (
        ""
      )}
    </aside>
  );
}

export default SocialMedia;
