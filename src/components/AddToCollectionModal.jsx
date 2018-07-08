import React from 'react';
import PropTypes from 'prop-types';
import './AddToCollectionModal.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import DropDown from './DropDown';
import { collectionModalActions } from '../store/CollectionModalReducer';

class AddToCollectionModal extends React.Component {
  componentDidMount() {
    const { loadCollectionsModal } = this.props;
    loadCollectionsModal();
  }

  componentWillUnmount() {
    const { closeModal } = this.props;
    closeModal();
  }

  render() {
    const {
      collections, isActive, selectedItem,
      closeModal, updateSelectedItem,
      updateItemToAdd, itemToAdd, addToCollections, goToNextState,
    } = this.props;
    if (!isActive) {
      return null;
    }

    if (goToNextState) {
      console.log('co vao day ko?');
      return <Redirect to="/collections" />;
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
            <button className="positive" onClick={() => addToCollections(selectedItem)}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.collectionsModal,
  collectionModalActions,
)(AddToCollectionModal);

AddToCollectionModal.propTypes = {
  isActive: PropTypes.bool,
  collections: PropTypes.arrayOf(PropTypes.shape()),
  updateSelectedItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape(),
  closeModal: PropTypes.func.isRequired,
  updateItemToAdd: PropTypes.func.isRequired,
  itemToAdd: PropTypes.shape(),
  loadCollectionsModal: PropTypes.func.isRequired,
  addToCollections: PropTypes.func.isRequired,
  goToNextState: PropTypes.bool,
};

AddToCollectionModal.defaultProps = {
  isActive: false,
  collections: [],
  selectedItem: null,
  itemToAdd: null,
  goToNextState: false,
};
