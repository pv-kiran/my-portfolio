import { useEffect, useState } from "react";
import { myProjects } from "../constants/project";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   setProjects(myProjects);
  // });
  return (
    <div id="project_section">
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        {myProjects.length > 0 &&
          myProjects.map((project, index) => {
            return (
              <ProjectBox
                key={index}
                projectPhoto={project.projectPhoto}
                projectName={project.projectName}
                github={project.github}
                link={project.link}
                description={project.description}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
