import { useState } from "react";
import Navbar from "./Navbar";
import style from "../style/resume.module.css"; 
import Footer from "./Footer";

function Resume() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div>
      <Navbar />
      <br />
      <div>
        <div className={style.resumebuttons}>
        <button onClick={() => setShowResume(true)} className={style.resumebutton}>
          View Resume
        </button>
        <a href="/Purvesh_Gediya-Resume.pdf" download className={style.resumebutton}>
        ⬇
      </a>
      </div>
        {showResume && (
          <div className={style.resumemodal}>
            <button onClick={() => setShowResume(false)} className={style.closebutton}>Close</button>
            <iframe
              src="/Purvesh_Gediya-Resume.pdf"
              width="100%"
              height="600px"
              style={{ border: "none" }}
              title="Purvesh Resume"
            ></iframe>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default Resume;
