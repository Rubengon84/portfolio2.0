import React, {useState} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SocialMedia from "../SocialMedia";
import Home from "../Home";
import ProjectsDesk from "../ProjectsDesk";
import css from "./Main.module.css";

// The main component contains all the components of the SPA except the Footer.
function Main() {


 const { isAuthenticated, user, isLoading, state } = useAuth0();  
console.log("state",state);

console.log("isAuthen",isAuthenticated);
console.log("user",user);
console.log("isloading",isLoading);


const [projectIndex, setProjectIndex] = useState(0);


console.log("index",projectIndex);

function getProjectIndex(index) {
  setProjectIndex(index);
}

  return (
    <main className={css.mainContainer}>
      <SocialMedia />
      <Routes>
        <Route path="/" element={<Home getProjectIndex={getProjectIndex} />} />
        <Route exact path="/projects/:projectIndex" element={<ProjectsDesk projectIndex={projectIndex} getProjectIndex={getProjectIndex} />} />
      </Routes>
    </main>
  );
}

export default Main;
