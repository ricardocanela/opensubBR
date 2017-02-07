import { SELECT_TVSHOW } from '../actions/index';
export default function(state = null, action) {
  switch(action.type) {
    case SELECT_TVSHOW:
      return action.payload;
  }
  return state
}
