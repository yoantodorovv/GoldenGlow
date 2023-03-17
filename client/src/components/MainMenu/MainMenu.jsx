import { HeroContainer } from "./HeroContainer";
import styles from "./MainMenu.module.scss"

const womanImageSrc = "https://en.kepoper.com/wp-content/uploads/2021/09/jun-ji-hyun-drama-profile-facts-tmi.jpg"
const manImageSrc = "https://images.summitmedia-digital.com/esquiremagph/images/2022/09/22/boss-lee-min-ho-2-29720220621.jpg"

export const MainMenu = () => {
    return (
        <div className={styles['main-menu']}>
            <HeroContainer imageSrc={womanImageSrc} containerText="Women" />
            <HeroContainer imageSrc={manImageSrc} containerText="Men" />
        </div>
    );
}