import React from "react";
import Project from "./Project";
import { Link } from "react-router-dom";

function FeaturedProjects({ allProjects }) {
  return (
    <div className="featured-projects">
      <h3>Featured Projects</h3>
      <div className="grid">
        {allProjects.map((project) =>
          project.featured ? <Project key={project.id} project={project} /> : ""
        )}
      </div>
      <Link to="/projects" className="see-all-btn">
        See all
      </Link>
    </div>
  );
}

export default FeaturedProjects;
