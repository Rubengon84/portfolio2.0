import React from "react";
import Title from "../Title";
import css from "./Introduction.module.css";

function Introduction() {
  return (
  <section className={css.introductionContainer}>
    <Title />
  </section>
  )
}

export default Introduction;
