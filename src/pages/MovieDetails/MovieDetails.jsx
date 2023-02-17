import {useState, useEffect, useCallback} from 'react';
import { Link, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';

import { getMovieById } from '../../shared/services/movies-api';
import imageUrl from '../../shared/services/movies-api';

const MovieDetails = () => {
    const [movie, setMovie] = useState();
    const {movieId} = useParams();

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from || "/"; 

    useEffect(()=> {
        const fetchMovie = async() => {
            try {
                const result = await getMovieById(movieId);
                setMovie(result);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }
        fetchMovie();
    }, [movieId])

    const goBack = useCallback(()=> navigate(from), [from, navigate]);

    return (
        <>
            <button onClick={goBack}>Go back</button>
            {movie && (
                <>
                <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
                <h3>
                    {movie.title}({movie.release_date.split('-')[0]})
                </h3>
                <span>User Score: {movie.vote_average * 10}%</span>
                <h2>Overview</h2>
                <span>{movie.overview}</span>
                {<h3>Genres</h3>}
                {<span>{movie.genres.map(genre => genre.name).join(' ')}</span>}
                </>)}

                <hr />
                <span>Additional information</span>

                <ul>
                    <li>
                        <Link to="cast" state={{from}} onClick={makeVisibleCast}>cast</Link>
                    </li>
                    <li>
                        <Link to="reviews" state={{from}} onClick={makeVisibleReviews}>reviews</Link>
                    </li>
                </ul>
                <hr />
            <Outlet />
        </>
    )
}

export default MovieDetails;
