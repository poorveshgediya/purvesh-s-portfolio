import React from "react";
import "../style/Skills.css";

const skills = ["React", "JavaScript", "CSS", "HTML", "Blockchian", "Solidity"];

function Skills() {
  return (
    <>
      <div className="main_div">
        {skills.map((skill, index) => (
          <div key={index} className="skillname">
            <li>{skill}</li>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
