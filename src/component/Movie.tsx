import { useEffect, useState } from "react";
import { MovieType } from "interface/movie"
// import { Link } from "react-router-dom";

function Movie() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState<MovieType[]>([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img src={movie.medium_cover_image} alt={movie.title} />
                            <h2><a href={`${movie.id}`}>{movie.title}</a></h2>
                            {/* <h2><Link to={`${movie.id}`}>{movie.title}</Link></h2> */}
                            <p>{movie.summary}</p>
                            <ul>
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