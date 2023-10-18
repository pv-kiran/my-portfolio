import React from "react";
import Intro from "./Intro";
import About from "./About";
import MySkill from "./MySkill";
import Projects from "./Projects";
import Nav from "./Navbar";

const Home = () => {
  return (
    <>
      <Nav />
      <Intro />
      <About />
      <MySkill />
      <Projects />
    </>
  );
};

export default Home;
