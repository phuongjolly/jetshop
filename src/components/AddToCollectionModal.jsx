import React from 'react';
import PropTypes from 'prop-types';
import './AddToCollectionModal.css';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { collectionActions } from '../store/CollectionModalReducer';

function AddToCollectionModal({
  collections, isActive, selectedItem,
  closeModal, updateSelectedItem,
  updateItemToAdd, itemToAdd,
}) {
  if (!isActive) {
    return null;
  }

  document.body.style.overflow = 'hidden';

  return (
    <div className="modal">
      <div className="holder">
        <div className="m-header">
          <span>
          Add to Collection
          </span>
          <button onClick={() => closeModal()}>
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
            updateItemToAdd={updateItemToAdd}
            itemToAdd={itemToAdd}
          />
        </div>
        <div className="footer">
          <button onClick={() => closeModal()}>
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
  state => state.collectionsModal,
  collectionActions,
)(AddToCollectionModal);

AddToCollectionModal.propTypes = {
  isActive: PropTypes.bool,
  collections: PropTypes.arrayOf(PropTypes.shape()),
  updateSelectedItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape(),
  closeModal: PropTypes.func.isRequired,
  updateItemToAdd: PropTypes.func.isRequired,
  itemToAdd: PropTypes.shape(),
};

AddToCollectionModal.defaultProps = {
  isActive: false,
  collections: [],
  selectedItem: null,
  itemToAdd: null,
};
