import { FETCH_SEARCH } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SEARCH:
      if (action.payload.pb) {
        return action.payload.pb;
      } else {
        return state;
      }
    default:
      return state;
  }
}
