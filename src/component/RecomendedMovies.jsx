import React from 'react';
import dataBase from '../data/movies.json';
import MovieCard from './ui/MovieCard';
import TitleLine from './ui/TitleLine';

const RecomendedMovies = () => {
  function getRecommendedMovies(database, count) {
    const shuffled = database.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomMovies = getRecommendedMovies(dataBase, 4);

  return (
    <div>
      <TitleLine text="Recommended for you" /> 
      <div>
        {randomMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default RecomendedMovies;
