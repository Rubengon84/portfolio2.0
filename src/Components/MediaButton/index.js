import React, {useState} from "react";
import Tooltip from "../ToolTip";
import css from "./MaediaButton.module.css";

// MeadiButton component holds the link to access any social media account.
// contains an image and a Tooltip component that is activated when the button it is been hovered.
function MediaButton({ image, link, text }) {

  const [showsElement, setShowsElement] = useState(false);
  // function to toggle the showsElement state between true and false for using it tho check when the MediaButton has hovered.
  function toggleShows() {
    setShowsElement(()=>!showsElement)
  }

  return (
    <div className={css.socialMediaContainer}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={css.imageLogoContainer}
             onMouseEnter={toggleShows}
             onMouseLeave={toggleShows}>
          <Tooltip showsElement={showsElement} text={text}/>
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
