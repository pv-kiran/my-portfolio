import React from "react";
import Skill from "./Skill";

function MySkill() {
  return (
    <section className="skill--section" id="skill_section">
      <h1 className="SkillsHeading">
        Professional <b>Skillset</b>
      </h1>
      <div className="skills">
        <Skill skill="Html" />
        <Skill skill="Css" />
        <Skill skill="Javascript" />
        <Skill skill="React" />
        <Skill skill="Node" />
        <Skill skill="Express" />
        <Skill skill="MongoDb" />
        <Skill skill="Git" />
        <Skill skill="Npm" />
      </div>
    </section>
  );
}

export default MySkill;
