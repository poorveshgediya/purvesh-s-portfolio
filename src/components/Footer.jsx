import React from "react";
import style from "../style/Footer.module.css";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
  FaPinterest,
  FaMedium,
} from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <footer className={style.soc_media}>
        <a href="https://github.com/poorveshgediya" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/purveshgediya/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/7861851386" target="_blank">
          <FaWhatsapp />
        </a>
        <a href="mailto:poorveshgediya@gmail.com" target="_blank">
          <FaEnvelope />
        </a>
        <a href="https://x.com/GediyaPoorvesh" target="_blank">
          <FaXTwitter />
        </a>
        <a href="https://medium.com/@poorveshgediya" target="_blank">
          <FaMedium />
        </a>
        <a href="https://in.pinterest.com/PurveshGediya" target="_blank">
          <FaPinterest />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
