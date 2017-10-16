import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router } from "react-router";
import { BrowserRouter, Link, Route } from 'react-router-dom';


// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Hello, World!</p>
          <p>My name is</p> <h1>Tyler A. Adams</h1>
          <p>,and I make stuff on the interwebs</p>
        </div>
        <p className="App-intro" />
        {this.content()}
      </div>
    );
  }
  content() {
    return <BrowserRouter routes={this.props.routes} history={this.props.history} />;
  }
}

export default App;
