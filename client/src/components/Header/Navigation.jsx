import { NavLink } from "react-router-dom"

import styles from "./Header.module.scss";

export const Navigation = () => {
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
                            Login
                    </NavLink>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <NavLink 
                        className={({isActive}) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']} 
                        to="/register">
                            Register
                    </NavLink>
                </li>
                {/* <li className={styles['nav-btn-list-item']}>
                    <NavLink 
                        className={({isActive}) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']} 
                        to="/logout">
                            Logout
                </NavLink>
                </li> */}
            </ul>
        </nav>
    );
}