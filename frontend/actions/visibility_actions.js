export const RECEIVE_DROPDOWN_STATE = "RECEIVE_DROPDOWN_STATE";

const receiveDropdownState = (dropdown) => ({
  type: RECEIVE_DROPDOWN_STATE,
  dropdown
});

export const setDropdownState = (visibility) => dispatch => (
  dispatch(receiveDropdownState(visibility))
);
