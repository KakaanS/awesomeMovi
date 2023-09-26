import dataBase from '../data/movies.json';
import MovieCard from './ui/MovieCard';
import TitleLine from './ui/TitleLine';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const RecomendedMovies = () => {
  // Plocka ut filmer som inte har trending=true
  const nonTrendingMovies = dataBase.filter(movie => movie.isTrending !== true);

  // Blanda de icke-trending filmerna slumpmässigt
  function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Välj fem slumpmässiga icke-trending filmer
  const randomMovies = shuffleArray(nonTrendingMovies).slice(0, 5);
  return (
    <div>
      <TitleLine text="Recommended for you" />
      <div>
        {randomMovies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            {/* Makes thumbnail and title pressable and passes the id in the url */}
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecomendedMovies;