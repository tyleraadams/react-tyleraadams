import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card';
import TagSet from '../tag_set/tag_set';

import './card_set.css';

class CardSet extends Component {
  constructor(props) {
    super();

    this.state = {
      selectedTags: []
    };
    const alreadyUsed = {};
    this.tags = props.entries
      .map((entry, index) => {
        return entry.tags;
      })
      .join(', ')
      .split(', ')
      .filter(tag => {
        const isDuplicate = alreadyUsed.hasOwnProperty(tag);
        const isNotDuplicate = !isDuplicate;
        alreadyUsed[tag] = '';
        return isNotDuplicate;
      })
      .sort();
    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleRemoveAllFilters = this.handleRemoveAllFilters.bind(this);
  }
  handleRemoveAllFilters() {
    this.setState({ selectedTags: [] });
  }
  handleTagClick(tag) {
    const { selectedTags } = this.state;
    const indexOfSelectedTag = selectedTags.indexOf(tag);
    const isTagAlreadySelected = indexOfSelectedTag !== -1;
    const selectedTagsLength = selectedTags.length;
    if (isTagAlreadySelected) {
      this.setState({
        selectedTags: [
          ...selectedTags.slice(0, indexOfSelectedTag),
          ...selectedTags.slice(indexOfSelectedTag + 1, selectedTagsLength)
        ]
      });
    } else {
      this.setState({
        selectedTags: [...selectedTags, tag]
      });
    }
  }

  render() {
    const cardsToDisplay = this.props.entries
      .filter(entry => {
        const articleTags = entry.tags.split(', ').reduce((accum, curr) => {
          accum[curr] = '';
          return accum;
        }, {});
        const { selectedTags } = this.state;

        return selectedTags.length
          ? selectedTags.reduce((accum, curr) => {
              return curr
                ? accum && articleTags.hasOwnProperty(curr)
                : articleTags.hasOwnProperty(accum);
            }, true)
          : true;
      })
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    return (
      <section className="portfolio">
        <div className="portfolio__menu">
          <h2 className="portfolio__name">my work</h2>
          <TagSet
            tags={this.tags}
            name={'filter by tag'}
            onClick={this.handleTagClick}
            removeFilterAction={this.handleRemoveAllFilters}
            selected={this.state.selectedTags}
          />
        </div>
        <div className="portfolio__card-set">
          {cardsToDisplay.length ? (
            cardsToDisplay.map((entry, index) => {
              return <Card entry={entry} key={index} />;
            })
          ) : (
            <div className="portfolio__not-found">
              No results match your criteria :( :( :(
            </div>
          )}
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
