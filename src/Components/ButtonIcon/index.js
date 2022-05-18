import React, {useState} from "react";
import css from "./ButtonIcon.module.css";
import Tooltip from "../ToolTip";

function ButtonIcon({ link, image }) {
  const [showElement, setShowElement] = useState(true);
  // function to toggle the showsElement state between true and false for using it tho check when the MediaButton has hovered.
  function toggleShows2() {
    setShowElement(() => !showElement);
  }

  return (
    // <div className={css.buttonContainer}>
    <a href={link} target="_blank" rel="noreferrer" >
      <Tooltip showsElement={showElement} text={"Hello Link"} />
      <div
        className={css.buttonIcon}
        onMouseEnter={toggleShows2}
        onMouseLeave={toggleShows2}
        style={{ backgroundImage: `url(${image})` }}>
      </div>
    </a>
    // </div>
  );
}

export default ButtonIcon;
