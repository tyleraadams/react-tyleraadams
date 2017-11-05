import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Entry from '../entry/entry';

class Accordion extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeIndex: props.openTo
    };
  }

  handleClick(index) {
    this.setState({
      activeIndex: index === this.state.activeIndex ? false : index
    });
  }

  render() {
    return (
      <div className="portfolio">
        <h2>My work</h2>
        {this.props.entries.map((entry, index) => {
          let isOpen = false;
          if (index === this.state.activeIndex) {
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
  ).isRequired,
  openTo: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired
};

export default Accordion;
