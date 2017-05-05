import { RECEIVE_SUPERHEROES, RECEIVE_SUPERHERO } from  '../actions/marvel_actions';

const _state = {
  topFifteen: ["Database loading"],
  closest: []
};

const SuperHeroReducer = (state = _state, action) => {
  var newState;
  switch (action.type) {
    case RECEIVE_SUPERHEROES:
      newState = Object.assign({}, state);
      newState.topFifteen = action.superHeroes;
      return newState;
    case RECEIVE_SUPERHERO:
      newState = Object.assign({}, state);
      newState.closest = action.superHero;
      return newState;
    default:
      return state;
  }
};

export default SuperHeroReducer;
