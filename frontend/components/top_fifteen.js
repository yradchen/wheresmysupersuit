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
      <button className="blue-button" onClick={props.fetchSuperHeroes}>Fetch Top 15 Heroes</button>

      <div className="dropdown ">
        <button className="blue-button" onClick={toggleDropDown}>Show Top Fifteen Heroes</button>
        <div className={`drop-items bordered ${props.dropdown}`}>
          <ul>
            {superHeroes}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopFifteen;
