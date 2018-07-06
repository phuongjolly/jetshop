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
        {review.images.length > 0
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
                <span className="show-more" onClick={() => this.props.showMore()}>
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
            <button type="button" onClick={this.props.openModal}>
              <i className="fa fa-bookmark-o" />
              Save
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
