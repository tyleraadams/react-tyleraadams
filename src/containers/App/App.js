import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Index from "../Index/Index";
import data from "../../data/portfolio.json";
import "./App.css";
import slugify from "../../utils/slugify";

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
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Index} />
            {data.entries.map(datum => (
              <Route path={`/${slugify(datum.hed)}`} component={Index} />
            ))}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
