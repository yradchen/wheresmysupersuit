import { combineReducers } from 'redux';
import SuperHeroReducer from './super_hero_reducer';

const RootReducer = combineReducers({
  superHeroes: SuperHeroReducer
});

export default RootReducer;
