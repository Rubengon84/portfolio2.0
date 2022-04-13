import React from 'react'
import css from './TextIntro.module.css';

function TextIntro({text}) {
  return (
    <div className={css.textContainer}>
    <p>{text}</p>
    </div>
  )
}

export default TextIntro