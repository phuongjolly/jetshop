import React from 'react';
import PropTypes from 'prop-types';
import './Review.css';

const maxLength = 200;
class Review extends React.Component {
  showShortText(content) {
    if (content.length > maxLength) {
      const shortText = content.substr(0, maxLength - 1);
      return (
        <p>
          { shortText }
          <span className="show-more" onClick={() => this.props.showMore()}>
            [...]
          </span>
        </p>
      );
    }
    return (
      <p>
        { content }
      </p>
    );
  }

  render() {
    const { review, shortText } = this.props;
    return (
      <div className="review">
        <div
          className="image"
          style={{ backgroundImage: `url(${review.images[0].url}` }}
        />
        <div className="title">
          { review.title }
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-o" />
          </div>
        </div>
        <div className="dish-info">
          <div>
            { review.dish.name}
          </div>
          <div>
            { review.dish.type}
          </div>
          <div>
            { review.dish.restaurant}
          </div>
        </div>
        <div className="content">
          {shortText ? this.showShortText(review.content) : (
            <p>
              { review.content }
            </p>
          )}
        </div>
        <div className="user-info">
          <div className="avatar">
            <img alt="user avatar" src={review.user.avatar} />
          </div>
          <div className="description">
            <div className="username">
              { review.user.name }
            </div>
            <div className="time">
              2 days ago
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;

Review.propTypes = {
  review: PropTypes.shape(),
  showMore: PropTypes.func.isRequired,
  shortText: PropTypes.bool,
};

Review.defaultProps = {
  review: null,
  shortText: true,
};
