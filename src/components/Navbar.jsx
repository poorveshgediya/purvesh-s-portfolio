import React from 'react'
import style from "../style/navbar.module.css";

function Navbar() {

  return (
    <>
    <section id="mainnavbar">
        <div className={style.navbar}>
          <li className={style.header}>
            <a className={style.navbarlink} href="#about">About</a>
          </li>
          <li className={style.header}>
            <a className={style.navbarlink} href="#projects">Projects</a>
          </li>
          <li className={style.header}>
            <a className={style.navbarlink} href="#experience">Experience</a>
          </li>
          <li className={style.header}>
            <a className={style.navbarlink} href="#skills">Skills</a>
          </li>
          <li className={style.header}>
            <a className={style.navbarlink} href="#">Resume</a>
          </li>
        </div>
    </section>
    </>
  )
}

export default Navbar