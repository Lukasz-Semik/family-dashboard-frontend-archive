import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';

import configureStore from 'store/configureStore';
import Routing from 'routing/Routing';

import './styles/global-settings';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
);
