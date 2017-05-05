import { RECEIVE_SUPERHEROES } from  '../actions/marvel_actions';

const SuperHeroReducer = (state = ["Click Get Top Fifteen!"], action) => {
  switch (action.type) {
    case RECEIVE_SUPERHEROES:
      return action.superHeroes;
    default:
      return state;
  }
};

export default SuperHeroReducer;
