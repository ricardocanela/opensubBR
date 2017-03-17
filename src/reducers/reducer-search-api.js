import { FETCH_SEARCH } from '../actions/index';
export default function(state = null, action) {
  switch(action.type) {
    case FETCH_SEARCH:
    if(action.payload.pb) {
      return action.payload.pb
    } else {
      return state;
    }
  }
  return state
}
