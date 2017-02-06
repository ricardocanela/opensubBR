import { FETCH_DOWNLOAD } from '../actions/index';
export default function(state = null, action) {
  switch(action.type) {
    case FETCH_DOWNLOAD:
      return action.payload;
  }
  return state
}
