import { useState, useEffect } from 'react';
import movieData from '../data/movies.json'; 

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // filters the list of movies depending on letters / names

  useEffect(() => {
    if (searchText.trim() === '') {
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
      <input
        type="text"
        placeholder="Sök efter en filmtitel..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div>
        {searchResults.map((movie) => (
          <div key={movie.id}>
            <img src={movie.thumbnail} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;




























/*import React, { useState, useEffect } from 'react'
import dataBase from '../data/movies.json'


const SearchBox = () => {
    const [searchText, setSerchText] = useState('')
    const [searchResult, setSearchResult] = useState([])
    
    return (
        <div>
            <input 
            type="text"
            placeholder="Titel..."
            />

            <button>Sök</button>
        </div>
    )
}

export default SearchBox*/