import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import ReviewListReducer from './ReviewListReducer';
import CollectionsModalReducer from './CollectionModalReducer';
import CollectionListReducer from './CollectionListReducer';
import CollectionReducer from './CollectionReducer';
import ProfileReducer from './ProfileReducer';
import AuthenticationReducer from './AuthenticationReducer';

const reducers = {
  reviewList: ReviewListReducer,
  collectionsModal: CollectionsModalReducer,
  collectionList: CollectionListReducer,
  collection: CollectionReducer,
  profile: ProfileReducer,
  authentication: AuthenticationReducer,
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger),
);

export default store;
