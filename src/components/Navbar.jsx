import React from "react";
import style from "../style/navbar.module.css";
import p from "./../photo/p.svg";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <>
      <section id="mainnavbar">
        <div className={style.navbar}>
          <div>
            <Link to="/home">
            <img className={style.plogo} src={p} alt="p" />
            </Link>
          </div>
          <div className={style.navbuttons}>
            <li className={style.header}>
              <Link className={style.navbarlink} to="/home">
                Home
              </Link>
            </li>
            <li className={style.header}>
              <Link className={style.navbarlink} to="/projects">
                Projects
              </Link>
            </li>
            <li className={style.header}>
              <Link className={style.navbarlink} to="/blogs">
                Blog
              </Link>
            </li>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
