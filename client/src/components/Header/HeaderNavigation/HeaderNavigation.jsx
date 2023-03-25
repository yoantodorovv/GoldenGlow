import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"

import { onAuthStateChanged } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { auth, db } from '../../../services/firebaseService'

import styles from "./HeaderNavigation.module.scss";
import { HeaderProfile } from './HeaderProfile/HeaderProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

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
    
    const userRef = collection('users').doc(auth.currentUser.uid);



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
                        : (
                            <>
                                <li>
                                    <NavLink
                                        to="/user/wishlist"
                                        className={({ isActive }) => isActive ? styles['nav-icon-list-item-parent-selected'] : styles['nav-icon-list-item-parent']}
                                    >
                                        <FontAwesomeIcon className={styles['nav-icon-list-item']} icon={faHeart} size="xl" />
                                        <h3>1</h3>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to='/user/shopping-cart'
                                        className={({ isActive }) => isActive ? styles['nav-icon-list-item-parent-selected'] : styles['nav-icon-list-item-parent']}>
                                        <FontAwesomeIcon className={styles['nav-icon-list-item']} icon={faCartShopping} size="xl" />
                                        <h3>1</h3>
                                    </NavLink>
                                </li>
                                <li>
                                    <HeaderProfile />
                                </li>
                            </>
                        )
                }
            </ul>
        </nav>
    );
}