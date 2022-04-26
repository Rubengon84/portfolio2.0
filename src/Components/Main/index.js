import React, {useState} from "react";
import { Routes, Route} from "react-router-dom";
import SocialMedia from "../SocialMedia";
import Home from "../Home";
import ProjectsDesk from "../ProjectsDesk";
import css from "./Main.module.css";

// The main component contains all the components of the SPA except the Footer.
function Main() {

const [projectIndex, setProjectIndex] = useState(0);
console.log(projectIndex);

function getProjectIndex(index) {
  setProjectIndex(index);
}

  return (
    <main className={css.mainContainer}>
      <SocialMedia />
      <Routes>
        <Route path="/" element={<Home getProjectIndex={getProjectIndex} />} />
        <Route path="/projects" element={<ProjectsDesk projectIndex={projectIndex} />} />
      </Routes>
    </main>
  );
}

export default Main;
