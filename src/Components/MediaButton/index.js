import React from "react";
import css from "./MaediaButton.module.css";

function MediaButton({ image, link }) {
  return (
    <div className={css.socialMediaContainer}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={css.imageLogoContainer}>
          <img
            className={css.logoImage}
            src={image}
            alt={`media to ${image}`}
          />
        </div>
      </a>
    </div>
  );
}

export default MediaButton;
