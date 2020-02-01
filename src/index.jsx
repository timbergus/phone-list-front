// @flow

import './style.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Routes from './routes/routes';

render(
  <Provider store={store}><Routes /></Provider>,
  window.document.getElementById('root'),
);
