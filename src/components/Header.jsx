import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h3>Hi, my name is</h3>
      <h1>Vivek rao.</h1>
      <p>
        I'm a full stack developer based in India. I specialise in creating
        interactive experiences and functional interfaces using MERN stack.
      </p>
      <div className="btn-div">
        <button className="button">Download resume</button>
        <Link to="/projects" className="button">
          View projects
        </Link>
      </div>
    </div>
  );
}

export default Header;
