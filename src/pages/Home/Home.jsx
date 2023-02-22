import PopularMovies from '../../modules/PopularMovies/PopularMovies';
import styles from './Home.module.css';

const HomePage = ()=> {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Trending today</h1>
            <PopularMovies />
        </div>
    )
}

export default HomePage;