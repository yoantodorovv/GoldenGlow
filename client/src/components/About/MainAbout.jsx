import { AboutTitle } from "./AboutTitle";
import { LeftContent } from "./LeftContent";
import { RightContent } from "./RightContent";

import styles from "./styles/MainAbout.module.scss"

const content = {
    'right': {
        'imageUrl': 'https://www.safe-urban.com/wp-content/uploads/2021/12/safe-urban-concept-paris-conceptstore-credit-rawcollectif-00036.jpg',
        'content': 'Welcome to Golden Glow Boutique, where fashion meets affordability, individuality, and sustainability. We believe that fashion is more than just clothing - it\'s a way of expressing who you are and how you feel. We are dedicated to helping you find the perfect outfit that makes you look and feel your best, no matter what the occasion.',
    },
    'left': {
        'imageUrl': 'https://www.befreetour.com/img/produk/ikseon-boutique-korean-retro-clothing-rental-experience/ikseon-boutique-korean-retro-clothing-rental-experience_bf4a440c79b14aa44b517c93fa1bfc57e15e29b2.jpg',
        'content': 'At our store, we are more than just a clothing store. We are a community of fashion lovers, who believe in expressing our individuality, while also making a positive impact in the world. We host events and workshops that focus on fashion, beauty, and wellness, as well as community-building activities, such as clothing swaps and charity events.',
    },
}

export const MainAbout = () => {
    return (
        <section className={styles['about-wrapper']}>
            <AboutTitle title="About Us" subtitle="Welcome to GoldenGlow Boutique, where fashion meets affordability!" />
            <RightContent imageUrl={content.right.imageUrl} content={content.right.content} />
            <LeftContent imageUrl={content.left.imageUrl} content={content.left.content} />
        </section>
    );
}