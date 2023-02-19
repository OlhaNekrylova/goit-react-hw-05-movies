import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import defaultMovieImg from '../../../images/placeholder.jpg';
import styles from './PopularMoviesList.module.css';

const PopularMoviesList = ({ items }) => {

    const location = useLocation();

    const elements = items.map(({ movieId, title, poster_path }) =>
        <Link className={styles.link} 
            key={movieId} to={`/movies/${movieId}`} 
            state={{from: location}}>
            <li className={styles.item}>
                <img
                    src={
                    poster_path
                    ? `https://image.tmdb.org/t/p/original/${poster_path}`
                    : defaultMovieImg
                    }
                    alt={title}
                    className={styles.movieImg}
                    />
                <p className={styles.movieTitle}>{title}</p>
            </li>
        </Link>);

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default memo(PopularMoviesList);

PopularMoviesList.defaultProps = {
    items: []
}