import React from 'react';
import './Home.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends React.Component {
  getStar(number) {
    return `star${number}`;
  }
  render() {
    const { reviews } = this.props;
    return (
      <div className="container">
        <div className="page-title">
          List of Reviews
        </div>
        <div className="wrapper">
          <div className="page-content">
            {reviews.map(review => (
              <div className="review" key={review.id}>
                <div className="review-image">
                  <img src={review.images[0].url} />
                </div>
                <div className="review-info">
                  <div className="user-avatar">
                    <img src={review.user.avatar} />
                  </div>
                  <div className="review-detail">
                    <div className="review-title">
                      {review.title}
                    </div>
                    <div className="review-content">
                      {review.content}
                    </div>
                  </div>
                  <div className="review-rate">
                    <div className={this.getStar(review.rate)}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.home,
)(Home);

Home.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape()),
};

Home.defaultProps = {
  reviews: null,
};
