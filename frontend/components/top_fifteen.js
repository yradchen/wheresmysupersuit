import React from 'react';

const TopFifteen = (props) => {
  const toggleDropDown = (e) => {
    e.stopPropagation();
    if (props.dropdown == "hidden") {
      props.setDropdownState("");
    } else {
      props.setDropdownState("hidden");
    }
  };
  const superHeroes = props.topFifteenHeroes.map( (hero, index) => {
    return <li key={`${hero}`}>{`${index + 1}. ${hero}`}</li>;
  });

  return (
    <div className="absolute all-heroes">
      <button onClick={props.fetchSuperHeroes}>Get Top 15 Marvel Superheroes!</button>

      <div className="dropdown ">
        <button onClick={toggleDropDown}>Show Top Fifteen</button>
        <div className={`drop-items ${props.dropdown}`}>
          <ul>
            {superHeroes}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopFifteen;
