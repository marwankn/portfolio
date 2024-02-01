import React from "react";
import "./ProjectCard.scss";

function ProjectCard({ project, colorMode }) {
  return (
    <>
      <article className="project-card">
        <div className="project-card__overlay">
          <img
            src={project.image}
            alt="Project Screenshot"
            className="project-card__image"
          />
          <div className="project-card__cta">
            <a
              href={project.url}
              className="project-card__link"
              target="_blank"
            >
              View Project
            </a>
            <a
              href={project.githubLink}
              className="project-card__link"
              target="_blank"
            >
              View Code
            </a>
          </div>
        </div>

        <h3>{project.name}</h3>
        <div className="project-card__tech">
          {project.tech.map((tech) => (
            <p
              className={
                colorMode === "dark"
                  ? "project-card__tech-item"
                  : "project-card__tech-item--light"
              }
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="project-card__cta--mobile">
          <a href={project.url} className="project-card__link" target="_blank">
            View Project
          </a>
          <a
            href={project.githubLink}
            className="project-card__link"
            target="_blank"
          >
            View Code
          </a>
        </div>
      </article>
    </>
  );
}

export default ProjectCard;
