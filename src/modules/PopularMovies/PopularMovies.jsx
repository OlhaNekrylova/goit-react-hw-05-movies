import { useState, useEffect } from 'react';
import { RevolvingDot } from 'react-loader-spinner';
import { getPopularMovies } from '../../shared/services/movies-api';
import PopularMoviesList from '../../shared/components/PopularMoviesList/PopularMoviesList';
// import styles from '../PopularMovies/PopularMovies.module.css';

const PopularMovies = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const {results} = await getPopularMovies();
                setItems(prevItems => ([...prevItems, ...results]));
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovies();

    }, []);

    return (
        <>
            {loading && (
                <RevolvingDot />
            )}
            {error && <p>Something goes wrong. Please try again.</p>}
            <PopularMoviesList items={items} />
        </>
    )
}

export default PopularMovies;