import React from "react";
import "./scrollAdv.css";

// Component for showing the option of scrolling down or up on the right side of the screen.
function ScrollAdv() {

  return (
    <div
      className="scrollContainer"
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
