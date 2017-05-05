import { combineReducers } from 'redux';
import SuperHeroReducer from './super_hero_reducer';
import GeolocationReducer from './geolocation_reducer';
import VisibilityReducer from './visibility_reducer';

const RootReducer = combineReducers({
  superHeroes: SuperHeroReducer,
  geolocation: GeolocationReducer,
  visibility: VisibilityReducer
});

export default RootReducer;
