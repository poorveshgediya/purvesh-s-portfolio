import React from "react";
import style from "../style/experience.module.css";
import cct from "../photo/cct.png";
import cognifyz from "../photo/cognifyz.png";
import ascendex from "../photo/ascendEX.jpg";
import vara from "../photo/vara.svg";
import coindcx from "../photo/coindcx.png";

const experience = [
  {
    logo: coindcx,
    company: "CoinDCX",
    position: "(September 2025 - Present)",
    role: "Maxis Program",
    description:
      "As a Maxis at CoinDCX i'm promoting the CoinDCX exchange by making educational content and educate people about crypto and web3.",
  },
  {
    logo: vara,
    company: "Vara Network",
    position: "(August 2025 - Present)",
    role: "Ambassador Program",
    description:
      "As a ambassador of vara network i'm contributing to growing ecosystem & make a content creation and complete my task and also sharing educational content about web3.",
  },
  {
    logo: ascendex,
    company: "AscendEX",
    position: "(March 2025 - Present)",
    role: "Affiliate Program",
    description:
      "Collaborating with AscendEX’s affiliate program to promote the platform among indian audiences. Creating and sharing educational content across social platforms to onboard new users.",
  },
  {
    logo: cct,
    company: "Calanjiyam Consultancies & Technologies",
    position: "(April - June 2025)",
    role: "Web Developer Intern",
    description:
      "Contributing in our group project which is web based coffee billing system. I’m handle the product management module Created UI for display product with details and also can add manually and using HTML-CSS, JavaScript, PHP, Mysql.",
  },
  {
    logo: cognifyz,
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
      <section id="experience">
        <div style={{margin: "60px 0px"}}>
          <h3>Experience</h3>
          <div className={style.mainDiv}>
            {experience.map((experience, index) => (
              <React.Fragment key={index}>
                <div className={style.mainexperiencecard}>
                  <h3 className={style.companytitle}>{experience.role}</h3>
                  <div className={style.box}>
                    <div className={style.sidecontent}>
                      <img
                        className={style.logo}
                        src={experience.logo}
                        alt="Company Logo"
                      />
                    </div>
                    <div className={style.companydetails}>
                      <h3 className={style.companyname}>
                        {experience.company}
                      </h3>
                      <h4 className={style.companyposition}>
                        {experience.position}
                      </h4>
                      <p className={style.positiondescription}>
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
