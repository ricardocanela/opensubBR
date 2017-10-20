import { SELECT_TARGET } from '../actions/index';

export default function (state = { }, action) {
  switch (action.type) {
    case SELECT_TARGET:
      return action.payload;
    default:
      return state;
  }
}
