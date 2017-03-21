import { FETCH_SEARCH } from '../actions/index';

export default function(state = [], action) {
  const EMPTY = 0;
  switch (action.type) {
    case FETCH_SEARCH:
      if (action.payload.pb.length > EMPTY) {
        return action.payload.pb;
      } else if (action.payload.pb.length === EMPTY) {
        return state;
      }
    default:
      return state;
  }
}
