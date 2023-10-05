import dataBase from '../data/movies.json';
import TitleLine from './ui/TitleLine';
import MovieCard from './ui/MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const RecomendedMovies = () => {
  // Plocka ut filmer som inte har trending=true
  const nonTrendingMovies = dataBase.filter((movie) => movie.isTrending !== true);

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
  const randomMovies = shuffleArray(nonTrendingMovies).slice(0, 7);

  // Organize randomMovies into groups of five
  const groupedMovies = [];
  for (let i = 0; i < randomMovies.length; i += 5) {
    groupedMovies.push(randomMovies.slice(i, i + 5));
  }

  // Configure the carousel to show groups of five movies at a time
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <TitleLine text="Recommended for you" />
      <Carousel responsive={responsive}>
        {groupedMovies.map((group, index) => (
          <div key={index}>
            <div className="group-of-movies">
              {group.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecomendedMovies;
