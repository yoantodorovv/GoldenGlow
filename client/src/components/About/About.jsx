import { AboutTitle } from './AboutTitle/AboutTitle'
import { RightContent } from './MainAbout/RightContent/RightContent'
import { LeftContent } from './MainAbout/LeftContent/LeftContent'

import stylesAbout from './MainAbout/MainAbout.module.scss'
import stylesTitle from './AboutTitle/AboutTitle.module.scss'

import rightWelcome from '../../../public/images/About/rightWelcome.jpg'
import rightCommitment from '../../../public/images/About/rightCommitment.png'
import leftPassion from '../../../public/images/About/leftPassion.jpeg'
import leftMission from '../../../public/images/About/leftMission.jpeg'
import aboutText from '../../../public/text/About/aboutText.json'

export const About = () => {
    return (
        <>
            <section className={stylesTitle['about-wrapper']}>
                <AboutTitle title="About Us" subtitle="Welcome to GoldenGlow Boutique, where fashion meets affordability!" />
                <RightContent image={rightWelcome} content={aboutText.rightWelcome} />
                <LeftContent image={leftPassion} content={aboutText.leftPassion} />
                <RightContent image={rightCommitment} content={aboutText.rightCommitment} />
                <LeftContent image={leftMission} content={aboutText.leftMission} />
            </section>
            <div className={stylesAbout['review-wrapper']}>
                //TODO: review
            </div>
        </>
    );
}