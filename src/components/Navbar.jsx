import React from 'react'
import style from "../style/navbar.module.css";
import { Link } from 'react-router-dom';
function navbar() {


  return (
    <>
    <div>
        <div className={style.navbar}>
          <li className={style.header}>
            <Link to="/About">About</Link>
          </li>
          <li className={style.header}>
            <Link to="/Projects">Projects</Link>
          </li>
          <li className={style.header}>
            <Link to="/Experience">Experience</Link>
          </li>
          <li className={style.header}>
            <Link to="/Skills ">Skills</Link>
          </li>
          <li className={style.header}>
            <Link to="/Resume">Resume</Link>
          </li>
        </div>
    </div>
    </>
  )
}

export default navbar