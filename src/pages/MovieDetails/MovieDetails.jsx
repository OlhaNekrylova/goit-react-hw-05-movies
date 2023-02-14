import {useState, useEffect, useCallback} from "react";
import { Link, Outlet, useParams, useNavigate, useLocation } from "react-router-dom";

import { getMovieById } from "../../shared/services/movies-api";

const MovieDetails = () => {
    const [movie, setMovie] = useState();
    const {id} = useParams();

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from || "/"; 

    useEffect(()=> {
        const fetchPost = async() => {
            try {
                const result = await getMovieById(id);
                setMovie(result);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }
        fetchPost();
    }, [])

    const goBack = useCallback(()=> navigate(from), [navigate]);

    return (
        <>
            <button onClick={goBack}>Go back</button>
            <h1>{movie?.title}</h1>
            <p>{movie?.body}</p>
            <h2>Additional information</h2>
            <Link to="cast" state={{from}}>cast</Link>
            <Link to="reviews" state={{from}}>reviews</Link>
            <Outlet />
        </>
    )
}

export default MovieDetails;
