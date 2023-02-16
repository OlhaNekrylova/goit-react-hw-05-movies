import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './PopularMoviesList.module.css';

const PopularMoviesList = ({ items }) => {

    const location = useLocation();

    const elements = items.map(({ id, body, title }) =>
        <Link className={styles.link} 
            key={id} to={`/posts/${id}`} 
            state={{from: location}}>
            <li className={styles.item}>
                <h1>{title}</h1>
                <p>{body}</p>
            </li></Link>);

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