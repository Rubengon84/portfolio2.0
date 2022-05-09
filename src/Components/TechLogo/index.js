import React from 'react'
import css from "./TechLogo.module.css";
//import { techStack } from '../../Data';

function TechLogo({techLogo}) {
  console.log(techLogo);
  return (
    <div className={css.techLogoContainer}>
      <img href={techLogo} alt="representation of the tech used" />
    </div>
  )
}

export default TechLogo;