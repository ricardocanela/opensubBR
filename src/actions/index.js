import OpenSubtitles from 'opensubtitles-universal-api';
export const FETCH_DOWNLOAD = 'FETCH_DOWNLOAD';

export function requestDownload(serie) {
  const api = new OpenSubtitles('tuliocoelho');
  const request = api.search(serie)
  .then(result => {
    console.log(result);
  });
  
  return {
    type: FETCH_DOWNLOAD,
    payload: request
  };
}
