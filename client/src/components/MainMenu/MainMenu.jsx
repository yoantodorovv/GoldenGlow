import { HeroContainer } from "./HeroContainer/HeroContainer";

import styles from "./MainMenu.module.scss"

import manImageSrc from "../../../public/images/Home/manImage.jpeg";
import womanImageSrc from "../../../public/images/Home/womanImage.jpeg";

export const MainMenu = () => {
    return (
        <div className={styles['main-menu']}>
            <HeroContainer imageSrc={womanImageSrc} containerText="Women" />
            <HeroContainer imageSrc={manImageSrc} containerText="Men" />
        </div>
    );
}