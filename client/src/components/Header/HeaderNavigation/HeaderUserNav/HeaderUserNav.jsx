import { NavLink } from 'react-router-dom';

import styles from './HeaderUserNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

const icon = {
    wishlist: faHeart,
    shoppingCart: faCartShopping
}

export const HeaderUserNav = ({
    toPath,
    type,
    count
}) => {
    return (
        <NavLink
            to={toPath}
            className={({ isActive }) => isActive ? styles['nav-icon-list-item-parent-selected'] : styles['nav-icon-list-item-parent']}
        >
            <FontAwesomeIcon className={styles['nav-icon-list-item']} icon={icon[type]} size="xl" />
            <h3>{count ? count : 0}</h3>
        </NavLink>
    );
}