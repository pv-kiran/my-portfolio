import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { Link } from "react-scroll";
const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setnavbarblur(true);
    } else {
      setnavbarblur(false);
    }
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  };

  var hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="Logo">
        PV
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li>
          <Link
            to="intro_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            style={{ cursor: "pointer" }}
            onClick={hideMenu}>
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li>
          <Link
            to="about_section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: "pointer" }}
            onClick={hideMenu}>
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link
            to="skill_section"
            onClick={hideMenu}
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            style={{ cursor: "pointer" }}>
            <BsCodeSlash /> Skills
          </Link>
        </li>
        <li>
          <Link
            to="project_section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: "pointer" }}
            onClick={hideMenu}>
            <FaGitAlt /> Project
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
