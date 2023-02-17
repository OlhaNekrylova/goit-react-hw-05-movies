import { memo } from 'react';
import PropTypes from 'prop-types';

import useForm from '../../shared/hooks/useForm';

import styles from './MoviesSearchForm.module.css';

const MoviesSearchForm = ({initialState, onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
    const {search} = state;

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Search movies</label>
                <input value={search} onChange={handleChange} name="search" placeholder="Search" required />
            </div>
        </form>
    )
}

export default memo(MoviesSearchForm);

MoviesSearchForm.defaultProps = {
    initialState: {
        search: ""
    }
}

MoviesSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}