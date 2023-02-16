import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { getCastByMovieId } from '../../shared/services/movies-api';

import styles from './Cast.module.css';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        const fetchCast = async() => {
            try {
                const data = await getCastByMovieId(id);
                setCast(data);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }

        fetchCast();
    }, [id, setCast]);


    const elements = cast.map(({id, name, text}) => <li className={styles.cast} key={id}>
        <p>Name: {name}.</p>
        <p>{text}</p>
    </li>)

    return (
        <ol>
            {elements}
        </ol>
    )
}

export default Cast;