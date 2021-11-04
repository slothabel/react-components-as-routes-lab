import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {<h1>Movies Page</h1>}
        {movies.map((movie, index) => 
        <div key={index}>
          <h4>Title: {movie.title}</h4>
          <h4>Time: {movie.time}</h4>
          <h4>Genres:</h4>
            <ul>
              {movie.genres.map((g, index) =>
                <li key={index}>{g}</li>
                )}
            </ul>
        </div>
        )}
    </div>
  );
};

export default Movies;
