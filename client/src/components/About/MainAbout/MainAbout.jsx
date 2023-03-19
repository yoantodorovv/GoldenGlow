import { AboutTitle } from "../AboutTitle/AboutTitle";
import { LeftContent } from "./LeftContent/LeftContent";
import { RightContent } from "./RightContent/RightContent";

import styles from "./MainAbout.module.scss"
import aboutRightImageUrl from '../../../../public/images/Home/aboutRight.jpeg'
import aboutLeftImageUrl from '../../../../public/images/Home/aboutLeft.jpeg'
import mainAboutText from '../../../../public/text/Home/mainAboutText.json'

export const MainAbout = () => {
    return (
        <section className={styles['about-wrapper']}>
            <AboutTitle title="About Us" subtitle={mainAboutText.subtitle} />
            <RightContent image={aboutRightImageUrl} content={mainAboutText.rightContent} />
            <LeftContent image={aboutLeftImageUrl} content={mainAboutText.leftContent} />
        </section>
    );
}