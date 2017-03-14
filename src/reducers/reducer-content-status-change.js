import { CONTENT_STATUS_CHANGE } from '../actions/index';
export default function(state = null, action) {
  switch(action.type) {
    case CONTENT_STATUS_CHANGE:
      return action.payload;
  }
  return state
}
