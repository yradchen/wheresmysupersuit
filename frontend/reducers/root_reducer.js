import { combineReducers } from 'redux';
import SuperHeroReducer from './super_hero_reducer';
import GeolocationReducer from './geolocation_reducer';

const RootReducer = combineReducers({
  superHeroes: SuperHeroReducer,
  geolocation: GeolocationReducer
});

export default RootReducer;
