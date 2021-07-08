import React from "react";
import { Link } from "react-router-dom";
import Resume from "../assets/download/resume.pdf";

function Header() {
  return (
    <div className="header">
      <p className="top__p">Hi, my name is</p>
      <h1>Vivek rao.</h1>
      <p>
        I'm a full stack developer based in India. I specialise in creating
        interactive experiences and functional interfaces using MERN stack.
      </p>
      <div className="btn-div">
        <a className="button" href={Resume}>
          Download resume
        </a>
        <Link to="/projects" className="button">
          View projects
        </Link>
      </div>
    </div>
  );
}

export default Header;
