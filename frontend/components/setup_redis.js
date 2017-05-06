import React from 'react';

const SetupRedis = ( {setupSuperHeroes} ) => {



  return (
    <div className="absolute setup-redis">
      <button className="blue-button" onClick={setupSuperHeroes}>Setup Redis DataBase</button>
    </div>
  );
};

export default SetupRedis;
