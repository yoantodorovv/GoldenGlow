import { NavLink } from "react-router-dom"

import styles from "./HeaderNavigation.module.scss";

export const HeaderNavigation = () => {
    return (
        <nav className={styles['nav']}>
            <ul className={styles['nav-btn-list']}>
                <li className={styles['nav-btn-list-item']}>
                    <NavLink 
                        className={({isActive}) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']} 
                        to="/">
                            Home
                    </NavLink>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <NavLink 
                        className={({isActive}) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']} 
                        to="/about">
                            About
                    </NavLink>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <NavLink 
                        className={({isActive}) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']} 
                        to="/catalog">
                            Catalog
                    </NavLink>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <NavLink 
                        className={({isActive}) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']} 
                        to="/contact">
                            Contact
                    </NavLink>
                </li>
                <li>
                    <div className={styles['v-line']}></div>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <NavLink 
                        className={({isActive}) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']} 
                        to="/login">
                            Sign In
                    </NavLink>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <NavLink 
                        className={({isActive}) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']} 
                        to="/register">
                            Sign Up
                    </NavLink>
                </li>
                {/* <li className={styles['nav-btn-list-item']}>
                    <NavLink 
                        className={({isActive}) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']} 
                        to="/logout">
                            Sign Out
                </NavLink>
                </li> */}
            </ul>
        </nav>
    );
}