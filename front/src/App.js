import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Immeuble from './components/Immeuble';
import Panneau from './components/Panneau';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <Login />
        <p className="App-intro"></p>
        <Immeuble />
        <Panneau />
      </div>
    );
  }
}

export default App;
