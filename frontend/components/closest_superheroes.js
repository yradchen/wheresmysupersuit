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
    <ul className={`superhero absolute ${visible}`}>
      <p>Closest Heroes</p>
      {heroes}
    </ul>
  );
};
// class ClosestSuperHeroes extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return <p className="superhero absolute">SuperHeroContainer</p>;
//   }
// }
//
export default ClosestSuperHeroes;
