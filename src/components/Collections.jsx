import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Collections.css';

class Collections extends React.Component {
  getValidImages(collection) {
    return collection.reviews.filter(review => review.image !== '');
  }

  render() {
    const { collections } = this.props;
    let images_filter = [];
    collections.map(collection => (
      images_filter.push(this.getValidImages(collection))
    ));

    console.log(images_filter);

    return (
      <div className="page-collection">
        <div className="page-title">
          Collections
        </div>
        <div className="wrapper">
          <div className="collections">
            {
              collections.map((collection, index) => (
                <div key={collection.id} className="collection">
                  {
                    images_filter[index].length > 0
                      ? (
                        <div className="images">
                          <div className="row">
                            {images_filter[index].slice(0, 2).map(item => (
                              <div className="item" key={images_filter[index]} style={{ backgroundImage: `url(${item.image})` }} />
                            ))}
                          </div>
                          {
                          images_filter[index].length > 2
                          && (
                            <div className="row">
                              {images_filter[index].slice(2, 4).map(item => (
                                <div className="item" key={images_filter[index]} style={{ backgroundImage: `url(${item.image})` }} />
                              ))}
                            </div>
                          )
                        }
                        </div>
                      ) : (
                        <div className="images">
                          <div className="row">
                            <div
                              className="item"
                              style={{ backgroundImage: 'url(https://usateatsiptrip.files.wordpress.com/2018/02/gettyimages-601941442.jpg?w=1000&h=600&crop=1)' }}
                            />
                          </div>
                        </div>
                      )}
                  <div className="title">
                    {collection.name}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.collectionList,
)(Collections);

Collections.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.shape()),
};

Collections.defaultProps = {
  collections: [],
};
