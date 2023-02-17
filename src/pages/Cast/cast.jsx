import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { getCastByMovieId } from '../../shared/services/movies-api';
import imageUrl from '../../shared/services/movies-api';
import styles from './Cast.module.css';

const Cast = () => {
    const [cast, setCast] = useState(null);
    const {movieId} = useParams();

    useEffect(()=> {
        const fetchCast = async() => {
            try {
                const data = await getCastByMovieId(movieId);
                setCast(data);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }

        fetchCast();
    }, [movieId, setCast]);


    const elements = cast.map(({id, profile_path, name, character }) => 
    <li className={styles.cast} key={id}>
        <img src={`${imageUrl}${profile_path}`} alt="" />
                <h3>{name}</h3>
                <span>Charachter: {character}</span>
    </li>)

    return (
        <>
            {cast && (
                <ul>
                    {elements}
                </ul>
            )}
        </>
    );
}

export default Cast;