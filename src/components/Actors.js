import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => 
        <div key={index}>
          <h2>Actor: {actor.name}</h2>
          <h2>Movies:
            <ul>
              {actor.movies.map((movie, index) => 
                <li key={index}>{movie}</li>
              )}
            </ul>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Actors;
