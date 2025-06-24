import React from "react";
import style from "../style/Skills.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const skills = [
  {
    image: "img/cp-removebg-preview.png",
    name: "Competitive Programming",
    description:
      "Competitive programming is a sport of coding, where individuals engage in solving algorithmic challenges against the clock, showcasing their problem-solving skills and efficiency in crafting elegant and optimized solutions.",
  },
  {
    image: "img/fe-removebg-preview.png",
    name: "Front-end Development",
    description:
      "Front-end development is the art of bringing digital creativity to life, focusing on the user interface and user experience to seamlessly merge design with functionality, shaping the visual and interactive elements of websites.",
  },
  {
    image: "img/ml-removebg-preview.png",
    name: "Machine Learning",
    description:
      "Machine learning is a transformative field at the intersection of computer science and A.I., empowering systems to learn from data, recognize patterns, and make intelligent decisions, entering in a automated insights and problem-solving.",
  },
];

function Skills() {
  return (
    <>
      <div>
        <Navbar />
        
        <section className={style.skills} id="skills">
          <div className={style.skillscontent}>
            {skills.map((skill, index) => (
              <>
              <div key={index} className={style.box}>
                <img
                  className={style.skillimage}
                  src={skill.image}
                  alt={`${skill.name} Thumbnail`}
                />
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
              <br />
              </>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Skills;
