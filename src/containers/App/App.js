import React, { Component } from 'react';
import { PropTypes } from 'react';
import { Router } from 'react-router';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Hello, World!</p>
          <p>My name is</p> <h1>Tyler A. Adams</h1><p>,and I make stuff on the interwebs</p>
        </div>
        <p className="App-intro">
        </p>
        {this.content()}
      </div>
    );
  }
  content() {
    return (<Router
      routes={this.props.routes}
      history={this.props.history}/>)
  }
}

export default App;
