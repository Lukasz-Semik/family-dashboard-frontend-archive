import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { multiClientMiddleware } from 'redux-axios-middleware';
import thunk from 'redux-thunk';

import clients from 'api';

import rootReducer from './rootReducer';

const apiMiddlewareOptions = {
  returnRejectedPromiseOnError: true,
};

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, multiClientMiddleware(clients, apiMiddlewareOptions))
);

function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}

export default configureStore;
