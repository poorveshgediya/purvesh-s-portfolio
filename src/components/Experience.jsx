import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import style from "../style/experience.module.css";
import logo1 from "../photo/cct.png";
import logo2 from "../photo/cognifyz.png";
import logo3 from "../photo/ascendEX.jpg";
const experience = [
  {
    logo: logo3,
    company: "AscendEX",
    position: "Affiliate Program | (March 2025 - Present)",
    description:
      "Collaborating with AscendEX’s affiliate program to promote the platform among indian audiences. Creating and sharing educational content across social platforms to onboard new users.",
  },
  {
    logo: logo1,
    company: "Calanjiyam Consultancies & Technologies",
    position: "Web developer Intern | (April - June 2025)",
    description:
      "• Contributing in our group project which is “ web based coffee billing system ” \n • I’m handle the “ product management module ”.\n • Created UI for display product with details and also can add manually and using HTML-CSS, JavaScript, PHP, Mysql.",
  },
  {
    logo: logo2,
    company: "Cognifyz Technologies",
    position: "Web developer Intern | (September - October 2024)",
    description:
      "web developer intern during the internship and complete the tasks which is assigned by the mentor.",
  },
];

function Experience() {
  return (
    <>
      <Navbar />
      <br />
      <section className={style.experience} id="experience">
        <div className={style.experiencecontent}>
          {experience.map((experience, index) => (
            <React.Fragment key={index}>
              <div className={style.box}>
                <div className={style.topcontent}>
                  <img
                    className={style.cctlogo}
                    src={experience.logo}
                    alt="Company Logo"
                  />
                  <div className={style.companydetails}>
                    <h3>{experience.company}</h3>
                    <h4>{experience.position}</h4>
                  </div>
                </div>
                <br />
                <p>
                  {experience.description.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
              <br />
            </React.Fragment>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Experience;
