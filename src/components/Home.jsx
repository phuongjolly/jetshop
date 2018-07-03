import React from 'react';
import './Home.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './Review';
import { reviewListActions } from '../store/ReviewListReducer';

function Home({ reviews, showAsGrid, toggleGrid, showMore, shortText }) {
  console.log(toggleGrid);
  return (
    <div className="list-review">
      <div className="page-title">
        List of Reviews
        <button role="button" onClick={toggleGrid}>
          { showAsGrid ? 'Show as List' : 'Show as Grid' }
        </button>
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
  showMore: PropTypes.PropTypes.isRequired,
  shortText: PropTypes.bool,
};

Home.defaultProps = {
  reviews: null,
  shortText: true,
};
