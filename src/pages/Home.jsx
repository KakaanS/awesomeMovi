import { useState } from "react";
import RecomendedMovies from "../component/RecomendedMovies";
import TrendingMovies from "../component/TrendingMovies";
import SearchBox from "../component/SearchBox";
import MovieCard from "../component/ui/MovieCard";
import Navbar from "../component/ui/Navbar";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Navbar />
      <SearchBox
        setSearchResults={setSearchResults}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      {/* Display message when there are no search results */}
      {searchResults.length === 0 && searchText ? (
        <p>Your search for &quot;{searchText}&quot; did not have any matches</p>
      ) : null}

      {/* Display search results or default content */}
      {searchResults.length > 0 || searchText ? (
        <div>
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
