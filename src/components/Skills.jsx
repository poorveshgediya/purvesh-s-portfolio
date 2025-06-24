import React from "react";
import style from "../style/Skills.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Photo1 from "../photo/frontend-skill.png"
import Photo2 from "../photo/problem-skill.png";
import Photo3 from "../photo/html.png";
import Photo4 from "../photo/css.png";
import Photo5 from "../photo/JavaScript.png";

const skills = [
  {
    image: Photo1,
    name: "Front-end Development",
    description:  "Frontend development is all about bringing websites to life. It’s the part that users see and interact with - like buttons, menus, animations, and layouts. As a frontend developer, you use tools like HTML, CSS, and JavaScript exc.. to make websites look good, feel smooth, and work well on any device.",
  },
  {
    image: Photo2,
    name: "Problem Solving",
    description: "Problem-solving is about finding ways to fix things or make them better. As a beginner in coding, it means looking at a problem, understanding it step by step, and trying out different solutions until something works. It’s like solving a puzzle - with logic and creativity.",
  },
  {
    image: Photo3,
    name: "HTML",
    description: "Problem-solving is about finding ways to fix things or make them better. As a beginner in coding, it means looking at a problem, understanding it step by step, and trying out different solutions until something works. It’s like solving a puzzle - with logic and creativity.",
  },
  {
    image: Photo4,
    name: "CSS",
    description: "Problem-solving is about finding ways to fix things or make them better. As a beginner in coding, it means looking at a problem, understanding it step by step, and trying out different solutions until something works. It’s like solving a puzzle - with logic and creativity.",
  },
  {
    image: Photo5,
    name: "Java-Script",
    description: "Problem-solving is about finding ways to fix things or make them better. As a beginner in coding, it means looking at a problem, understanding it step by step, and trying out different solutions until something works. It’s like solving a puzzle - with logic and creativity.",
  }
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
