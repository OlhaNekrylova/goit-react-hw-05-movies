import { useState, useEffect, useCallback } from 'react';
import {useSearchParams} from 'react-router-dom';
import { getSearchMovies } from '../../shared/services/movies-api';
import PopularMoviesList from '../../shared/components/PopularMoviesList/PopularMoviesList';
import MoviesSearchForm from '../MoviesSearchForm/MoviesSearchForm';
import styles from './MoviesSearch.module.css';

const MoviesSearch = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');
    const page = searchParams.get('page');
    
    useEffect(() => {
        if (!search) {
            return;
        }

        const fetchMovies = async () => {
            try {
                setLoading(true);
                const {results} = await getSearchMovies(search, page);
                setItems([...results]);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovies();

    }, [search, page, setLoading, setItems, setError])

    const onSearchMovies = useCallback(({ search }) => {
        setSearchParams({search, page: 1});
        setItems([]);
    }, [setSearchParams]);


    const loadMore = useCallback(() => {
        setSearchParams({search, page: Number(page) + 1});
    }, [search, page, setSearchParams]);

    return (
        <>
            <MoviesSearchForm initialState={{search}} onSubmit={onSearchMovies} />
            <PopularMoviesList items={items} />
            {error && <p className={styles.errorMessage}>{error}</p>}
            {loading && <p>...Load movies</p>}
            {Boolean(items.length) && 
                <button className={styles.loadMoreBtn} 
                    onClick={loadMore}>
                    Load more
                </button>
            }
        </>
    )
}

export default MoviesSearch;