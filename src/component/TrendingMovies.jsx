import dataBase from '../data/movies.json'
import TitleLine from './ui/TitleLine';
import MovieCard from './ui/MovieCard';

const TrendingMovies = () => {

  // Picks out the movies that have trending = true in the database

    function getTrendningMovies(dataBase) {
        return dataBase.filter(movie => movie.isTrending === true)
    }

    const trendingMovies = getTrendningMovies(dataBase)

  // we return the list of the trending movies
  
  return (
    <div>
      <TitleLine text="Trending" /> 
      <div>
        {trendingMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies