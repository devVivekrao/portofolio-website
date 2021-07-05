import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./sass/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import LoopstudioLandingPage from "./assets/imgs/loopstudio-landing-page.jpg";
import ManageLandingPage from "./assets/imgs/manage-landing-page.jpg";
import RoomHomepage from "./assets/imgs/room-homepage.jpg";
import SunnysideLandingPage from "./assets/imgs/sunnyside-agency-landing-page.jpg";

function App() {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    const projects = [
      {
        id: uuidv4(),
        image: LoopstudioLandingPage,
        name: "Loopstudio landing page",
        description:
          "Loopstudio landing page built with html, css and tiny bit of javascript.",
        tags: ["html", "scss", "javascript"],
        live: "http://vivekrao.netlify.app/",
        code: "http://github.com/devVivekrao",
        featured: true,
      },
      {
        id: uuidv4(),
        image: ManageLandingPage,
        name: "Manage landing page",
        description:
          "Manage landing page built with html, css and tiny bit of javascript.",
        tags: ["html", "scss", "javascript"],
        live: "http://vivekrao.netlify.app/",
        code: "http://github.com/devVivekrao",
        featured: true,
      },
      {
        id: uuidv4(),
        image: RoomHomepage,
        name: "Room home page",
        description:
          "Room home page built with html, css and tiny bit of javascript.",
        tags: ["html", "scss", "javascript"],
        live: "http://vivekrao.netlify.app/",
        code: "http://github.com/devVivekrao",
        featured: true,
      },
      {
        id: uuidv4(),
        image: SunnysideLandingPage,
        name: "Sunnyside agency landing page",
        description:
          "Sunnyside agency landing page built with html, css and tiny bit of javascript.",
        tags: ["html", "scss", "javascript"],
        live: "http://vivekrao.netlify.app/",
        code: "http://github.com/devVivekrao",
        featured: true,
      },
    ];

    setAllProjects(projects);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home allProjects={allProjects} />}
          />
          <Route path="/about" exact component={() => <About />} />
          <Route
            path="/projects"
            exact
            component={() => <Projects allProjects={allProjects} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
