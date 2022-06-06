import React from 'react'
import css from "./TechLogo.module.css";

function TechLogo({techLogo}) {
  return (
    <div
      className={css.techLogoContainer}
      style={{ backgroundImage: `url(${techLogo})` }}
    >
      {/* <img href={techLogo} alt="representation of the tech used" /> */}
    </div>
  );
}

export default TechLogo;