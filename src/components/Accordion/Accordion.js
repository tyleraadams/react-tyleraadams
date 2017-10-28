import React, { Component } from "react";
import PropTypes from "prop-types";

import Entry from "../Entry/Entry";

class Accordion extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeKey: props.openTo
    };
  }

  handleClick(index) {
    this.setState({
      activeKey: index === this.state.activeKey ? false : index
    });
  }

  render() {
    return (
      <div className="portfolio">
        <h2>My work</h2>
        {this.props.entries.map((entry, index) => {
          let isOpen = false;
          if (index === this.state.activeKey) {
            isOpen = true;
          }
          return (
            <Entry
              entry={entry}
              key={index}
              onClick={() => this.handleClick(index)}
              isOpen={isOpen}
            />
          );
        })}
      </div>
    );
  }
}

Accordion.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      hed: PropTypes.string,
      dek: PropTypes.string,
      href: PropTypes.string,
      git: PropTypes.string,
      body: PropTypes.string,
      sidebar: PropTypes.string
    })
  ).isRequired
};
export default Accordion;
