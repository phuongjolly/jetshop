import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { collectionActions } from '../store/CollectionReducer';
import './Home.css';
import { collectionModalActions } from '../store/CollectionModalReducer';
import Review from './Review';
import { reviewListActions } from '../store/ReviewListReducer';

class Collection extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { loadCollectionById } = this.props;
    loadCollectionById(id);
  }

  render() {
    const {
      collection, showAsGrid, toggleGrid, toggleList,
      showMore, shortText, openModal,
    } = this.props;

    return (
      <div>
        {collection
          && (
            <div className="list-review">
              <div className="page-title">
                  {collection.name}
                <div className="view-button">
                  <button onClick={toggleList}>
                    <i className="list icon" />
                List View
                  </button>
                  <button onClick={toggleGrid}>
                    <i className="table icon" />
                Grid View
                  </button>
                </div>
              </div>
              <div className="wrapper">
                <div className="page-content">
                  <div className={`reviews ${showAsGrid ? 'grid' : ''}`}>
                    {collection.reviews.length > 0 ? (collection.reviews.map(review => (
                      <Review
                        key={review._id}
                        review={review}
                        showMore={showMore}
                        shortText={shortText}
                        openModal={openModal}
                      />
                    )))
                      : (
                        <div>
                        No review
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default connect(
  state => ({ ...state.collection, ...state.reviewList }),
  ({ ...collectionActions, ...collectionModalActions, ...reviewListActions }),
)(Collection);

Collection.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  loadCollectionById: PropTypes.func.isRequired,
  collection: PropTypes.shape(),
  showAsGrid: PropTypes.bool,
  toggleGrid: PropTypes.func.isRequired,
  toggleList: PropTypes.func.isRequired,
  showMore: PropTypes.func.isRequired,
  shortText: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
};

Collection.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: '',
    }),
  }),
  shortText: false,
  collection: null,
  showAsGrid: false,
};
