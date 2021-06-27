import { React, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import DotIcon from "../assets/icons/dot.svg";
import Xmark from "../assets/icons/x-mark.svg";

function Navigation() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const sideMenuHandler = () => {
    setShowSideMenu(!showSideMenu);
  };
  return (
    <nav>
      <div className="fixed-nav " onClick={sideMenuHandler}>
        <img src={showSideMenu ? Xmark : DotIcon} alt="icon" />
      </div>
      <div className={showSideMenu ? "nav-menu show" : "nav-menu"}>
        <ul>
          <li>
            <Link to="/" onClick={sideMenuHandler}>
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={sideMenuHandler}>
              {" "}
              About me{" "}
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={sideMenuHandler}>
              {" "}
              Projects{" "}
            </Link>
          </li>
          <li>
            <Link to="#" onClick={sideMenuHandler}>
              {" "}
              Resume{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);
