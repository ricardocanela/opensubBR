import { combineReducers } from 'redux';
import TVShowsReducer from './reducer-tvshows';
import ActiveTarget from './reducer-active-target';
import SearchAPI from './reducer-search-api';
import ContentStatusChange from './reducer-content-status-change';
import MoviesReducer from './reducer-movies';

const rootReducer = combineReducers({
  tvShows: TVShowsReducer,
  activeTarget: ActiveTarget,
  searchResult: SearchAPI,
  searchContentStatus: ContentStatusChange,
  movies: MoviesReducer,
});

export default rootReducer;
