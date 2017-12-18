import React from 'react';
import './tag.css';
function Tag(props) {
  return (
    <li
      className={`tag ${props.isSelected ? 'tag--selected' : ''}`}
      onClick={() => props.onClick(props.name)}
    >
      {props.name}
    </li>
  );
}

export default Tag;
