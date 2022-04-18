import React, {useState} from "react";
import Tooltip from "../ToolTip";
import css from "./MaediaButton.module.css";

function MediaButton({ image, link, text }) {

  const [showsElement, setShowsElement] = useState(false);
  
  function toggleShows() {
    setShowsElement(()=>!showsElement)
  }
  // console.log(showsElement);

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
