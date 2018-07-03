import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import ReviewListReducer from './ReviewListReducer';
import ReviewReducer from './ReviewReducer';

const reducers = {
  reviewList: ReviewListReducer,
  review: ReviewReducer,
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger),
);

export default store;
