import React, { Profiler, useState } from "react";
import "../style/header.css";
import Profile from "../photo/Profile.jpg";
import { Link, data } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { GiAbstract003 } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="background"></div>
      <div className="menu">
        <header >
          <Link to="/About">🧑‍💻 About Me</Link>
          <Link to="/Projects">💼 Projects</Link>
          <Link to=""> Experience</Link>
          <Link to="/Skills">🧠 Skills</Link>
          <Link href="" download>📥 Resume</Link>

          <p className="social_text">
            <Typewriter
              words={[
                "Don't forget to connect with me!",
                "Let's connect on LinkedIn!",
                "Say Hi on WhatsApp!",
                "Explore my Projects!",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <footer className="social_media">
            <a
              id="github"
              href="https://github.com/poorveshgediya"
              target="_blank"
            >
              <FaGithub/>
            </a>
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/purveshgediya/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a id="whatsapp" href="https://wa.me/7861851386" target="_blank">
              <FaWhatsapp />
            </a>
            <a
              id="email"
              href="mailto:poorveshgediya@gmail.com"
              target="_blank"
            >
              <FaEnvelope />
            </a>
            <a id="x" href="https://x.com/GediyaPoorvesh" target="_blank">
              <FaXTwitter />
            </a>
          </footer>
        </header>
      </div>
    </>
  );
};

export default Header;
