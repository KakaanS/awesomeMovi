import dataBase from '../data/movies.json'

const RecomendedMovies = () => {

    function getRecommendedMovies(database, count) {
        const shuffled = database.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      }


const randomMovies = getRecommendedMovies(dataBase, 4)

    return(
    <div>
        <h2>Recommended for you</h2>
        <ul>
            {randomMovies.map(movie =>
                <li key={movie.id}>
                    <img  src={movie.thumbnail} alt={movie.name}/>
                    <p>{movie.title}</p>
                </li>)}
        </ul>
    </div>   
    )

}

export default RecomendedMovies