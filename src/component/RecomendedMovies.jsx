import React from 'react';
import dataBase from '../data/movies.json';
import MoviesHomeRecomended from "../component/ui/MoviesHomeRecomended";
import Title from "../component/ui/Title"; 

const RecomendedMovies = () => {
  function getRecommendedMovies(database, count) {
    const shuffled = database.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomMovies = getRecommendedMovies(dataBase, 4);

  return (
    <div>
      <Title text="Recommended for you" /> 
      <div>
        {randomMovies.map(movie => (
          <MoviesHomeRecomended key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default RecomendedMovies;
