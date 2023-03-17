import { HeroContainer } from "./HeroContainer/HeroContainer";

import styles from "./MainMenu.module.scss"

import manImageSrc from "./assets/manImage.jpeg";
import womanImageSrc from "./assets/womanImage.jpeg";

export const MainMenu = () => {
    return (
        <div className={styles['main-menu']}>
            <HeroContainer imageSrc={womanImageSrc} containerText="Women" />
            <HeroContainer imageSrc={manImageSrc} containerText="Men" />
        </div>
    );
}