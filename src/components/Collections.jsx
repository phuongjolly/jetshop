import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Collections.css';
import { Link } from 'react-router-dom';
import { collectionsActions } from '../store/CollectionListReducer';

class Collections extends React.Component {
  async componentDidMount() {
    const { loadCollections } = this.props;
    loadCollections();
  }

  getValidImages(collection) {
    return collection.reviews.filter(review => review.image !== '');
  }

  render() {
    const { collections } = this.props;
    const imagesFilter = [];
    collections.map(collection => (
      imagesFilter.push(this.getValidImages(collection))
    ));

    return (
      <div className="page-collection">
        <div className="page-title">
          Collections
        </div>
        <div className="wrapper">
          <div className="collections">
            {
              collections.map((collection, index) => (
                <Link to={`/collections/${collection._id}`}
                      key={collection._id}
                      className="collection">
                  {
                    imagesFilter[index].length > 0
                      ? (
                        <div className="images">
                          <div className="row">
                            {imagesFilter[index].slice(0, 2).map(item => (
                              <div className="item" key={imagesFilter[index]._id} style={{ backgroundImage: `url(${item.image})` }} />
                            ))}
                          </div>
                          {
                            imagesFilter[index].length > 2
                            && (
                              <div className="row">
                                {imagesFilter[index].slice(2, 4).map(item => (
                                  <div className="item" key={imagesFilter[index]._id} style={{ backgroundImage: `url(${item.image})` }} />
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
                              style={{ backgroundImage: 'url(https://img.grouponcdn.com/deal/3iSRjRwLapG3mnpKHyrVFAmDd8xd/3i-2000x1200/v1/c700x420.jpg)' }}
                            />
                          </div>
                        </div>
                      )}
                  <div className="title">
                    {collection.name}
                  </div>
                </Link>
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
  collectionsActions,
)(Collections);

Collections.propTypes = {
  collections: PropTypes.arrayOf(PropTypes.shape()),
};

Collections.defaultProps = {
  collections: [],
};
