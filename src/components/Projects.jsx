import React from "react";
import style from "../style/Projects.module.css";
import { FaGithub, FaLink } from "react-icons/fa6";
import Photo1 from "../photo/calculate.png";
import Photo2 from "../photo/coffee.png";
import Photo4 from "../photo/portfolio.png";
import livepreview from "../photo/live-preview.svg";
import github from "../photo/github.svg";

function Projects() {
  const projectdata = [
    {
      title: "React-Calculator",
      image: Photo1,
      discripction:
        "Built basic functional calculator using React that performs arithmetic operations & implemented component-based architecture in React.",
      techstcak: "HTML-CSS / JavaScript / React",
      github: "https://github.com/poorveshgediya/Calculator",
      live: "https://calculator-purvesh.netlify.app/",
    },
    {
      title: "Web-based coffee billing system",
      image: Photo2,
      discripction:
        "Web based coffee billing system where the store keeper will manage the customer details and invoices.",
      techstcak: "HTML-CSS / JavaScript / PHP / MySql",
      github: "",
      live: "https://crisscrosstamizh.in/WDI_APR_25/web_billing/index.html",
    },
    {
      title: "Portfolio",
      image: Photo4,
      discripction:
        "Built a personal portfolio using ReactJS with a focus on reusable components for efficient code structure. Deploy with the help of Netlify hosting service. ",
      techstcak: "HTML-CSS / React / Javascript",
      github: "https://github.com/poorveshgediya/purvesh-s-portfolio",
      live: "https://purvesh-portfolio.netlify.app/",
    },
  ];

  return (
    <>
      <section id="projects" className={style.projectsection}>
        <h3 className={style.title}>Projects</h3>
        <div className={style.main_div}>
          {projectdata.map((project, index) => (
            <div key={index} className={style.project}>
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
      </section>
    </>
  );
}

export default Projects;
