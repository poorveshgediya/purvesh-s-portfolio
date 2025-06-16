import React from "react";
import "../style/Projects.css";
import { FaAddressBook, FaGithub, FaLink } from "react-icons/fa6";
import { FaAnchor } from "react-icons/fa";

function Projects({ Projects }) {
  return (
    <>
      <div className="main_div">
        {Projects.map((project, index) => (
          <div key={index} className="project1">
            <h2>{project.title}</h2>
            <img src={project.image} alt={`${project.title} Thumbnail`} />
            <p>{project.discripction}</p>
            <ul>
              {project.techstcak.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="links">
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
    </>
  );
}

export default Projects;
