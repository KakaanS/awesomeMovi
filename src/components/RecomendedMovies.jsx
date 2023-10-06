import dataBase from "../data/movies.json";
import TitleLine from "./ui/TitleLine";
import Carousel from "./Carousel";

const RecomendedMovies = () => {
  // Plocka ut filmer som inte har trending=true
  const nonTrendingMovies = dataBase.filter((movie) => !movie.isTrending);

  // Blanda de icke-trending filmerna slumpmässigt
  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Välj fem slumpmässiga icke-trending filmer
  const randomMovies = shuffleArray(nonTrendingMovies).slice(0, 8);

  return (
    <div>
      <TitleLine text="Recommended for you" />
      <Carousel data={randomMovies} />
    </div>
  );
};

export default RecomendedMovies;
