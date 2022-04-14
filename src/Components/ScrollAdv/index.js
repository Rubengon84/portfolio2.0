import React from 'react'
import css from "./ScrollAdv.module.css"

function ScrollAdv( {scrollArrows}) {

// console.log(document.querySelector("html").scrollHeight);

// function scrollBar() {
//   window.scrollTo(0, 1500);
// }

  return (
    <div
      className={
        scrollArrows === "down"
          ? `${css.scrollContainer}`
          : `${css.scrollContainer} ${css.scrollContainerUp}`
      }
      // onClick= {() => {scrollBar()}}
    >
      <span className={css.scrollSpan}>
        {scrollArrows === "down" ? "Projects" : "Home"}
      </span>
      <div
        className={
          scrollArrows === "down"
            ? `${css.arrowsDown}`
            : `${css.arrowsDown} ${css.arrowsUp}`
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default ScrollAdv