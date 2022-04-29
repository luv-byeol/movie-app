import { useEffect, useState } from "react";
import { MovieType } from "interface/movie";
// import { Link } from "react-router-dom";

function Movie() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState<MovieType[]>([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, [])
    console.log(movies)

    return (
        <div className="container">
            {loading ? <div className="loader">
          <span>Loading...</span>
        </div> :
                <div className="movies"> 
                    {movies.map((movie) => (
                        <div className="movie" key={movie.id}>
                            <img className="movie__img" src={movie.medium_cover_image} alt={movie.title} />
                            <h2 className="movie__title"><a href={`${movie.id}`}>{movie.title}</a></h2>
                            {/* <h2><Link to={`${movie.id}`}>{movie.title}</Link></h2> */}
                            <h3 className="movie__year">{movie.year}</h3>
                            <ul className="movie__genres">
                                {movie.genres.map((g) => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Movie;