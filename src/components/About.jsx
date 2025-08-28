import React, { useState } from "react";
import style from "../style/About.module.css";
import { Typewriter } from "react-simple-typewriter";
import profile1 from "../photo/Profile1.jpg";

function About() {
  return (
    <>
      <section id="about">
        <div className={style.aboutsection}>
          <img className={style.image} src={profile1} alt="" />
          <div className={style.shortbio}>
            <h1 className={style.heading}>
              Hey, I'm
              <span className={style.words}>
                <Typewriter
                  words={[
                    " Poorvesh.",
                    " a Developer.",
                    " Tech Enthusiast.",
                    " Little bit web3 content creator.",
                  ]}
                  loop={true}
                  curser
                  curserStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className={style.aboutme}>
              Hi, my self Purvesh Gediya from Rajkot. Completed my B.Tech in CSE
              (blockchain) field at Parul University. Frontend Developer skilled
              in HTML/CSS, JavaScript, and ReactJS, with a focus on building
              clean and responsive user interfaces. exploring blockchain
              technologies and passionate about learning new tools...
            </p>
            <a
              href="/Purvesh_Gediya-Resume.pdf"
              download
              className={style.resume}
            >
              Resume ⬇
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
