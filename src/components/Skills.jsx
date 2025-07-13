import React from "react";
import style from "../style/Skills.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Html from "programming-languages-logos/src/html/html.svg";
import css from "programming-languages-logos/src/css/css.svg";
import javascript from "programming-languages-logos/src/javascript/javascript.svg";

const skills = [
  {
    image: Html,
  },
  {
    image: css,
  },
  {
    image: javascript,
  },
];

function Skills() {
  return (
    <>
      <div>
        <Navbar />

        <div className={style.skillscontent}>
          {skills.map((skill, index) => (
            <>
              <div key={index} className={style.box}>
                <img
                  className={style.skillimage}
                  src={skill.image}
                  alt={`${skill.name} Thumbnail`}
                />
              </div>
            </>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Skills;
