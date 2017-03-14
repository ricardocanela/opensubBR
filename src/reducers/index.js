import { combineReducers } from 'redux';
import TVShowsReducer from './reducer_tvshows';
import ActiveTVShow from './reducer_active_tvshow';
import SearchAPI from './reducer_search_api';
import RequestContent from './reducer_request_content';

const rootReducer = combineReducers({
  tvShows: TVShowsReducer,
  activeTVShow: ActiveTVShow,
  searchResult: SearchAPI,
  requestContentResponse: RequestContent
});

export default rootReducer;
