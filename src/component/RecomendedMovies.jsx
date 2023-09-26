import dataBase from '../data/movies.json';
import MoviesHomeRecomended from "../component/ui/MoviesHomeRecomended";
import Title from "../component/ui/Title"; 

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
      <Title text="Recommended for you" /> 
      <div>
        {randomMovies.map(movie => (
          <MoviesHomeRecomended key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default RecomendedMovies;