import React from "react";
import "./Projects.scss";
import projectsList from "../../assets/data/data.json";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects({ colorMode }) {
  return (
    <>
      <section className="projects">
        <div className="projects__header">
          <h2>Projects</h2>
          <a href="mailto:marwankn@gmail.com" className="projects__button">
            Contact Me
          </a>
        </div>
        <div className="projects__cards">
          {projectsList.projects.map((project, i) => (
            <ProjectCard project={project} colorMode={colorMode} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
