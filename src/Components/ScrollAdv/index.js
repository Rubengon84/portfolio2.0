import React from 'react'
import css from "./ScrollAdv.module.css"

function ScrollAdv( {scrollArrows}) {
  return (
    <div className={css.scrollContainer}>
      <span className={css.scrollSpan}>{scrollArrows === "down"? "Projects" : "Home" }</span>
      <div className={ scrollArrows === "down"? `${css.scrollArrows}` : `${css.scrollArrows} ${css.arrowsUP}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default ScrollAdv