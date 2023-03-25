import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../../services/firebaseService'
import Swal from 'sweetalert2'

import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

import { FooterNavigationElement } from "./FooterNavigationElement/FooterNavigationElement";

import styles from "./FooterNavigation.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import * as text from '../../../../public/text/Footer/FooterText.json'
import * as socials from './assets/socialMediaUrls';

export const FooterNavigation = () => {
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

    const handleSocialsClick = (e, url) => {
        e.preventDefault();

        window.open(url, "_blank");
    }

    return (
        <div className={styles['footer-nav']}>
            <FooterNavigationElement title="Pages">
                <div className={styles['options-wrapper']}>
                    {Object.entries(text.pages)
                        .map(x => (
                            <NavLink
                                key={`${x[0]}-${x[1]}`}
                                to={x[1]}
                                className={({ isActive }) => isActive ? styles['footer-options-selected'] : styles['footer-options']}>
                                {x[0]}
                            </NavLink>
                        ))
                    }
                </div>
            </FooterNavigationElement>
            <FooterNavigationElement title="Your Profile">
                <div className={styles['options-wrapper']}>
                    {
                        authUser
                            ? (
                                Object.entries(text.profile.private).map(x => {
                                    if (x[1] === '/logout') {
                                        return <button
                                            key={`${x[0]}-${x[1]}`}
                                            onClick={userSignOut}
                                            className={styles['footer-options']}
                                        >
                                            {x[0]}
                                        </button>
                                    }

                                    return <NavLink
                                        key={`${x[0]}-${x[1]}`}
                                        to={x[1]}
                                        className={({ isActive }) => isActive ? styles['footer-options-selected'] : styles['footer-options']}>
                                        {x[0]}
                                    </NavLink>
                                })
                            )
                            : (
                                Object.entries(text.profile.public)
                                    .map(x => <NavLink
                                        key={`${x[0]}-${x[1]}`}
                                        to={x[1]}
                                        className={({ isActive }) => isActive ? styles['footer-options-selected'] : styles['footer-options']}>
                                        {x[0]}
                                    </NavLink>
                                    )
                            )
                    }
                </div>
            </FooterNavigationElement>
            <FooterNavigationElement title="Follow Us On">
                <div className={styles['icon-wrapper']}>
                    <a href={socials.linkedInUrl}  onClick={() => handleSocialsClick(socials.linkedInUrl)} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles['icon']} icon={faLinkedinIn} size="2x" />
                    </a>
                    <a href={socials.gitHubInUrl}  onClick={() => handleSocialsClick(socials.gitHubInUrl)} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles['icon']} icon={faGithub} size="2x" />
                    </a>
                    <a href={socials.instagramInUrl}  onClick={() => handleSocialsClick(socials.instagramInUrl)} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={styles['icon']} icon={faInstagram} size="2x" />
                    </a>
                </div>
            </FooterNavigationElement>
        </div>
    );
}