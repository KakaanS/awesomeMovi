import dataBase from "../data/movies.json";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const TrendingMovies = () => {
  // Picks out the movies that have trending = true in the database
  function getTrendningMovies(dataBase) {
    return dataBase.filter((movie) => movie.isTrending === true);
  }

  const trendingMovies = getTrendningMovies(dataBase);

  // we return the list of the trending movies

  return (
    <div>
      <h2>Trending</h2>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}> {/* Makes thumbnail and title pressable and passes the id in the url */}
              <img src={movie.thumbnail} alt={movie.name} /> 
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovies;
