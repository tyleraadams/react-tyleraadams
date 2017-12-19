import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Github from '../buttons/github';
import slugify from '../../utils/slugify';
import './card.css';

const Card = props => {
  const entry = props.entry || {};
  switch (props.type) {
    case 'big':
      return <BigCard entry={entry} />;
    default:
      return <DefaultCard entry={entry} />;
  }
};

const DefaultCard = props => {
  const entry = props.entry;
  return (
    <Link
      title={entry.hed}
      to={`/${slugify(entry.hed)}`}
      onClick={props.onClick}
      key={entry.hed}
    >
      <article className={`card ${props.type === 'big' ? 'card--big' : ''}`}>
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
const BigCard = props => {
  const entry = props.entry;
  return (
    <article className="card card--big">
      <figure style={{ maxWidth: '100%' }}>
        <img
          src={`https://res.cloudinary.com/tyleraadams/image/upload/w_1000,q_auto,fl_lossy/${entry.image}`}
          style={{ maxWidth: '100%' }}
        />
      </figure>
      <div className="card__text">
        <small className="card__dek">
          {entry.dek} | <date>{entry.date}</date>
        </small>
        <h3 className="card__hed">{entry.hed}</h3>
        <p>{entry.body}</p>
        <div>
          <a key={entry.href} href={entry.href} title={entry.hed}>
            <svg
              width="40"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zm384-864v512q0 26-19 45t-45 19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45 45-19h512q26 0 45 19t19 45z" />
            </svg>
          </a>
          {entry.git ? <Github href={entry.href} title={entry.hed} /> : ''}
        </div>
      </div>
    </article>
  );
};

Card.proptypes = {
  entry: PropTypes.shape({}).isRequired
};

export default Card;
