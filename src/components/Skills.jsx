import React from "react";
import style from "../style/Skills.module.css";
import { skills } from "../js/skillsdatajson";

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
