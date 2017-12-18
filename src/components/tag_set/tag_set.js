import React from 'react';
import Tag from '../tag/tag';

import './tag_set.css';

function TagSet(props) {
  const doesAnySelectionExist = Boolean(props.selected.length);

  return (
    <div className="tag-set">
      <h4 className="tag-set__name">{props.name}</h4>
      <ul className="tag-set__list">
        {props.tags.map(function(tag, index) {
          const isSelected = props.selected.indexOf(tag) !== -1;
          return (
            <Tag
              key={index}
              name={tag}
              onClick={props.onClick}
              isSelected={isSelected}
            />
          );
        })}
      </ul>
      {doesAnySelectionExist ? (
        <button
          type="button"
          className="tag-set__button"
          onClick={props.removeFilterAction}
        >
          Remove all filters
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

TagSet.defaultProps = {
  selected: []
};

export default TagSet;
