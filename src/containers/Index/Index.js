import React, { Component } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';

// import Accordion from '../../components/accordion/accordion';
import CardSet from '../../components/card_set/card_set';
import portfolio from '../../data/portfolio';
import findEntry from '../../utils/find_entry';

function Index(props) {
  console.log('??? ', props);
  const project = get(props, 'location.pathname', '/');
  const foundEntry = findEntry(portfolio.entries, project);
  const entry = project !== '/' ? foundEntry : false;
  return <CardSet entries={portfolio.entries} selected={foundEntry} />;
}

Index.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default Index;
