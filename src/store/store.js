import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import ReviewListReducer from './ReviewListReducer';
import CollectionsModalReducer from './CollectionModalReducer';
import CollectionListReducer from './CollectionListReducer';
import CollectionReducer from './CollectionReducer';

const reducers = {
  reviewList: ReviewListReducer,
  collectionsModal: CollectionsModalReducer,
  collectionList: CollectionListReducer,
  collection: CollectionReducer,
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger),
);

export default store;
