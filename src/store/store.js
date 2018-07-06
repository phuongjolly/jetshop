import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import ReviewListReducer from './ReviewListReducer';
import ReviewReducer from './ReviewReducer';
import CollectionModalReducer from './CollectionModalReducer';
import CollectionListReducer from './CollectionListReducer';

const reducers = {
  reviewList: ReviewListReducer,
  review: ReviewReducer,
  collectionsModal: CollectionModalReducer,
  collectionList: CollectionListReducer,
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger),
);

export default store;
