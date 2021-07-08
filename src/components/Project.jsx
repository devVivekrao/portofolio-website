import React from "react";
import Github from "../assets/icons/github2.svg";
import Eye from "../assets/icons/eye.svg";
function Project({ project }) {
  return (
    <div className="project">
      <img src={project.image} alt="img" />
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <div className="action">
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <img src={Eye} alt="eye" />
          view live
        </a>
        <a href={project.code} target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="github" className="github" />
          view code
        </a>
      </div>
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
