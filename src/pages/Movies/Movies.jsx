import MovieSearch from '../../modules/MoviesSearch/MoviesSearch';
import styles from './Movies.module.css'

const MovieSearchPage = ()=> {
    return (
        <div className={styles.container}>
            <MovieSearch />
        </div>
    ) 
}

export default MovieSearchPage;
