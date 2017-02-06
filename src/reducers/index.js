import { combineReducers } from 'redux';
import SeriesReducer from './reducer_series';
import ActiveSerie from './reducer_active_serie';
import SearchApi from './reducer_search_api';

const rootReducer = combineReducers({
  series: SeriesReducer,
  activeSerie: ActiveSerie,
  searchResult: SearchApi
});

export default rootReducer;
