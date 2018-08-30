import { combineReducers } from 'redux';

import setupTester from './setupTester/reducer';

const rootReducer = combineReducers({
  setupTester,
});

export default rootReducer;
