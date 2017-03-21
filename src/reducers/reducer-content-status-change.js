import { CONTENT_STATUS_CHANGE } from '../actions/index';

export default function (state = false, action) {
  switch (action.type) {
    case CONTENT_STATUS_CHANGE:
      return action.payload;
    default:
      return state;
  }
}
