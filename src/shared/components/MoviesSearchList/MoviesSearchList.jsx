import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import defaultMovieImg from '../../../images/placeholder.jpg';
import styles from './MoviesSearchList.module.css';

const MoviesSearchList = ({ items }) => {

    const location = useLocation();

    const elements = items.map(({ movieId, title, poster_path }, idx) =>
    <li className={styles.item} key={idx}>
    <Link className={styles.movieLink} 
        state={{from: location}}
        to={`/movies/${movieId}`}>
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
                </Link>
        </li> );

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default memo(MoviesSearchList);

MoviesSearchList.defaultProps = {
    items: []
}