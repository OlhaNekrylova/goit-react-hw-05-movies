import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsByMovieId } from '../../shared/services/movies-api';

import styles from './Reviews.module.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        const fetchReviews = async() => {
            try {
                const data = await getReviewsByMovieId(id);
                setReviews(data);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }

        fetchReviews();
    }, [id, setReviews]);


    const elements = reviews.map(({id, name, text}) => <li className={styles.reviews} key={id}>
        <p>Name: {name}.</p>
        <p>{text}</p>
    </li>)

    return (
        <ol>
            {elements}
        </ol>
    )
}

export default Reviews;