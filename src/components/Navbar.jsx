import React from "react";
import style from "../style/navbar.module.css";
import p from "./../photo/p.svg";

function Navbar() {
  return (
    <>
      <section id="mainnavbar">
        <div className={style.navbar}>
          <div>
            <img className={style.plogo} src={p} alt="p" />
          </div>
          <div className={style.navbuttons}>
            <li className={style.header}>
              <a className={style.navbarlink} href="#">
                Home
              </a>
            </li>
            <li className={style.header}>
              <a className={style.navbarlink} href="#projects">
                Projects
              </a>
            </li>
            <li className={style.header}>
              <a className={style.navbarlink} href="#">
                Blog
              </a>
            </li>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
