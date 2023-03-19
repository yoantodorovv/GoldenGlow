import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../../services/firebaseService'

import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

import { FooterNavigationElement } from "./FooterNavigationElement/FooterNavigationElement";

import styles from "./FooterNavigation.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import * as text from '../../../../public/text/Footer/FooterText.json'

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
        await signOut(auth);

        //TODO: Add PopUp

        navigate('/');
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
                                .map(x =>   <NavLink
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
                    <FontAwesomeIcon className={styles['icon']} icon={faInstagram} size="2x" />
                    <FontAwesomeIcon className={styles['icon']} icon={faTwitter} size="2x" />
                    <FontAwesomeIcon className={styles['icon']} icon={faFacebook} size="2x" />
                </div>
            </FooterNavigationElement>
        </div>
    );
}