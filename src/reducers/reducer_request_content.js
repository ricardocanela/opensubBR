import { REQUEST_CONTENT } from '../actions/index';
export default function(state = null, action) {
  switch(action.type) {
    case REQUEST_CONTENT:
      return action.payload;
  }
  return state
}
