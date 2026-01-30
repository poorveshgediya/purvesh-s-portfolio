import React from "react";
import '../style/experience.css';
import { experience } from "../js/experiencedatajson";

function Experience() {
  return (
    <>
    <h2 className="experienceheading font-1rem">Experience</h2>
      <div className="experiencesection grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
        {experience.map((experience, index) => (
            <div key={index} className="product-card flex items-start gap-3 transition-all duration-300 
            hover:shadow-xl hover:-translate-y-1">
              <div className="flex-shrink-0">
                <img
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full object-fill bg-[#fff]"
                  src={experience.logo}
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-[#fff] text-1rem font-bold:500">
                  {experience.company}
                </h2>
                <h3 className="text-[#00adb5] text-[0.88rem] font-bold:400">
                  {experience.role}
                </h3>
                <p className="text-[#a19c9b] text-[0.88rem] mt-[10px] text-justify">
                  {experience.description}
                </p>
              </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
