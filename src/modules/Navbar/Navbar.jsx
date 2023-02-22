import { NavLink } from 'react-router-dom';
import items from '../Navbar/items';
import styles from '../Navbar/Navbar.module.css';

// const getFullName = ({isActive}) => {
//     return isActive ? `${styles.link} ${styles.active}` : styles.link;
// }

const Navbar = ()=> {
    const elements = items.map(({id, text, link}) => 
        <li key={id}>
        <NavLink className={styles.link} to={link}>
            {text}
        </NavLink>
    </li>);

    return (
        <div className={styles.container}>
            <ul className={styles.menu}>
                {elements}
            </ul>
        </div>
    )
}

export default Navbar;