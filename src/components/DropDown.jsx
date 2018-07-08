import React from 'react';
import PropTypes from 'prop-types';

import './DropDown.css';

class DropDown extends React.Component {
  filterItem(item) {
    let { selected } = this.props;
    if (!selected) {
      selected = {
        name: '',
      };
    }
    return item.name.toLowerCase().includes(selected.name.toLowerCase());
  }

  onChange(item) {
    const { items, afterSelect, updateItemToAdd } = this.props;
    afterSelect(item);
    const filterResult = items.filter(i => this.filterItem(i));
    if (filterResult.length === 0) {
      updateItemToAdd(item);
    } else {
      updateItemToAdd(null);
    }
  }

  render() {
    const {
      selected, afterSelect, items, itemToAdd, updateItemToAdd,
    } = this.props;
    return (
      <div className="drop-down">
        <input
          placeholder="Create new collection or select from drop box"
          value={selected ? selected.name : ''}
          onChange={event => this.onChange({ name: event.target.value })}
        />
        <div id="drop-down-content" className="drop-down-content">
          {itemToAdd
          && (
            <a
              href={`#${itemToAdd.id}`}
              key={itemToAdd.id}
              onKeyPress={() => afterSelect(itemToAdd)}
              onClick={() => { afterSelect(itemToAdd); updateItemToAdd(null); }}
              className="item itemToAdd"
            >
              <span className="item-label">New collection: </span>
              <span>
                {itemToAdd.name}
              </span>
            </a>
          )
          }
          {items.filter(item => this.filterItem(item)).map(item => (
            <a
              href={`#${item._id}`}
              key={item._id}
              onKeyPress={() => afterSelect(item)}
              onClick={() => afterSelect(item)}
              className="item"
            >
              <i className="circle icon" />
              <span>
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

DropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
  afterSelect: PropTypes.func.isRequired,
  selected: PropTypes.shape(),
  updateItemToAdd: PropTypes.func.isRequired,
  itemToAdd: PropTypes.shape(),
};

DropDown.defaultProps = {
  items: [],
  selected: null,
  itemToAdd: null,
};
export default DropDown;
