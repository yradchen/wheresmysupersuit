import { RECEIVE_GEOLOCATION } from  '../actions/geolocation_actions';

const skedaddle = { lat: 42.3565754, lng: -71.06045619999998 };

const GeolocationReducer = (state = skedaddle, action) => {
  switch (action.type) {
    case RECEIVE_GEOLOCATION:
      return action.geolocation;
    default:
      return state;
  }
};

export default GeolocationReducer;
