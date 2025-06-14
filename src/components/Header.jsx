import React, { Profiler, useState } from "react";
import style from "../style/header.module.css";
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
      <div className={style.background}></div>
      <div className={style.menu}>
        <header >
          <Link to="/About">🧑‍💻 About Me</Link>
          <Link to="/Projects">💼 Projects</Link>
          <Link to=""> Experience</Link>
          <Link to="/Skills">🧠 Skills</Link>
          <Link href="" download>📥 Resume</Link>

          <p className={style.social_text}>
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
          <footer className={style.social_media}>
            <a
              id={style.github}
              href="https://github.com/poorveshgediya"
              target="_blank"
            >
              <FaGithub/>
            </a>
            <a
              id={style.linkedin}
              href="https://www.linkedin.com/in/purveshgediya/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a id={style.whatsapp} href="https://wa.me/7861851386" target="_blank">
              <FaWhatsapp />
            </a>
            <a
              id={style.email}
              href="mailto:poorveshgediya@gmail.com"
              target="_blank"
            >
              <FaEnvelope />
            </a>
            <a id={style.x} href="https://x.com/GediyaPoorvesh" target="_blank">
              <FaXTwitter />
            </a>
          </footer>
        </header>
      </div>
    </>
  );
};

export default Header;
