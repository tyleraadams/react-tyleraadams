import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card';

import './card_set.css';

class CardSet extends PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return (
      <section className="portfolio">
        <h2>My work</h2>
        <div className="portfolio__card-set">
          {this.props.entries.map((entry, index) => {
            return (
              <Card
                entry={entry}
                key={index}
                onClick={() => this.handleClick(index)}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

CardSet.propTypes = {
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

export default CardSet;
