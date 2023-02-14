import { useState, useEffect } from "react";

import PopularMoviesList from "../../shared/components/PopularMoviesList/PopularMoviesList";

import { getAllPopularMovies } from "../../shared/services/posts-api";

const PopularMovies = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
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
        fetchPosts();

    }, [setLoading, setItems, setError, setLoading, getAllPopularMovies]);

    return <PopularMoviesList items={items} />
}

export default PopularMovies;