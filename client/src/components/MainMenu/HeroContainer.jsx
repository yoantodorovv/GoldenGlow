import { NavLink } from 'react-router-dom'

import styles from "./MainMenu.module.scss";

export const HeroContainer = ({
    imageSrc,
    containerText,
}) => {
    return (
        <div className={styles['container']}>
            <img className={styles['menu-img']} src={imageSrc} alt={`${containerText} image`} />
            <NavLink className={styles['overlay']} to={`/catalog/${containerText.toLowerCase()}`}>
                <div className={styles['overlay-text']}>{containerText}</div>
            </NavLink>
        </div>
    );
}