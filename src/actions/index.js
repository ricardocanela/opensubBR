import OpenSubtitles from 'opensubtitles-universal-api';
export const FETCH_SEARCH = 'FETCH_SEARCH';
export const SELECT_TVSHOW = 'SELECT_TVSHOW';

export function selectTVShow(serie) {
  return {
    type: SELECT_TVSHOW,
    payload: serie
  };
}

export function requestSearch(tvShow) {
  const api = new OpenSubtitles('tuliocoelho');
  const request = api.search(tvShow);

  return {
    type: FETCH_SEARCH,
    payload: request
  };
}
