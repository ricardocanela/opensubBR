import { combineReducers } from 'redux';
import SeriesReducer from './reducer_series';

const rootReducer = combineReducers({
  series: SeriesReducer
});

export default rootReducer;
