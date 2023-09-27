import dataBase from '../data/movies.json';
import MovieCard from './ui/MovieCard';
import TitleLine from './ui/TitleLine';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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
        {randomMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            {/* Makes thumbnail and title pressable and passes the id in the url */}
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecomendedMovies;