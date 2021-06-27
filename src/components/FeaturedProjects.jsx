import React from "react";
import Project from "./Project";

function FeaturedProjects({ allProjects }) {
  return (
    <div className="featured-projects">
      <h3>Featured Projects</h3>
      {allProjects.map((project) =>
        project.featured ? <Project key={project.id} project={project} /> : ""
      )}
    </div>
  );
}

export default FeaturedProjects;
