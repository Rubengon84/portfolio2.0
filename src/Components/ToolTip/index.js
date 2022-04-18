import React from "react";
import css from "../MediaButton/MaediaButton.module.css" 

function Tooltip({ text, showsElement }) {
  console.log(showsElement)
  return (
    <span className={showsElement ? `${css.toolTipText} ${css.visible}` : `${css.toolTipText}`}>
      {text}
    </span>
  );
}

export default Tooltip;
