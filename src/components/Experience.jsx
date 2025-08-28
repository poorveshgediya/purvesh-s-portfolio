import React from "react";
import style from "../style/experience.module.css";
import logo1 from "../photo/cct.png";
import logo2 from "../photo/cognifyz.png";
import logo3 from "../photo/ascendEX.jpg";
import logo4 from "../photo/vara.svg";

const experience = [
  {
    logo: logo4,
    company: "Vara Network",
    position: "(August 2025 - Present)",
    role: "Ambassador Program",
    description:
      "As a ambassador of vara network i'm contributing to growing ecosystem & make a content creation and complete my task and also sharing educational content about web3.",
  },
  {
    logo: logo3,
    company: "AscendEX",
    position: "(March 2025 - Present)",
    role: "Affiliate Program",
    description:
      "Collaborating with AscendEX’s affiliate program to promote the platform among indian audiences. Creating and sharing educational content across social platforms to onboard new users.",
  },
  {
    logo: logo1,
    company: "Calanjiyam Consultancies & Technologies",
    position: "(April - June 2025)",
    role: "Web Developer Intern",
    description:
      "• Contributing in our group project which is “ web based coffee billing system ” \n • I’m handle the “ product management module ”.\n • Created UI for display product with details and also can add manually and using HTML-CSS, JavaScript, PHP, Mysql.",
  },
  {
    logo: logo2,
    company: "Cognifyz Technologies",
    position: "(September - October 2024)",
    role: "Web Developer Intern",
    description:
      "web developer intern during the internship and complete the tasks which is assigned by the mentor.",
  },
];

function Experience() {
  return (
    <>
      <section className={style.experience} id="experience">
        {experience.map((experience, index) => (
          <React.Fragment key={index}>
            <fieldset className={style.fieldset}>
              <legend className={style.legend}>
                <i>{experience.role}</i>
              </legend>
              <div className={style.box}>
                <div className={style.topcontent}>
                  <img
                    className={style.logo}
                    src={experience.logo}
                    alt="Company Logo"
                  />
                  <div className={style.companydetails}>
                    <h3 className={style.companyname}>{experience.company}</h3>
                    <h4 className={style.companyposition}>
                      {experience.position}
                    </h4>
                  </div>
                </div>
                <br />
                <p className={style.positiondescription}>
                  {experience.description.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </fieldset>
            <br />
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default Experience;
