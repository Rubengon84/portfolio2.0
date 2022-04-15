import React from "react";
import SocialMedia from "../SocialMedia";
import Introduction from "../Introduction";
import Projects from "../Projects";
import ScrollAdv from "../ScrollAdv";
import css from "./Main.module.css"
// import Footer from "../Footer";

function Main() {

  return ( 
  <main className={css.mainContainer}>
    <SocialMedia />
    <ScrollAdv />
    <Introduction />
    <Projects />
  </main>
  )
}

export default Main;
