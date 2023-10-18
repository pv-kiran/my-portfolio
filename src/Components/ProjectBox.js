import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({
  projectPhoto,
  projectName,
  description,
  github,
  link,
}) => {
  return (
    <div className="projectBox">
      <img
        className="projectPhoto"
        style={{ borderRadius: ".5rem" }}
        src={projectPhoto}
        alt="Project display"
      />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {description}
        <br />

        <a href={github} target="_blank" rel="noreferrer">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={link} target="_blank" rel="noreferrer">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
