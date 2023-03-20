import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"

import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../../services/firebaseService'
import Swal from 'sweetalert2'

import styles from "./HeaderNavigation.module.scss";

export const HeaderNavigation = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

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

    const userSignOut = async () => {
        try {
            await signOut(auth);

            Swal.fire({
                title: 'Sign Out successful!',
                icon: 'success',
                toast: true,
                position: 'top-end',
                timer: 2000,
                allowEnterKey: true,
                showConfirmButton: false,
            });

            navigate('/');
        } catch (error) {
            Swal.fire({
                title: 'Sign Out failed! Please try again later!',
                icon: 'error',
                toast: true,
                position: 'top-end',
                timer: 2000,
                allowEnterKey: true,
                showConfirmButton: false,
            });
        }
    }

    //TODO: Extract sign out into profile drop down (image on top)
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
                            <li className={styles['nav-btn-list-item']}>
                                <button
                                    onClick={userSignOut}
                                    className={styles['nav-btn-li-link']}>
                                    Sign Out
                                </button>
                            </li>
                        )
                }
            </ul>
        </nav>
    );
}