import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
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
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link >
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link >
          <Link to="/team">Team</Link>
        </Nav.Link>
        <Nav.Link >
          <Link to="/about">About</Link>
        </Nav.Link>
        <Nav.Link >
          <Link to="/contact">Contact</Link>
        </Nav.Link>
        <Nav.Link >
          <Link to="/cars">Cars</Link>
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
        </Switch>
      </div>
  </Router>
    );
  }
}

export default App;
