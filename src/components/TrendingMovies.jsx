import dataBase from '../data/movies.json'
import TitleLine from './ui/TitleLine';
import Carousel from './Carousel';

const TrendingMovies = () => {
  // Picks out the movies that have trending = true in the database
    const trendingMovies = dataBase.filter((movie) => movie.isTrending === true);

  // we return the list of the trending movies
  return (
    <div>
      <TitleLine text="Trending" />
      <Carousel data={trendingMovies}/>
    </div>
  );
};

export default TrendingMovies;
