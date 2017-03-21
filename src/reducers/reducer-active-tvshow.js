import { SELECT_TVSHOW } from '../actions/index';

export default function (state = { }, action) {
  switch (action.type) {
    case SELECT_TVSHOW:
      return action.payload;
    default:
      return state;
  }
}
