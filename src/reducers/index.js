import { combineReducers } from 'redux';
import SeriesReducer from './reducer_series';
import ActiveSerie from './reducer_active_serie';

const rootReducer = combineReducers({
  series: SeriesReducer,
  activeSerie: ActiveSerie
});

export default rootReducer;
