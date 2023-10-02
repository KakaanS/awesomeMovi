// SearchBox.jsx
import { useState, useEffect } from "react";
import movieData from "../data/movies.json";
import MovieCard from "./ui/MovieCard";
import SearchbarInput from "./ui/SearchbarInput";
import { Link } from "react-router-dom"; 


const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // filters the list of movies depending on letters / names

  useEffect(() => {
    if (searchText.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredMovies = movieData.filter((movie) =>
        movie.title.toLowerCase().startsWith(searchText.toLowerCase())
      );
      setSearchResults(filteredMovies);
    }
  }, [searchText]);

  //returns list of the movies

  return (
    <div>
      <SearchbarInput
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for a movie..."
        type="search"
      />

      <div>
        <div>
          {searchResults.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}> {/* Makes thumbnail and title pressable and passes the id in the url */}
              <MovieCard key={movie.id} movie={movie} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
