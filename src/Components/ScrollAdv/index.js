import React from "react";
import "./scrollAdv.css";

function ScrollAdv() {
  // console.log(document.querySelector("html").scrollHeight);

  // function scrollBar() {
  //   window.scrollTo(0, 1500);
  // }

  return (
    <div
      className="scrollContainer"
      // onClick= {() => {scrollBar()}}
    >
      <span className="scrollSpan">Projects</span>
      <div className="arrowsDown">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default ScrollAdv;
