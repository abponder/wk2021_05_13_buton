import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button1 from './Button1';
import Mdn from './About';
import Team from './Team';
import Contactform from './Contactform';
import Cars from './Cars';
import CarsHooks from './CarsHooks';
import Chart from './Chart';
import CountState from './CountState';
import CountHook from './CountHook';

class App extends React.Component {
  state = {
    // string: ['staying up','time for bed'],
    flag:true
  };

  handleClick = () => {
    this.setState(state => ({
      flag: !state.flag
    }));
  }

  render() {
    return (

      
  <Router>
      <div>
    <Navbar className="color-nav" variant="dark" sticky="top" >
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto color-nav2">
        <Nav.Link >
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link >
          <Link className="color-nav2" to="/team">Team</Link>
        </Nav.Link>
        <Nav.Link >
          <Link className="color-nav2" to="/about">About</Link>
        </Nav.Link>
        <Nav.Link >
          <Link className="color-nav2" to="/contact">Contact</Link>
        </Nav.Link>
        <Nav.Link >
          <Link className="color-nav2" to="/cars">Cars</Link>
        </Nav.Link>
        <Nav.Link >
          <Link className="color-nav2" to="/carsHooks">Cars Hooks</Link>
        </Nav.Link>
        <Nav.Link >
          <Link className="color-nav2" to="/chart">Chart</Link>
        </Nav.Link>
        <Nav.Link >
          <Link className="color-nav2" to="/counter-class">counter class</Link>
        </Nav.Link>
        <Nav.Link >
          <Link className="color-nav2" to="/counter-functional">Counter Function Hooks</Link>
        </Nav.Link>
  
    </Nav>
  </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Mdn />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route exact path="/">
            <Button1 handleClick={this.handleClick} flag={this.state.flag} />
          </Route>
          <Route path="/contact">
            <Contactform />
          </Route>
          <Route path="/cars">
            <Cars />
          </Route>
          <Route path="/carsHooks">
            <CarsHooks />
          </Route>
          <Route path="/chart">
            <Chart />
          </Route>
          <Route path="/counter-class">
            <CountState />
          </Route>
          <Route path="/counter-functional">
            <CountHook />
          </Route>
        </Switch>
      </div>
  </Router>
    );
  }
}

export default App;
