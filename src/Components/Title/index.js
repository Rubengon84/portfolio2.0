import React from "react";
import css from "./Title.module.css"

function Title() {
  return (
    <div>
      <h1>
        Portfolio
        <span className={css.letterR}>&#x00AE;</span>uben Gonzalez
      </h1>
    </div>
  );
}

export default Title;
