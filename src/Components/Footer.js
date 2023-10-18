import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className="footerLinks">
        <a href="https://github.com/pv-kiran" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kiran-pv-840735139/"
          target="_blank"
          rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailTo:kiranpv903@gmail.com" target="_blank" rel="noreferrer">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
