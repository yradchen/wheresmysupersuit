export const RECEIVE_LOCATION  = "RECEIVE_LOCATION";

const receiveLoadingState = (geolocation) => ({
  type: RECEIVE_LOCATION,
  geolocation
});

export const setLoadingState = (geolocation) => dispatch => (
  dispatch(receiveLoadingState(geolocation))
);
