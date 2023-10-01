import { Link } from "react-router-dom"; // Import Link from react-router-dom
import dataBase from '../data/movies.json'
import TitleLine from './ui/TitleLine';
import MovieCard from './ui/MovieCard';

const TrendingMovies = () => {
  // Picks out the movies that have trending = true in the database
  function getTrendningMovies(dataBase) {
    return dataBase.filter((movie) => movie.isTrending === true);
  }

  const trendingMovies = getTrendningMovies(dataBase);
  // we return the list of the trending movies
  return (
    <div>
      <TitleLine text="Trending" />
      <div>
        {trendingMovies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`}> {/* Makes thumbnail and title pressable and passes the id in the url */}
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
