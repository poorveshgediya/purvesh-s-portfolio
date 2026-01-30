import React from "react";
import style from "../style/navbar.module.css";
import p from "./../photo/p.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section id="mainnavbar">
        <div className={style.navbar}>
          <div>
            <NavLink to="/home">
              <img className={style.plogo} src={p} alt="p" />
            </NavLink>
          </div>
          <div className={style.navbuttons}>
            <li className={style.header}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#00adb5" : "whitesmoke",
                })}
                className={style.navbarlink}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className={style.header}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#00adb5" : "whitesmoke",
                })}
                className={style.navbarlink}
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li className={style.header}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#00adb5" : "whitesmoke",
                })}
                className={style.navbarlink}
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
