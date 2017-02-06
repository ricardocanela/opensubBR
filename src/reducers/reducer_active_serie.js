import { SELECT_SERIE } from '../actions/index';
export default function(state = null, action) {
  switch(action.type) {
    case SELECT_SERIE:
      return action.payload;
  }
  return state
}
