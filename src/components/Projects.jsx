import React from "react";
import Project from "./Project";

function Projects({ allProjects }) {
  return (
    <div className="projects">
      <h3>Projects</h3>
      <div className="grid">
        {allProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
