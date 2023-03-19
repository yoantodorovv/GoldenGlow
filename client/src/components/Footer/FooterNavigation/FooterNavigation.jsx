import { NavLink } from 'react-router-dom'

import { FooterNavigationElement } from "./FooterNavigationElement/FooterNavigationElement";

import styles from "./FooterNavigation.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const routes = {
    'pages': {
        'Home': '/',
        'About': '/about',
        'Contact': '/contact',
        'Catalog': '/catalog',
        'Women': '/catalog/women',
        'Men': '/catalog/men',
    },
    'profiles': {
        'Sign In': '/login',
        'Sign Up': '/register',
        'Sign Out': '/logout',
    }
}

export const FooterNavigation = () => {
    return (
        <div className={styles['footer-nav']}>
            {/* <FooterNavigationElement title="Pages" options={pagesRoutes}/> */}
            <FooterNavigationElement title="Pages">
                <div className={styles['options-wrapper']}>
                    {Object.entries(routes.pages)
                        .map(x => 
                            <NavLink 
                                key={`${x[0]}-${x[1]}`} 
                                to={x[1]} 
                                className={({ isActive }) => isActive ? styles['footer-options-selected'] : styles['footer-options']}>
                                    {x[0]}
                            </NavLink>)}
                </div>
            </FooterNavigationElement>
            <FooterNavigationElement title="Your Profile">
                <div className={styles['options-wrapper']}>
                    {Object.entries(routes.profiles)
                        .map(x => 
                            <NavLink
                                key={`${x[0]}-${x[1]}`} 
                                to={x[1]} 
                                className={({ isActive }) => isActive ? styles['footer-options-selected'] : styles['footer-options']}>
                                    {x[0]}
                            </NavLink>)}
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