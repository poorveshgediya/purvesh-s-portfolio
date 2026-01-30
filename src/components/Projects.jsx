import React from "react";
import style from "../style/Projects.module.css";
import livepreview from "../photo/live-preview.svg";
import github from "../photo/github.svg";
import { projectdata } from "../js/projectdatajson";
import { useLocation } from "react-router-dom";

function Projects({limit}) {
  const projecttitlename = useLocation();
  const DisplayTopFourProject = limit ? projectdata.slice(0,limit) : projectdata;

  return (
    <>
      <div className={style.projectsection}>
        <h2 className={style.title}>{projecttitlename.pathname !== '/projects'? 'Featured Projects':'All Projects'}</h2>
        <div className={style.main_div}>
          {DisplayTopFourProject.map((project, index) => (
            <div key={index} className={`transition-all duration-300 
            hover:shadow-xl hover:-translate-y-1`}>
              <img
                className={style.projectimg}
                src={project.image}
                alt={`${project.title} Thumbnail`}
              />
              <h3 className={style.projecttitle}>{project.title}</h3>
              <h3 className={style.techstcak}>{project.techstcak}</h3>
              <p className={style.projectdiscripction}>
                {project.discripction}
              </p>
              <div className={style.links}>
                <a href={project.live} target="_blank">
                  <img src={livepreview} alt="" /> <span>Live Preview</span>
                </a>
                <a href={project.github} target="_blank">
                  <img src={github} alt="" /> <span>Repo Url</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
