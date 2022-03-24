import MediaButton from "../MediaButton";
import React from "react";
import cvLogo from "../../Images/Icons/CV.png";
import linkedidLogo from "../../Images/Icons/linkedin.png";
import mailLogo from "../../Images/Icons/mail.png"
import githubLogo from "../../Images/Icons/github-logo.png"

function SocialMedia() {
  return (
    <aside>
      <MediaButton
        image={linkedidLogo}
        link="https://www.linkedin.com/in/rubengon84/"
      />
      <MediaButton image={githubLogo} link="https://github.com/Rubengon84" />
      <MediaButton image={mailLogo} link="" />
      <MediaButton image={cvLogo} />
    </aside>
  );
  }

export default SocialMedia;
