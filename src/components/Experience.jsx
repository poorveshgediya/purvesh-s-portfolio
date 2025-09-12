import React from "react";
// import style from "../style/experience.module.css";
import '../style/experience.css';
import cct from "../photo/cct.png";
import cognifyz from "../photo/cognifyz.png";
import ascendex from "../photo/ascendEX.jpg";
import vara from "../photo/vara.svg";
import coindcx from "../photo/coindcx.png";

const experience = [
  {
    logo: coindcx,
    company: "CoinDCX",
    role: "Maxis Program (September 2025 - Present)",
    description:
      "As a Maxis at CoinDCX i'm promoting the CoinDCX exchange by making educational content and educate people about crypto and web3.",
  },
  {
    logo: vara,
    company: "Vara Network",
    role: "Ambassador Program (August 2025 - Present)",
    description:
      "As a ambassador of vara network i'm contributing to growing ecosystem & make a content creation and complete my task and also sharing educational content about web3.",
  },
  {
    logo: ascendex,
    company: "AscendEX",
    role: "Affiliate Program (March 2025 - Present)",
    description:
      "Collaborating with AscendEX’s affiliate program to promote the platform among indian audiences. Creating and sharing educational content across social platforms to onboard new users.",
  },
  {
    logo: cct,
    company: "Calanjiyam Consultancies & Technologies",
    role: "Web Developer Intern (April - June 2025)",
    description:
      "Contributing in our group project which is web based coffee billing system. I’m handle the product management module Created UI for display product with details and also can add manually and using HTML-CSS, JavaScript, PHP, Mysql.",
  },
  {
    logo: cognifyz,
    company: "Cognifyz Technologies",
    role: "Web Developer Intern (September - October 2024)",
    description:
      "web developer intern during the internship and complete the tasks which is assigned by the mentor.",
  },
];

function Experience() {
  return (
    <>
    <h2 className="experienceheading mt-20 mb-10 font-1rem">Experience</h2>
      <section className="experiencesection grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 pb-20">
        {experience.map((experience, index) => (
            <div key={index} class="flex items-start gap-3 hover:translate-y-[-10px]">
              <div class="flex-shrink-0">
                <img
                  alt="Company Logo"
                  class="w-12 h-12 rounded-full object-fill bg-[#fff]"
                  src={experience.logo}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-[#fff] text-1rem font-bold:500">
                  {experience.company}
                </h2>
                <h3 class="text-[#00adb5] text-[0.88rem] font-bold:400">
                  {experience.role}
                </h3>
                <p class="text-[#a19c9b] text-[0.88rem] mt-[10px] text-justify">
                  {experience.description}
                </p>
              </div>
            </div>
        ))}
      </section>
    </>
  );
}

export default Experience;
