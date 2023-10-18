import React from "react";
import Tilt from "react-parallax-tilt";
import ReactDev from "../images/ReactDev.png";
// import { CiCoffeeCup } from "react-icons/ci";

import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="AboutPage" id="about_section">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            Turning ideas into impactful websites and products is my passion. I
            enjoy challenging projects, refining my <b>JavaScript</b> skills,
            and crafting work I'm proud of.
            <br />
            <br />
            Fluent in <b>JavaScript</b>, dabbling in <b>Typescript</b>, and
            actively building in the <b>MERN</b> stack. Excited to explore{" "}
            <b>Next.js</b>, <b>Three.js</b>, and deeper <b>Typescript</b>.
            <br />
            <br />
            And, of course, I have a deep love for <b>React</b>{" "}
            <FaReact style={{ scale: "1.2", marginLeft: ".5rem" }} />.
          </p>
        </div>
        <Tilt>
          <img
            className="Avatar"
            style={{ marginTop: "3rem", width: "325px" }}
            src={ReactDev}
            alt="developer"
          />
        </Tilt>
      </div>
    </>
  );
};

export default About;
