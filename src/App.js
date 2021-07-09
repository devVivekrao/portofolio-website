import { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import { projects } from "./assets/index";

function App() {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
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
