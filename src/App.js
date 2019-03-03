import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

//ALL Import
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navbar></Navbar>
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
