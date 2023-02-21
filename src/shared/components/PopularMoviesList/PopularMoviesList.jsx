import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultMovieImg from '../../../images/placeholder.jpg';
import styles from './PopularMoviesList.module.css';

const PopularMoviesList = ({ items }) => {

    const location = useLocation();

    const elements = items.map(({ id, title, poster_path }) =>
        <li className={styles.item} key={id}>
            <Link className={styles.movieLink} 
                state={{from: location}}
                to={`/movies/${id}`}>
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

export default memo(PopularMoviesList);

PopularMoviesList.propTypes = {
    items: PropTypes.array,
};