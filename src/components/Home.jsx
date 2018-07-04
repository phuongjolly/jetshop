import React from 'react';
import './Home.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './Review';
import { reviewListActions } from '../store/ReviewListReducer';

function Home({
  reviews, showAsGrid, toggleGrid, toggleList, showMore, shortText,
}) {
  console.log(toggleGrid);
  return (
    <div className="list-review">
      <div className="page-title">
        <span>
            Reviews
        </span>
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
            {reviews.map(review => (
              <Review key={review.id} review={review} showMore={showMore} shortText={shortText} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

console.log(reviewListActions);

export default connect(
  state => state.reviewList,
  reviewListActions,
)(Home);

Home.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape()),
  showAsGrid: PropTypes.bool.isRequired,
  toggleGrid: PropTypes.func.isRequired,
  toggleList: PropTypes.func.isRequired,
  showMore: PropTypes.func.isRequired,
  shortText: PropTypes.bool,
};

Home.defaultProps = {
  reviews: null,
  shortText: true,
};
