import { FETCH_SEARCH } from '../actions/index';
export default function(state = null, action) {
  switch(action.type) {
    case FETCH_SEARCH:
      return action.payload;
  }
  return state
}
