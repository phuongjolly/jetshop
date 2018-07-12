import React from 'react';
import PropTypes from 'prop-types';
import './Review.css';
import { Link } from 'react-router-dom';

const maxLength = 160;
class Review extends React.Component {
  showShortText(content) {
    const { showMore } = this.props;
    if (content.length > maxLength) {
      const shortText = content.substr(0, maxLength - 1);
      return (
        <p>
          { shortText }
          <span className="show-more" onClick={() => showMore()}>
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
    const {
      review, shortText, openModal, showMore,
    } = this.props;
    let action = '';
    if (review.collection) {
      console.log(review);
      action = (
        <Link to={`/collections/${review.collection._id}`}>
          <button className="view-collection" type="button" onClick={() => openModal(review)}>
            <i className="fa fa-bookmark-o" />
            {review.collection.name}
          </button>
        </Link>
      );
    } else {
      action = (
        <button type="button" onClick={() => openModal(review)}>
          <i className="fa fa-bookmark-o" />
          Save
        </button>
      );
    }
    return (
      <div className="review">
        {review.image
          && (
          <div
            className="image"
            style={{ backgroundImage: `url(${review.image})` }}
          />
          )
        }
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
          <span className="name">
            <i className="fa fa-cutlery" />
            &nbsp;
            { review.dish.type}
          </span>
          &nbsp;&bull;&nbsp;
          <span className="restaurant">
            <i className="fa fa-building-o" />
            &nbsp;
            { review.dish.restaurant}
          </span>
        </div>
        <div className="content">
          {shortText ? this.showShortText(review.content) : (
            <p>
              { review.content }
              {(review.content.length > maxLength) && (
                <span className="show-more" onClick={() => showMore()}>
                  [...]
                </span>
              )}
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
          <div className="actions">
            {action}
          </div>
        </div>
        <div className="comments">
          <div className="comment">
            <input placeholder="Add your comment..." />
            <button>
              Post
            </button>
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
  openModal: PropTypes.func.isRequired,
};

Review.defaultProps = {
  review: null,
  shortText: true,
};
