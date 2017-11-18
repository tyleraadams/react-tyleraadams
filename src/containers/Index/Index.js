import React, { Component } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import Accordion from '../../components/accordion/accordion';
import portfolio from '../../data/portfolio';
import findEntry from '../../utils/find_entry';

class Index extends Component {
  render() {
    const project = get(this.props, 'location.pathname', '/');
    const foundEntry = findEntry(portfolio.entries, project);
    const entry = project !== '/' ? foundEntry : false;
    return <Accordion entries={portfolio.entries} openTo={entry} />;
  }
}

Index.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default Index;
