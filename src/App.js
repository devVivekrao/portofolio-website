import './sass/App.scss';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={ ()=> <Home /> } />
          <Route path="/about" exact component={ ()=> <About /> } />        
          <Route path="/projects" exact component={ ()=> <Projects /> } />        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
