import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './MoviesSearchList.module.css';

const MoviesSearchList = ({ items }) => {

    const location = useLocation();

    const elements = items.map(({ id, title, body }) =>
        <Link className={styles.link} key={id} to={`/posts/${id}`} state={{from: location}}><li className={styles.item}>
            <h4>{title}</h4>
            <p>{body}</p>
        </li></Link>);

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