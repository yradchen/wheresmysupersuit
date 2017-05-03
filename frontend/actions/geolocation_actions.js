export const RECEIVE_GEOLOCATION  = "RECEIVE_GEOLOCATION";

const receiveGeolocation = (geolocation) => ({
  type: RECEIVE_GEOLOCATION,
  geolocation
});

export const setGeolocation = (geolocation) => dispatch => (
  dispatch(receiveGeolocation(geolocation))
);
