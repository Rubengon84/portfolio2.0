import React from "react";
import Title from "../Title";
import TextIntro from "../TextIntro";
import css from "./Introduction.module.css";

function Introduction() {
  return (
    <section className={css.introductionContainer}>
      <Title />
      <TextIntro
        text={`I am a highly passionate committed full-stack software engineer, who enjoys new challenges, innovating, and learning and trying new technologies. I am great at solving problems, breaking them down, looking for patterns, modelling in the real world, planning the solution by algorithm thinking and making reusable tested code solutions.
Comfortable working on my own, as working on pair or teams, I have been recently experienced working for 6 months on a weekly swapping pair programming and some different team environment projects following Agile development process practicing Scrum, Kamban, CI/CD… in between others techniques and using GitHub as version control.
On my wide range of tech skills, I would highlight HTML5, CSS, JavaScript, Node.js, React, Express, Rest API, PostgreSQL, Jest, Chai-Mocha, super test, Cypress and TDD.
I hope you will enjoy my portfolio.`}
      />
    </section>
  );
}

export default Introduction;
