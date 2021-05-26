import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button1 from './Button1';

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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <Button1 handleClick={this.handleClick} flag={this.state.flag} />
          </Route>
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
