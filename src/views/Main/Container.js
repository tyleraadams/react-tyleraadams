import React, { Component } from "react";
import Accordion from "../../components/Accordion/Accordion";
import portfolio from "../../data/portfolio";

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Accordion entries={portfolio.entries} />;
  }
}

export default Container;
