import * as MarvelAPIUtil from '../util/marvel_api_util';
export const RECEIVE_SUPERHEROES = 'RECEIVE_SUPERHEROES';
export const RECEIVE_SUPERHERO = 'RECEIVE_SUPERHERO';

const receiveSuperHero  = (superHero) => ({
  type: RECEIVE_SUPERHERO,
  superHero
});

const receiveSuperHeroes = (superHeroes) => ({
  type: RECEIVE_SUPERHEROES,
  superHeroes
});

export const fetchSuperHeroes = () => (dispatch) => ( MarvelAPIUtil.fetchSuperHeroes().then(
    superHeroes => dispatch(receiveSuperHeroes(superHeroes))
  )
);

export const fetchSuperHero = (location) => (dispatch) => (
  MarvelAPIUtil.fetchSuperHero(location).then(superHero => dispatch(receiveSuperHero(superHero)))
);
