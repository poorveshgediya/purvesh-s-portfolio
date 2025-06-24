import React from "react";
import style from "../style/Projects.module.css";
import { FaAddressBook, FaGithub, FaLink } from "react-icons/fa6";
import { FaAnchor } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Projects({ Projects }) {
  return (
    <>
      <div>
        <Navbar />
        <br />
        <div className={style.main_div}>
          {Projects.map((project, index) => (
            <div key={index} className={style.project1}>
              <h2>{project.title}</h2>
              <img src={project.image} alt={`${project.title} Thumbnail`} />
              <p>{project.discripction}</p>
              <ul>
                {project.techstcak.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className={style.links}>
                <a href={project.github} target="_blank">
                  GitHub - <FaGithub />
                </a>
                <a href={project.live} target="_blank">
                  Link - <FaLink />
                </a>
              </div>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Projects;
