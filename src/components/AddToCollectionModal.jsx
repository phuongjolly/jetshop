import React from 'react';
import PropTypes from 'prop-types';
import './AddToCollectionModal.css';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { collectionActions } from '../store/CollectionReducer';

function AddToCollectionModal({ show, collections, updateSelectedItem, selectedItem }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="holder">
        <div className="m-header">
          <span>
            Add to Collection
          </span>
          <button>
            <i className="trash alternate icon" />
          </button>
        </div>
        <div className="content">
          <label>
            Collection Name
          </label>
          <DropDown
            selected={selectedItem}
            items={collections}
            afterSelect={item => updateSelectedItem(item)}
          />
        </div>
        <div className="footer">
          <button>
            Cancel
          </button>
          <button className="positive">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(
  state => state.collections,
  collectionActions,
)(AddToCollectionModal);

AddToCollectionModal.propTypes = {
  show: PropTypes.bool,
  collections: PropTypes.arrayOf(PropTypes.shape()),
  updateSelectedItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape(),
};

AddToCollectionModal.defaultProps = {
  show: false,
  collections: [],
  selectedItem: null,
};
