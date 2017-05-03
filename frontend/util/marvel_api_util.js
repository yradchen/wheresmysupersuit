export const fetchSuperHeroes = () => {
  return $.ajax({
    method: 'GET',
    url: `api/marvel/`
  });
};
