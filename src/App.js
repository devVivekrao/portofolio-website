import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./sass/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import ProjectImage1 from "./assets/imgs/image1.jpg";
import ProjectImage2 from "./assets/imgs/image2.webp";
import ProjectImage3 from "./assets/imgs/image3.webp";

function App() {

  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {

    const projects = [
      {
        id: uuidv4(),
        image: ProjectImage1,
        name: "React calculater app",
        description: "React based calulater app with more custom theme option.",
        tags: ["react", "javascript"],
        featured: true,
      },
      {
        id: uuidv4(),
        image: ProjectImage2,
        name: "Croudfunding project page",
        description: "Croudfunding landing page built with html, css and tiny bit of javascript.",
        tags: ["react", "javascript"],
        featured: true,
      },
      {
        id: uuidv4(),
        image: ProjectImage3,
        name: "Blogr landing page",
        description: "Bloger landing page built with html, css and tiny bit of javascript.",
        tags: ["react", "javascript"],
        featured: true,
      },
      {
        id: uuidv4(),
        image: ProjectImage2,
        name: "Croudfunding project page",
        description: "Croudfunding landing page built with html, css and tiny bit of javascript.",
        tags: ["react", "javascript"],
        featured: false,
      },
      {
        id: uuidv4(),
        image: ProjectImage3,
        name: "React calculater app",
        description: "React based calulater app with more custom theme option.",
        tags: ["react", "javascript"],
        featured: false,
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
