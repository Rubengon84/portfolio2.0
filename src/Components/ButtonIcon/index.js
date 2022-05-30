import React, {useState} from "react";
import css from "./ButtonIcon.module.css";
import Tooltip from "../ToolTip";

function ButtonIcon({ link, image, text }) {
  const [linkShowElement, setLinkShowElement] = useState(false);
  // function to toggle the showsElement state between true and false for using it tho check when the MediaButton has hovered.
  function toggleShows2() {
    setLinkShowElement(() => !linkShowElement);
  }

  return (

    <a href={link} target="_blank" rel="noreferrer" >
      <div
        className={css.buttonIcon}
        onMouseEnter={toggleShows2}
        onMouseLeave={toggleShows2}
        style={{ backgroundImage: `url(${image})` }}>
      <Tooltip position={"relative"} showsElement={linkShowElement} text={text} />
      </div>
    </a>

  );
}

export default ButtonIcon;
