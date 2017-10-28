import React, { Component } from "react";
import get from "lodash/get";
import Accordion from "../../components/Accordion/Accordion";
import portfolio from "../../data/portfolio";
import { withRouter } from "react-router";
import findEntry from "../../utils/find_entry";

class Index extends Component {
  render() {
    const pathname = get(this.props, "location.pathname", "/");
    console.log("!!!! ", pathname);
    const foundEntry = findEntry(portfolio.entries, pathname);
    const entry = pathname !== "/" ? foundEntry : false;
    return <Accordion entries={portfolio.entries} openTo={entry} />;
  }
}

Index.propTypes = {};

export default withRouter(Index);
