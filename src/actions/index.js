import OpenSubtitles from 'opensubtitles-universal-api';

export const FETCH_SEARCH = 'FETCH_SEARCH';
export const SELECT_TARGET = 'SELECT_TARGET';
export const CONTENT_STATUS_CHANGE = 'CONTENT_STATUS';


export function contentStatusChange(status) {
  return {
    type: CONTENT_STATUS_CHANGE,
    payload: status,
  };
}

export function selectTarget(target) {
  return {
    type: SELECT_TARGET,
    payload: target,
  };
}

export function requestSearch(tvShow) {
  const api = new OpenSubtitles('tuliocoelho');
  const request = api.search(tvShow);

  return {
    type: FETCH_SEARCH,
    payload: request,
  };
}
