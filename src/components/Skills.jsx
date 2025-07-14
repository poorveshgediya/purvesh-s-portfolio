import React from "react";
import style from "../style/Skills.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import problemsolving from "../photo/problemsolving.png";
import contentcreation from "../photo/content.png";
import Htmlcss from "../photo/html-css.png";
import javascript from "../photo/java-script.png";
import react from "../photo/react.png";
import php from "../photo/php.png";
import mysql from "../photo/mysql.png";
import web3 from "../photo/web3.png";
import blockchain from "../photo/blockchain.png";

const skills = [
  {
    image: problemsolving,
    name: "Problem-Solving",
  },

  {
    image: Htmlcss,
    name: "HTML & CSS",
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
    image: php,
    name: "PHP",
  },
  {
    image: mysql,
    name: "MySql",
  },
  {
    image: web3,
    name: "Web3",
  },
  {
    image: blockchain,
    name: "Blockchain",
  },
  {
    image: contentcreation,
    name: "Content-Creation",
  },
];

function Skills() {
  return (
    <>
      <div>
        <Navbar />

        <div className={style.skillscontent}>
          {skills.map((skill, index) => (
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

        <Footer />
      </div>
    </>
  );
}

export default Skills;
