import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss'

import { Card } from '../Card/Card';

export const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    //TODO: Render actual collection
    return (
        <Slider {...settings}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Slider>
    );
}