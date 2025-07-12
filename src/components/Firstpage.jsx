import React, { Profiler, useState } from "react";
import style from "../style/firstpage.module.css";
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
          <div className={style.a}>
            <Link className={style.menubutton} to="/About">
              🧑‍💻 About Me
            </Link>
            <Link className={style.menubutton} to="/Projects">
              💼 Projects
            </Link>
            <Link className={style.menubutton} to="/Experience">
              💻 Experience
            </Link>
            <Link className={style.menubutton} to="/Skills">
              🧠 Skills
            </Link>
            <Link className={style.menubutton} to="/Resume">
              📥 Resume
            </Link>
          </div>

          <p className={style.socialtext}>
            <span className={style.socialwords}>
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
            </span>
          </p>
          <footer className={style.social_media}>
            <a
              className={style.soialmediabutton}
              id={style.github}
              href="https://github.com/poorveshgediya"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className={style.soialmediabutton}
              id={style.linkedin}
              href="https://www.linkedin.com/in/purveshgediya/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className={style.soialmediabutton}
              id={style.whatsapp}
              href="https://wa.me/7861851386"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
            <a
              className={style.soialmediabutton}
              id={style.email}
              href="mailto:poorveshgediya@gmail.com"
              target="_blank"
            >
              <FaEnvelope />
            </a>
            <a
              className={style.soialmediabutton}
              id={style.x}
              href="https://x.com/GediyaPoorvesh"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </footer>
    </>
  );
};

export default Header;
