import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Galery from './components/pages/Galery';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import HandDrawing from './components/pages/HandDrawing';
import DigitalArt from './components/pages/DigitalArt';
import Illustration from './components/pages/Illustration';
import Modelling from './components/pages/Modelling';
import Animations from './components/pages/Animations';
import Timelapse from './components/pages/Timelapse';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/about' component={About} />

          <Route path='/galery' component={Galery} />
          <Route path='/galery/handdrawing' component={HandDrawing} />
          <Route path='/galery/digitalart' component={DigitalArt} />
          <Route path='/galery/illustration' component={Illustration} />
          <Route path='/galery/modelling' component={Modelling} />
          <Route path='/galery/animation' component={Animations} />
          <Route path='/galery/timelapse' component={Timelapse} />

          <Route path='/projects' component={Projects} />

          <Route path='/contact' component={Contact} />

          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
