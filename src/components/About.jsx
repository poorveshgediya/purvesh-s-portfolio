import React, { useState } from "react";
import "../style/About.css";
import { Typewriter } from "react-simple-typewriter";
import profile1 from "../photo/Profile1.jpg";

function introduction() {
  return (
    <>
      <div>
        <div className="navbar">
          <li className="header">
            <a href="Projects">Project</a>
          </li>
          <li className="header">
            <a href="Experience">Experience</a>
          </li>
          <li className="header">
            <a href="Skills ">Skills</a>
          </li>
          <li className="header">
            <a href="">Resume</a>
          </li>
        </div>
        <hr />
        <div className="aboutsection">
          <h1 className="heading">Hey, I'm 
          <span className="words">
          <Typewriter
          words={[
            " Poorvesh.",
            " a Developer.",
            " Tech Enthusiast.",
          ]}
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
          hi, myself Purvesh gediya. I'm from Rajkot,Gujarat. Always eager to learn in technology... 
          </h1>
          <img className='image' src={profile1} alt="" />
        </div>
        </div>
    </>
  );
}

export default introduction;
