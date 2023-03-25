import { NavLink } from 'react-router-dom'

import { signOut } from 'firebase/auth'
import { auth } from '../../services/firebaseService'

import Swal from 'sweetalert2'
import styles from './ProfilePopUp.module.scss'


export const ProfilePopUp = () => {

    const userSignOut = async () => {
        try {
            await signOut(auth);

            Swal.fire({
                title: 'Sign Out successful!',
                icon: 'success',
                toast: true,
                position: 'top-end',
                timer: 1500,
                showConfirmButton: false,
            });
        } catch (error) {
            Swal.fire({
                title: 'Sign Out failed! Please try again later!',
                icon: 'error',
                toast: true,
                position: 'top-end',
                timer: 1500,
            });
        }
    }

    return (
        <div className={styles['wrapper']}>
            <div className={styles['title']}>
                <p>Welcome, <span>{auth.currentUser.email}</span></p>
            </div>
            <ul className={styles['list']}>
                <li className={styles['list-item']}>
                    <NavLink
                        className={({ isActive }) => isActive ? styles['list-item-selected'] : styles['list-item-link']}
                        to="/user"
                    >
                        View Profile
                    </NavLink>
                </li>
                <li className={styles['list-item']}>
                    <NavLink
                        className={({ isActive }) => isActive ? styles['list-item-selected'] : styles['list-item-link']}
                        to="/user/purchase-history"
                    >
                        Purchase History
                    </NavLink>
                </li>
                <li className={styles['list-item']}>
                    <NavLink
                        className={({ isActive }) => isActive ? styles['list-item-selected'] : styles['list-item-link']}
                        to="/user/settings"
                    >
                        Settings
                    </NavLink>
                </li>
                <li className={styles['list-item']}>
                    <button
                        type='button'
                        onClick={userSignOut}
                        className={styles['list-item-btn']}
                    >
                        Sign Out
                    </button>
                </li>
            </ul>
            <div className={styles['filler']}></div>
        </div>
    )
}