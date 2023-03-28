import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Card } from '../Card/Card';

export const Carousel = ({
    products,
    slidesToShow
}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Slider {...settings}>
            {products.map(x => <Card key={x.id} product={x} />)}
        </Slider>
    );
}