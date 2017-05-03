export const fetchSuperHeroes = () => {
  return $.ajax({
    method: 'GET',
    url: `api/marvel/`
  });
};

export const fetchSuperHero = (location) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: `api/marvel/1`
    // data: { location }
  });
};
