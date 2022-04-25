import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SocialMedia from "../SocialMedia";
import Home from "../Home";
import ProjectsDesk from "../ProjectsDesk";
import css from "./Main.module.css";

// The main component contains all the components of the SPA except the Footer.
function Main() {
  return (
    <main className={css.mainContainer}>
      <SocialMedia />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsDesk />} />
      </Routes>
    </main>
  );
}

export default Main;
