import { combineReducers } from 'redux';
import TestReducer from './reducer_test';

const rootReducer = combineReducers({
  test: TestReducer
});

export default rootReducer;
