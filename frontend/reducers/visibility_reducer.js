import { RECEIVE_DROPDOWN_STATE } from '../actions/visibility_actions';

const VisibilityReducer = (state = { dropdown: "hidden" }, action) => {
  var newState;
  switch (action.type) {
    case RECEIVE_DROPDOWN_STATE:
      newState = Object.assign({}, state);
      newState.dropdown = action.dropdown;
      return newState;
    default:
      return state;
  }
};

export default VisibilityReducer;
