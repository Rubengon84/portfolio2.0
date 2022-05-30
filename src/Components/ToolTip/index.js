import React from "react";
import css from "./ToolTip.module.css" 

// Tooltip component for the social media buttons, showing the link when the button has hovered.
function Tooltip({ text, showsElement, position }) {

  return (
    <span style={position? {position : position, top: "30%"} : {position : ""}}  className={showsElement ? `${css.toolTipText} ${css.visible}` : `${css.toolTipText}`}>
      {text}
    </span>
  );
}

export default Tooltip;
