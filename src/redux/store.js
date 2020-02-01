// @flow

import thunk from 'redux-thunk';
import {
  combineReducers,
  applyMiddleware,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import phone from './reducers/phone';
import phones from './reducers/phones';

const reducer = combineReducers({ phone, phones });
const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
));

export default store;
