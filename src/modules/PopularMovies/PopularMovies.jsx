import { useState, useEffect } from "react";
import { getAllPopularMovies } from "../../shared/services/posts-api";
import PopularMoviesList from "../../shared/components/PopularMoviesList/PopularMoviesList";
// import styles from '../PopularMovies/PopularMovies.module.css';

const PopularMovies = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const data = await getAllPopularMovies();
                setItems(prevItems => ([...prevItems, ...data]));
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovies();

    }, [setLoading, setItems, setError, setLoading, getAllPopularMovies]);

    return <PopularMoviesList items={items} />
}

export default PopularMovies;