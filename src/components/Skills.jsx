import React from "react";
import style from "../style/Skills.module.css";

const skills = ["React", "JavaScript", "CSS", "HTML", "Blockchian", "Solidity"];

function Skills() {
  return (
    <>
      <div className={style.main_div}>
        {skills.map((skill, index) => (
          <div key={index} className={style.skillname}>
            <li>{skill}</li>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
