import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { RevolvingDot } from 'react-loader-spinner';
import { getCastByMovieId } from '../../shared/services/movies-api';
import defaultMovieImg from '../../images/placeholder.jpg';
import styles from './Cast.module.css';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        const fetchCast = async() => {
            setLoading(true);
            try {
                const response = await getCastByMovieId(id);
                setCast([...response.cast]);
            }
            catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCast();
    }, [id]);


    const elements = cast.map(({id, profile_path, name, character }) => {
    const avatar = `https://image.tmdb.org/t/p/original/${profile_path}`;
    return (
        <li className={styles.cast} key={id}>
        <img
            src={profile_path ? avatar : defaultMovieImg}
            alt={name}
            width="150"
            height="225"
        />
        <p className={styles.actor__name}>{name}</p>
        <p className={styles.actor__character}>
            as <b>{character}</b>
        </p>
    </li>
    );
});    

    return (
        <>
            {loading && (
                <RevolvingDot />
            )}
            {error && <p>Something goes wrong. Please try again.</p>}
            {cast && (
                <ul className={styles.cast__list}>
                    {elements}
                </ul>
            )}
        </>
    );
};

export default Cast;