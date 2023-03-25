import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"

import { onAuthStateChanged } from 'firebase/auth'
import { auth, } from '../../../services/firebaseService'

import styles from "./HeaderNavigation.module.scss";
import { Private } from './Private/Private'

export const HeaderNavigation = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            user
                ? setAuthUser(user)
                : setAuthUser(null)
        })

        return () => {
            listen();
        }
    }, []);

    return (
        <nav className={styles['nav']}>
            <ul className={styles['nav-btn-list']}>
                <li className={styles['nav-btn-list-item']}>
                    <NavLink
                        className={({ isActive }) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']}
                        to="/">
                        Home
                    </NavLink>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <NavLink
                        className={({ isActive }) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']}
                        to="/about">
                        About
                    </NavLink>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <NavLink
                        className={({ isActive }) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']}
                        to="/catalog">
                        Catalog
                    </NavLink>
                </li>
                <li className={styles['nav-btn-list-item']}>
                    <NavLink
                        className={({ isActive }) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']}
                        to="/contact">
                        Contact
                    </NavLink>
                </li>
                <li>
                    <div className={styles['v-line']}></div>
                </li>
                {
                    !authUser
                        ? (
                            <>
                                <li className={styles['nav-btn-list-item']}>
                                    <NavLink
                                        className={({ isActive }) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']}
                                        to="/login">
                                        Sign In
                                    </NavLink>
                                </li>
                                <li className={styles['nav-btn-list-item']}>
                                    <NavLink
                                        className={({ isActive }) => isActive ? styles['nav-btn-li-link-selected'] : styles['nav-btn-li-link']}
                                        to="/register">
                                        Sign Up
                                    </NavLink>
                                </li>
                            </>
                        )
                        : <Private />
                }
            </ul>
        </nav>
    );
}