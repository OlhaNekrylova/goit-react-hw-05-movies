import { memo } from "react";
import PropTypes from "prop-types";

import useForm from "../../../shared/hooks/useForm";

import styles from "./posts-search-form.module.scss";

const PostsSearchForm = ({initialState, onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const {search} = state;

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Search posts</label>
                <input value={search} onChange={handleChange} name="search" placeholder="Search posts" required />
            </div>
        </form>
    )
}

export default memo(PostsSearchForm);

PostsSearchForm.defaultProps = {
    initialState: {
        search: ""
    }
}

PostsSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}