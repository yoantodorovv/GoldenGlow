import { NavLink } from 'react-router-dom'

import styles from "./HeroContainer.module.scss";

export const HeroContainer = ({
    imageSrc,
    containerText,
    path
}) => {
    return (
        <div className={styles['container']}>
            <img className={styles['menu-img']} src={imageSrc} alt={`${containerText} image`} />
            <NavLink className={styles['overlay']} to={path}>
                <div className={styles['overlay-text']}>{containerText}</div>
            </NavLink>
        </div>
    );
}