import React from 'react'
import style from "../style/navbar.module.css";

function navbar() {


  return (
    <>
    <div>
        <div className={style.navbar}>
          <li className={style.header}>
            <a href="About">About</a>
          </li>
          <li className={style.header}>
            <a href="Projects">Projects</a>
          </li>
          <li className={style.header}>
            <a href="Experience">Experience</a>
          </li>
          <li className={style.header}>
            <a href="Skills ">Skills</a>
          </li>
          <li className={style.header}>
            <a href="Resume">Resume</a>
          </li>
        </div>
    </div>
    </>
  )
}

export default navbar