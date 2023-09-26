import dataBase from '../data/movies.json'

const TrendingMovies = () => {

  // Picks out the movies that have trending = true in the database

    function getTrendningMovies(dataBase) {
        return dataBase.filter(movie => movie.isTrending === true)
    }

    const trendingMovies = getTrendningMovies(dataBase)

  // we return the list of the trending movies

    return (
        <div>
        <h2>Trending</h2>
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id}>
                <img  src={movie.thumbnail} alt={movie.name}/>
              <p>{movie.title}</p>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default TrendingMovies