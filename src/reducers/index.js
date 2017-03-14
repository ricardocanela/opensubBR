import { combineReducers } from 'redux';
import TVShowsReducer from './reducer-tvshows';
import ActiveTVShow from './reducer-active-tvshow';
import SearchAPI from './reducer-search_api';
import ContentStatusChange from './reducer-content-status-change';

const rootReducer = combineReducers({
  tvShows: TVShowsReducer,
  activeTVShow: ActiveTVShow,
  searchResult: SearchAPI,
  contentStatus: ContentStatusChange
});

export default rootReducer;
