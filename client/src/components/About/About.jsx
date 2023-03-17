import { AboutTitle } from './AboutTitle'
import { RightContent } from './RightContent'
import { LeftContent } from './LeftContent'

import stylesAbout from './styles/MainAbout.module.scss'
import stylesTitle from './styles/AboutTitle.module.scss'

//TODO: Extract content to DB everywhere!
const content = {
    right: {
        welcome: {
            imageUrl: 'https://www.safe-urban.com/wp-content/uploads/2021/12/safe-urban-concept-paris-conceptstore-credit-rawcollectif-00036.jpg',
            content: 'Welcome to GoldenGlow Boutique, where fashion meets affordability, individuality, and sustainability. We believe that fashion is more than just clothing - it\'s a way of expressing who you are and how you feel. We are dedicated to helping you find the perfect outfit that makes you look and feel your best, no matter what the occasion.',
        },
        commitment: {
            imageUrl: 'https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
            content: 'We are committed to sustainability and ethical practices. We work with suppliers who share our values and strive to minimize our impact on the environment. From reducing waste to sourcing eco-friendly materials, we are constantly looking for ways to improve our sustainability efforts. We believe that we can make a difference by taking small steps towards a more sustainable future.'
        },
    },
    left: {
        passion: {
            imageUrl: 'https://www.befreetour.com/img/produk/ikseon-boutique-korean-retro-clothing-rental-experience/ikseon-boutique-korean-retro-clothing-rental-experience_bf4a440c79b14aa44b517c93fa1bfc57e15e29b2.jpg',
            content: 'At GoldenGlow Boutique, we are passionate about what we do and are committed to delivering the best shopping experience possible for our customers. We believe in offering a personalized approach to shopping, where our staff is knowledgeable, friendly, and ready to assist you in finding the perfect outfit. We want every customer to feel valued and special and go above and beyond to ensure that you leave our store feeling satisfied with your purchase.',
        },
        mission: {
            imageUrl: 'https://adventurekorea.com/wp-content/uploads/2021/12/image3-2.jpg',
            content: 'Our mission is to provide our customers with high-quality clothing at an affordable price. We strive to offer a wide range of styles that reflect the latest trends and classic designs, without sacrificing comfort, quality or style. We understand that clothes are more than just material on your body - they should be a reflection of your personality and individuality. That\'s why we offer unique and stylish pieces that are sure to make a statement.',
        }
    },
}

export const About = () => {
    return (
        <>
            <section className={stylesTitle['about-wrapper']}>
                <AboutTitle title="About Us" subtitle="Welcome to GoldenGlow Boutique, where fashion meets affordability!" />
                <RightContent imageUrl={content.right.welcome.imageUrl} content={content.right.welcome.content} />
                <LeftContent imageUrl={content.left.passion.imageUrl} content={content.left.passion.content} />
                <RightContent imageUrl={content.right.commitment.imageUrl} content={content.right.commitment.content} />
                <LeftContent imageUrl={content.left.mission.imageUrl} content={content.left.mission.content} />
            </section>
            <div className={stylesAbout['review-wrapper']}>
                //TODO: review
            </div>
        </>
    );
}