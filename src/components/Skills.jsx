import React from "react";
import style from "../style/Skills.module.css";
import html from "./../photo/html.svg";
import css from "./../photo/css.svg";
import tailwind from "./../photo/tailwind.svg";
import bootstrap from "./../photo/bootstrap.svg";
import javascript from "./../photo/javascript.svg";
import react from "./../photo/reactjs.svg";
import mongo from "./../photo/mongo.svg";
import nodejs from "./../photo/nodejs.svg";
import zod from "./../photo/zod.svg";

const skills = [
  {
    image: html,
    name: "HTML",
  },
  {
    image: css,
    name: "CSS",
  },
  {
    image: tailwind,
    name: "tailwind",
  },
  {
    image: bootstrap,
    name: "bootstrap",
  },
  {
    image: javascript,
    name: "JavaScript",
  },
  {
    image: react,
    name: "ReactJS",
  },
  {
    image: zod,
    name: "Zod",
  },
  {
    image: nodejs,
    name: "NodeJS",
  },
  {
    image: mongo,
    name: "MongoDB",
  },
];

const repeatedSkills = [...skills, ...skills]

function Skills() {
  return (
    <>
      <div className={style.skills}>
        <h3>Tools that I have used</h3>
        <div className={style.skillscontent}>
          {repeatedSkills.map((skill, index) => (
            <React.Fragment key={index}>
              <div className={style.box}>
                <img
                  className={style.skillimage}
                  src={skill.image}
                  alt={`${skill.name} Thumbnail`}
                />
                <p className={style.skillname}>{skill.name}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
