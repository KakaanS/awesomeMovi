import { useEffect } from "react";
import movieData from "../data/movies.json";
import SearchbarInput from "./ui/SearchbarInput";


const SearchBox = ({setSearchResults, searchText, setSearchText}) => {

  // filters the list of movies depending on letters / names

  useEffect(() => {
    if (searchText?.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredMovies = movieData.filter((movie) =>
        movie.title.toLowerCase().startsWith(searchText?.toLowerCase()) || movie.title.toLowerCase().includes(searchText?.toLowerCase())
      );
      setSearchResults(filteredMovies);
    }
  }, [searchText, setSearchResults]);

  //returns list of the movies

  return (
    <div>
      <SearchbarInput
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for a movie..."
        type="search"
      />

    </div>
  );
};

export default SearchBox;
