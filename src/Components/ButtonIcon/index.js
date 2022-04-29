import React from "react";
import css from "./ButtonIcon.module.css";

function ButtonIcon({ link, image }) {
  return (
    <a href={link}>
      <div
        className={css.buttonIcon}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </a>
  );
}

export default ButtonIcon;
