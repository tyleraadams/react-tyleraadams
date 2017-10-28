import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";
import "./Entry.css";
import slugify from "../../utils/slugify";

function Entry(props) {
  const isOpened = props.isOpen;
  const entry = props.entry;
  let className = classnames({
    "entry__more-info--hidden": true,
    "entry__more-info--shown": isOpened
  });

  return [
    <Link
      title={entry.hed}
      to={props.isOpen ? "/" : `/${slugify(entry.hed)}`}
      onClick={props.onClick}
    >
      <article className="entry">
        <h3>
          {entry.hed}
          <small>{entry.dek}</small>
        </h3>
        <aside className={className}>
          <p>{entry.body}</p>
          <p>{entry.sidebar}</p>
        </aside>
      </article>
    </Link>,
    [
      <a href={entry.href} title={entry.hed}>
        Link To Project
      </a>,
      <a href={entry.git} title={entry.hed}>
        Git
      </a>
    ]
  ];
}

Entry.proptypes = {
  entry: PropTypes.object.isRequired
};

export default Entry;
