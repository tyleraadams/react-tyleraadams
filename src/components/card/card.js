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
          <img
            src={`https://res.cloudinary.com/tyleraadams/image/upload/w_300,q_auto,fl_lossy/${entry.image}`}
            style={{ maxWidth: '100%' }}
          />
        </figure>
        <div className="card__text">
          <small className="card__dek">{entry.dek}</small>
          <h3 className="card__hed">{entry.hed}</h3>
        </div>
      </article>
    </Link>
  );
};

Card.proptypes = {
  entry: PropTypes.shape({}).isRequired
};

export default Card;
