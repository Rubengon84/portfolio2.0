import React from "react";
import SocialMedia from "../SocialMedia";
import Introduction from "../Introduction";
import Projects from "../Projects";
import css from "./Main.module.css"

function Main() {
  return ( 
  <main className={css.mainContainer}>
    <SocialMedia />
    <Introduction />
    <Projects />
  </main>
  )
}

export default Main;
