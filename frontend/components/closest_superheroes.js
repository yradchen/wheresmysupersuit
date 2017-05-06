import React from 'react';

const ClosestSuperHeroes = ({ closestSuperheroes }) => {
  const heroes = closestSuperheroes.map( (hero, index) => {
    return <li key={`c${hero}`}>{`${index + 1}. ${hero}`}</li>;
  })
  let visible = ""
  if (heroes.length === 0) {
    visible = "hidden"
  }

  return (
    <ul className={`bordered superhero absolute ${visible}`}>
      <p>Closest Heroes</p>
      {heroes}
    </ul>
  );
};
//
export default ClosestSuperHeroes;
