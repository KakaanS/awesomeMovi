import dataBase from '../data/movies.json';
import MovieCard from './ui/MovieCard';
import TitleLine from './ui/TitleLine';

const RecomendedMovies = () => {

  // Picking out random movies 

  function getRecommendedMovies(database, count) {
    const shuffled = database.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // We want six random movies from the database
  
  const randomMovies = getRecommendedMovies(dataBase, 6);

  // We return the list of the films we randomly found

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