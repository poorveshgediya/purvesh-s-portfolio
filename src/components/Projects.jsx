import React from "react";
import style from "../style/Projects.module.css";
import { FaAddressBook, FaGithub, FaLink } from "react-icons/fa6";
import { FaAnchor } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Photo1 from "../photo/calculator.png";
import Photo2 from "../photo/coffee.png";
import Photo3 from "../photo/nft.png";
import Photo4 from "../photo/portfolio.png";

function Projects() {
  const projectdata = [
    {
      title: "React-Calculator",
      image: Photo1,
      discripction:
        "Built a basic yet functional calculator using React that performs arithmetic operations like addition, subtraction, multiplication, and division. Focused on clean UI design using CSS and implemented component-based architecture in React.",
      techstcak: ["HTML-CSS", "React", "JavaScript"],
      github: "https://github.com/poorveshgediya/Calculator",
      live: "https://calculator-purvesh.netlify.app/",
    },
    {
      title: "Web-based coffee billing system",
      image: Photo2,
      discripction:
        "It’s web based coffee billing system where the store keeper will manage the customer details and invoices and the customer is regular or not and also manage the product menu all the product and it’s up to date means from sing-up to pay bill on web.",
      techstcak: ["HTML-CSS", "JavaScript", "PHP", "MySql"],
      github: "",
      live: "https://crisscrosstamizh.in/WDI_APR_25/web_billing/index.html",
    },
    {
      title: "Portfolio",
      image: Photo4,
      discripction: "Built a personal portfolio using ReactJS with a focus on reusable components for efficient code structure. Deploy with the help of Netlify hosting service. ",
      techstcak: ["HTML-CSS", "React", "Javascript"],
      github: "https://github.com/poorveshgediya/purvesh-s-portfolio",
      live: "https://purvesh-portfolio.netlify.app/",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        <br />
        <div className={style.main_div}>
          {projectdata.map((project, index) => (
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
        <Footer />
      </div>
    </>
  );
}

export default Projects;
