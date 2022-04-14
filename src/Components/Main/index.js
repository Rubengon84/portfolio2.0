import React, { useState } from "react";
import SocialMedia from "../SocialMedia";
import Introduction from "../Introduction";
import Projects from "../Projects";
import ScrollAdv from "../ScrollAdv";
import css from "./Main.module.css"
// import Footer from "../Footer";

function Main() {

  const [scrollArrows, setScrollArrows] = useState("down");
  
  function changeArrows(value) {
    setScrollArrows(value);
  }


  return ( 
  <main className={css.mainContainer}>
    <SocialMedia />
    <Introduction />
    <ScrollAdv scrollArrows={scrollArrows} />
    <Projects changeArrows={changeArrows} />
  </main>
  )
}

export default Main;
