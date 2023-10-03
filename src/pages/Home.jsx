import { useState } from "react";
import RecomendedMovies from "../component/RecomendedMovies";
import TrendingMovies from "../component/TrendingMovies";
import SearchBox from "../component/SearchBox";
import MovieCard from "../component/ui/MovieCard";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");


  return (
    <div>
      <SearchBox setSearchResults={setSearchResults} searchText={searchText} setSearchText={setSearchText} />
      {searchResults.length > 0 || searchText ? (
        <div>
         <p>Your searchword: {searchText}</p>
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <RecomendedMovies />
          <TrendingMovies />
        </div>
      )}
    </div>
  );
};

export default Home;
