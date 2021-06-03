import React, { Component} from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
//import './App.css';
//import axios from 'axios';
 
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
      </BrowserRouter>
    </div>
    )
  }
}

export default App;
