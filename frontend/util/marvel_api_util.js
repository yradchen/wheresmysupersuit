export const fetchSuperHeroes = () => {
  return $.ajax({
    method: 'GET',
    url: `api/marvel/`
  });
};

export const fetchSuperHero = (location) => {
  return $.ajax({
    method: 'GET',
    url: `api/marvel/hero`,
    data: { location }
  });
};

export const setupSuperHeroes = () => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `api/marvel/hero`,
  });
};
