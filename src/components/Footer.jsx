import React from 'react'
import style from "../style/Footer.module.css";
import medium from "../photo/Medium.png";
import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaXTwitter,
  } from "react-icons/fa6";

function Footer() {
  return (
    <div>
        <footer className={style.soc_media}>
            <a
              id={style.git_hub}
              href="https://github.com/poorveshgediya"
              target="_blank"
            >
              <FaGithub/>
            </a>
            <a
              id={style.linked_in}
              href="https://www.linkedin.com/in/purveshgediya/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a id={style.whats_app} href="https://wa.me/7861851386" target="_blank">
              <FaWhatsapp />
            </a>
            <a
              id={style.gmail}
              href="mailto:poorveshgediya@gmail.com"
              target="_blank"
            >
              <FaEnvelope />
            </a>
            <a id={style.twitter} href="https://x.com/GediyaPoorvesh" target="_blank">
              <FaXTwitter />
            </a>
          </footer>
    </div>
  )
}

export default Footer