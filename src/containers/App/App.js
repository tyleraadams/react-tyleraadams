import React, { Component } from 'react';
import './App.css';
import Router from '../../react_router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>My name is</p>
          <h1>Tyler A. Adams</h1>
          <p>and I make stuff on the interwebs</p>
          <p>See more of my work</p>
        </div>
        <p className="App-intro" />
        <Router />
      </div>
    );
  }
}

export default App;
