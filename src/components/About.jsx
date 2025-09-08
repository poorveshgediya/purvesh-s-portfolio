import React, { useState } from "react";
import style from "../style/About.module.css";
import { Typewriter } from "react-simple-typewriter";
import profile1 from "../photo/Profile.jpg";

function About() {
  return (
    <>
      <section id="about">
        <div className={style.aboutsection}>
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
              <h3>About Me</h3>
              <p className={style.ptag}>
                Hello! I'm a developer from <span>Gujarat, India</span>. I love to enjoy
                programming and exploring technology specially <span>web3</span>. Completed one internship & currently doing <span>FSD</span> course at PWSkills.
              </p>
            <h3>What i do?</h3>
            <p className={style.ptag}>Completed one group project during internship & working on my personal project. I'm super active on <span>X</span> where I make content about web3 and crypto.</p>
            <p className={`${style.ptag} ${style.ptaglasttwo}`}>I'm an Ambassador at <span>#VaraNetwork</span> & Maxis at <span>#CoinDCX</span>.</p>
            <p className={`${style.ptag} ${style.ptaglasttwo}`}>I'm <span>open to work</span>, freelance, or collaborate. <span><a href="mailto:poorveshgediya@gmail.com">Contact Me</a></span> </p>
          </div>
          <div className={style.imgdiv}>
            <img className={style.image} src={profile1} alt="" />
            <span className={style.imgbackground} />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
