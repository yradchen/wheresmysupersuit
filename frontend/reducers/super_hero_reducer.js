import { RECEIVE_SUPERHEROES } from  '../actions/marvel_actions';

const SuperHeroReducer = (state = {}, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_SUPERHEROES:
      return action.superHeroes;
    default:
      return state;
  }
};

export default SuperHeroReducer;