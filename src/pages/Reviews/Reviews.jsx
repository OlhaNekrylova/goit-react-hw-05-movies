import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsByMovieId } from '../../shared/services/movies-api';

import styles from './Reviews.module.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();

    useEffect(()=> {
        const fetchReviews = async() => {
            try {
                const data = await getReviewsByMovieId(movieId);
                setReviews(data);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }

        fetchReviews();
    }, [movieId, setReviews]);


    const elements = reviews.map(({id, name, text}) => <li className={styles.reviews} key={id}>
        <p>Name: {name}.</p>
        <p>{text}</p>
    </li>)

    return (
        <>
            {reviews && reviews.length > 0 ? (
                <ul>
                    {elements}
                </ul>
            ) : (
                <span>We don't have reviews for this movie.</span>
            )}
        </>
        
    )
}

export default Reviews;