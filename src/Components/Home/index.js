import React from "react";
import Introduction from "../Introduction";
import Projects from "../Projects";
import ScrollAdv from "../ScrollAdv";
import css from "./Home.module.css";

function Home({getProjectIndex}) {


  return (
    <div className={css.homeContainer}>
      <ScrollAdv />
      <Introduction />
      <Projects getProjectIndex={getProjectIndex}/>
    </div>
  );
}

export default Home;
