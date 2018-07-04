import React from 'react';
import PropTypes from 'prop-types';

import './DropDown.css';

function DropDown({ selected, afterSelect, items }) {
  return (
    <div className="drop-down">
      <input
        placeholder="name"
        value={selected ? selected.name : ''}
        onChange={event => afterSelect({ name: event.target.value })}
      />
      <div className="drop-down-content">
        {items.map(item => (
          <div key={item.name} className="item">
            <i className="circle icon" />
            <span
              role="collectionList"
              onKeyPress={() => afterSelect(item)}
              onClick={() => afterSelect(item)}
              tabIndex={0}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

DropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
  afterSelect: PropTypes.func.isRequired,
  selected: PropTypes.shape(),
};

DropDown.defaultProps = {
  items: [],
  selected: null,
};
export default DropDown;
