import { useState } from "react";
import RecomendedMovies from "../components/RecomendedMovies";
import TrendingMovies from "../components/TrendingMovies";
import SearchBox from "../components/SearchBox";
import MovieCard from "../components/ui/MovieCard";
import Navbar from "../components/ui/Navbar";

const HomePage = () => {
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

export default HomePage;
