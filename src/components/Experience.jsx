import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import style from "../style/experience.module.css";
import logo1 from "../photo/cct.png";

const experience = [
  {
    logo: logo1,
    company: "Calanjiyam Consultancies and Technologies",
    position: "Web developer Intern | (April -  June 2025)",
    description:
      "• Contributing in our group project which is “ web based coffee billing system ” \n • I’m handle the “ product management module ”.\n • Created UI for display product with details and also can add manually and using HTML-CSS, JavaScript, PHP, Mysql.",
  }
];

function Experience() {
  return (
    <>
      <Navbar />
      <br />
      <section className={style.experience} id="experience">
        <div className={style.experiencecontent}>
          {experience.map((experience, index) => (
            <>
            <div key={index} className={style.box}>
              <img
                className={style.cctlogo}
                src={experience.logo}
                alt="Company Logo"
              />
              <h3>{experience.company}</h3>
              <h4>{experience.position}</h4>
              <br />
              <p>
                {experience.description.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <br />
            </>
          ))}
        </div>
      </section>

      {/* 
          <div className={style.box}>
            <img className={style.cctlogo} src="../src/photo/cct.png" />
            <h3>Calanjiyam Consultancies and Technologies</h3>
            <h4>Web developer Intern</h4>
            <br />
            <p>
              • Contributing in our group project which is “ web based coffee
              billing system ” 
              <br />
              • I’m handle the “ product management module ”.
              <br /> 
              • Created UI for display product with details and also can add
              manually and using HTML-CSS, JavaScript, PHP, Mysql.
            </p>
          </div> */}
      <Footer />
    </>
  );
}

export default Experience;
