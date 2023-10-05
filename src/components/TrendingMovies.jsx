import dataBase from '../data/movies.json';
import TitleLine from './ui/TitleLine';
import MovieCard from './ui/MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TrendingMovies = () => {
  // Picks out the movies that have trending = true in the database
  function getTrendningMovies(dataBase) {
    return dataBase.filter((movie) => movie.isTrending === true);
  }

  const trendingMovies = getTrendningMovies(dataBase);

  // Organize trendingMovies into groups of five
  const groupedMovies = [];
  for (let i = 0; i < trendingMovies.length; i += 5) {
    groupedMovies.push(trendingMovies.slice(i, i + 5));
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
      <TitleLine text="Trending" />
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

export default TrendingMovies;


