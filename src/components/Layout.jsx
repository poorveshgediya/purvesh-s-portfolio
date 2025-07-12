import React from "react";
import { Outlet } from "react-router-dom";
import style from "../style/layout.module.css";

function Layout() {
  return (
    <>
      <div className={style.background}></div>
      <div className={style.pageContent}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
