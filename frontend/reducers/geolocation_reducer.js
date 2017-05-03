import { RECEIVE_LOCATION } from  '../actions/geolocation_actions';

const skedaddle = { lat: 42.3565754, lng: -71.06045619999998 };

const GeolocationReducer = (state = skedaddle, action) => {
  switch (action.type) {
    case RECEIVE_LOCATION:
      return action.geolocation;
    default:
      return state;
  }
};

export default GeolocationReducer;
