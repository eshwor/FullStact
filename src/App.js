import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

//ALL Import
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
