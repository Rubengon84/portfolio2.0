import React from "react";
import css from "./Title.module.css"

function Title() {
  return (
    <div className={css.titleContainer}>
        <span className={css.portfolio}>Portfolio</span>
        <h1><span className={css.letterR}>&#x00AE;</span>uben Gonzalez
      </h1>
    </div>
  );
}

export default Title;
