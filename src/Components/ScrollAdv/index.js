import React, { useState, useEffect } from "react";
import "./scrollAdv.css";

// Component for showing the option of scrolling down or up on the right side of the screen.
function ScrollAdv() {
  // state to know when the scroll bar is down or up.
  const [scrollTop, setScrollTop] = useState(true);
  // useEffect hook for checking whn the scroll is at the top or at the buttom
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > (window.innerHeight * 1.6)) {
        setScrollTop(false);
      } else {
        setScrollTop(true);
      }
    });
  }, []);
  // set onClick to scroll the page up or dow depending on the scrollTop state
  return (
    <div
      className="scrollContainer"
      onClick={() => {
        window.scrollTo({
          top: scrollTop
            ? window.innerHeight * 2.1
            : window.innerHeight * -2.1,
          behavior: "smooth",
        });
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
