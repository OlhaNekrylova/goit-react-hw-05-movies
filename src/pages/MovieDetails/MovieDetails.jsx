import {useState, useEffect, useCallback} from 'react';
import { NavLink, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { RevolvingDot } from 'react-loader-spinner';
import { getMovieById } from '../../shared/services/movies-api';
import defaultMovieImg from '../../images/placeholder.jpg';
import styles from '../MovieDetails/MovieDetails.module.css';

const getClassName = ({ isActive }) => {
    const className = isActive ? `${styles.cast} ${styles.active}` : styles.cast;
    return className;
};

const MovieDetails = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/movies'; 

    useEffect(()=> {
        const fetchMovie = async() => {
            try {
                setLoading(true);
                const response = await getMovieById(id);
                setItem({ ...response });
            }
            catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchMovie();
    }, [id])

    const goBack = useCallback(()=> navigate(from), [from, navigate]);

    const {
        poster_path,
        original_title,
        release_date,
        vote_average,
        overview,
        genres,
        homepage,
    } = item;
    
    let genresList = '';
    let date = '';
    
    if (Object.keys(item).length) {
        genresList = genres.map(({ name }, idx) => {
        if (idx === genres.length - 1) {
            return `${name}.`;
        }
        return `${name}, `;
        });
    
        date = release_date.slice(0, 4);
    }
    
    return (
        <div className="container">
            {loading && (
                <RevolvingDot />
            )}
            {error && <p>Something goes wrong. Please try again.</p>}
            <button type="button" onClick={goBack} className="btn">
                Go back
            </button>
            <div className={styles.movie__wrap}>
            <img
                src={
                poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : defaultMovieImg
                }
                alt=""
                width="250"
            />
                <div className={styles.info__wrap}>
                    <h2 className={styles.movie__title}>
                    <a href={homepage} target="_black">
                        {original_title} ({date})
                    </a>
                </h2>
                <p className={styles.movie__score}>User score: {vote_average}</p>
                <h3 className={styles.movie__overviewTitle}>Overview</h3>
                <p className={styles.movie__overviewText}>{overview}</p>
                <h3 className={styles.movie__genresTitle}>Genres</h3>
                <p className={styles.movie__genresList}>{genresList}</p>
                </div>
            </div>
            <ul className={styles.extraPages__list}>
                <li className={styles.extraPages__item}>
                    <NavLink
                        state={{ from }}
                        to={`/movies/${id}/credits`}
                        className={getClassName}
                    >
                    Cast
                    </NavLink>
                </li>
                <li className={styles.extraPages__item}>
                    <NavLink
                        state={{ from }}
                        to={`/movies/${id}/reviews`}
                        className={getClassName}
                    >
                    Reviews
                    </NavLink>
                </li>
            </ul>
    
            <Outlet />
        </div>
    );
};

export default MovieDetails;
