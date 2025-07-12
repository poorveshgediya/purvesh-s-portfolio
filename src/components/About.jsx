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
                words={[" Poorvesh.", " a Developer.", " Tech Enthusiast."," Little bit web3 content creator."]}
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
              hi, my self Purvesh Gediya from Rajkot. Completed my B.Tech in CSE (blockchain) field at Parul
University. Passionate about in web development & in web3 and blockchain technology ...
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
