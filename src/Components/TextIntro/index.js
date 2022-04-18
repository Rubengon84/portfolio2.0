import React from 'react'
import css from './TextIntro.module.css';

// Component holding the text for the introduction component.
function TextIntro({text}) {
  return (
    <div className={css.textContainer}>
    <p>{text}</p>
    </div>
  )
}

export default TextIntro