import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { RevolvingDot } from 'react-loader-spinner';
import { getReviewsByMovieId } from '../../shared/services/movies-api';

import styles from './Reviews.module.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        const fetchReviews = async() => {
            setLoading(true);
            try {
                const { results } = await getReviewsByMovieId(id);
                setReviews([...results]);
            }
            catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [id]);


    const elements = reviews.map(({id, author, content}) => (
        <li className={styles.reviews} key={id}>
            <p className={styles.author}>
            Author: <b>{author}</b>
            </p>
            <p className={styles.content}>{content}</p>
        </li>));

    return (
        <>
            {loading && (
                <RevolvingDot />
            )}
            {error && <p>Something goes wrong. Please try again.</p>}
            {reviews && reviews.length > 0 ? (
                <ul className={styles.list}>
                    {elements}
                </ul>
            ) : (
                <span>We don't have reviews for this movie.</span>
            )}
        </>
        
    );
};

export default Reviews;