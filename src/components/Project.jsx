import React from "react";


function Project({ project }) {
  return (
    <div className="grid">
      <div className="project">
        <img src={project.image} alt="img" />
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <div className="tags">
          {
            project.tags.map( tag => (
              <span key={tag} className={tag}>#{tag}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Project;
