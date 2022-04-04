import React from "react";
import SocialMedia from "../SocialMedia";
import Introduction from "../Introduction";
import Projects from "../Projects";
import css from "./Main.module.css"
// import Footer from "../Footer";

function Main() {
  return ( 
  <main className={css.mainContainer}>
    <SocialMedia />
    <Introduction />
    <Projects />
    {/* <Footer /> */}
  </main>
  )
}

export default Main;
