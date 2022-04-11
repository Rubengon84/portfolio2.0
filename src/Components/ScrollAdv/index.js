import React from 'react'
import css from "./ScrollAdv.module.css"

function ScrollAdv() {
  return (
    <div className={css.scrollContainer}>
      <span className={css.scrollSpan}>Projects</span>
      <div className={css.scrollArrows}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default ScrollAdv