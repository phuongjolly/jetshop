import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import { BannerReducer } from './BannerReducer';
import HomeReducer from './HomeReducer';

const reducers = {
  banner: BannerReducer,
  home: HomeReducer,
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger),
);

export default store;
