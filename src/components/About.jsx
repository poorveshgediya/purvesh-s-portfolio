import React, { useState } from "react";
import style from "../style/About.module.css";
import { Typewriter } from "react-simple-typewriter";
import profile1 from "../photo/Profile1.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

function introduction() {
  return (
    <>
      <div>
        <Navbar />
        <br />
        <div className={style.aboutsection}>
              <img className={style.image} src={profile1} alt="" />
          <h1 className={style.heading}>
            Hey, I'm
            <span className={style.words}>
              <Typewriter
                words={[" Poorvesh.", " a Developer.", " Tech Enthusiast."]}
                loop={true}
                curser
                curserStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            <br />
            <br />
            <span className={style.aboutme}>
              hi, myself Purvesh gediya From Rajkot, Gujarat. Always eager
              to learn in new technology's...
            </span>
          <br />
          <br />  
            <a href="/Purvesh_Gediya-Resume.pdf" download className={style.resume}>
        Resume ⬇
      </a>
          </h1>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default introduction;
