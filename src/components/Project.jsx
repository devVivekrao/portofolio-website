import React from "react";
import Github from "../assets/icons/github2.svg";
import Eye from "../assets/icons/eye.svg";
function Project({ project }) {
  return (
    <div className="project">
      <div className="hover">
        <a href="http://netlify.com" target="_blank" rel="noopener noreferrer">
          <img src={Eye} alt="eye" />
          <br />
          view live
        </a>
        <a href="http://github.com" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="github" className="github" /> <br />
          view code
        </a>
      </div>
      <img src={project.image} alt="img" />
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className={tag}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Project;
