import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
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
        <div className='content-body'>
          <Switch>
            <Route path='/' exact component={Home} />

            <Route path='/about' component={About} />

            <Route path='/galery' component={Galery} />
            <Route path='/handdrawing' component={HandDrawing} />
            <Route path='/digitalart' component={DigitalArt} />
            <Route path='/illustration' component={Illustration} />
            <Route path='/modelling' component={Modelling} />
            <Route path='/animation' component={Animations} />
            <Route path='/timelapse' component={Timelapse} />

            <Route path='/projects' component={Projects} />

            <Route path='/contact' component={Contact} />

            <Route path='/sign-up' component={SignUp} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
