import React from "react";
import "./scrollAdv.css";

// Component for showing the option of scrolling down or up on the right side of the screen.
function ScrollAdv() {

  console.log(window.innerHeight);

  return (
    <div
      className="scrollContainer"
      onClick={() => {
        window.scrollTo({ top: (window.innerHeight * 2.1), behavior: "smooth" });
      }}
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
