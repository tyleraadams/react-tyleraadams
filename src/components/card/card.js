import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './card.css';

import slugify from '../../utils/slugify';

const Card = props => {
  const entry = props.entry;

  return (
    <Link
      title={entry.hed}
      to={`/${slugify(entry.hed)}`}
      onClick={props.onClick}
      key={entry.hed}
    >
      <article className="card">
        <figure style={{ maxWidth: '100%' }}>
          <img src={entry.image} style={{ maxWidth: '100%' }} />
        </figure>
        <h3>{entry.hed}</h3>

        <small>{entry.dek}</small>
        <div>
          <a key={entry.href} href={entry.href} title={entry.hed}>
            Link To Project
          </a>
          <a key={entry.git} href={entry.git} title={entry.hed}>
            Git
          </a>
        </div>
      </article>
    </Link>
  );
};

Card.proptypes = {
  entry: PropTypes.shape({}).isRequired
};

export default Card;
