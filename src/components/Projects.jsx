import React from "react";
import Project from "./Project";

function Projects({ allProjects }) {
  return (
    <div className="projects">
      <h3>Projects</h3>
      {
        allProjects.map( project => (
          <Project key={project.id} project={project} />
        ))
      }
    </div>
  );
}

export default Projects;
