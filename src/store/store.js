import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import ReviewListReducer from './ReviewListReducer';
import ReviewReducer from './ReviewReducer';
import CollectionReducer from './CollectionReducer';

const reducers = {
  reviewList: ReviewListReducer,
  review: ReviewReducer,
  collections: CollectionReducer,
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger),
);

export default store;
