import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick';

import { db } from '../../services/firebaseService';
import { doc, getDoc } from 'firebase/firestore';

import Swal from 'sweetalert2';
import styles from './Product.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping, faHeart, faRecycle, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ColorCarousel } from './ColorCarousel/ColorCarousel';

export const Product = () => {
    const [product, setProduct] = useState({
        name: '',
        brand: '',
        category: '',
        gender: '',
        price: 0,
        collection: '',
        description: '',
        color: [],
        size: [],
        images: ['', ''],
        material: {},
    });
    const [currentColor, setCurrentColor] = useState('Select Color');
    const { productId } = useParams();
    const productRef = doc(db, 'products', productId);

    useEffect(() => {
        getDoc(productRef)
            .then(data => setProduct(data.data()))
            .catch(err => console.log(err));
    }, []);

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        autoplay: true,
    };

    const onAddToCartClick = () => {

    }

    const onAddToWishlistClick = () => {

    }

    return (
        <div className={styles['wrapper']}>
            <section className={styles['path-wrapper']}>
                <Link to="/catalog" className={styles['link']}>
                    <FontAwesomeIcon className={styles['path-icon']} icon={faHouse} size="lg" />
                </Link>
                <Link to={`/catalog/collections/${product?.collection}`} className={styles['link']}>
                    <h1 className={styles['path-text']}>{` / ${product?.collection}`}</h1>
                </Link>
                <Link to={`/catalog/categories/${product?.category}`} className={styles['link']}>
                    <h1 className={styles['path-text']}>{` / ${product?.category.charAt(0).toUpperCase() + product?.category.slice(1)}`}</h1>
                </Link>
                <h1 className={styles['path-text']}>{`/ ${product?.name}`}</h1>
            </section>
            <section className={styles['main-wrapper']}>
                <div className={styles['image-carousel-wrapper']}>
                    <Slider {...carouselSettings}>
                        {product.images.map(x => {
                            return (
                                <div key={x} className={styles['image-wrapper']}>
                                    <img src={x} />
                                </div>
                            )
                        })}
                    </Slider>

                    {/* //TODO: images */}
                </div>
                <div className={styles['product-main-wrapper']}>
                    <div className={styles['title-wrapper']}>
                        <h1>{product?.name}</h1>
                    </div>
                    <div className={styles['text-wrapper']}>
                        <p>BRAND</p>
                        <h2>{product?.brand}</h2>
                    </div>
                    <div className={styles['text-wrapper']}>
                        <p>COLLECTION</p>
                        <h2>{product?.collection}</h2>
                    </div>
                    <div className={styles['text-wrapper']}>
                        <p>CATEGORY</p>
                        <h2>{product?.category.charAt(0).toUpperCase() + product?.category.slice(1)}</h2>
                    </div>
                    <div className={styles['color-wrapper']}>
                        {/* TODO: Finish color */}
                        <p>{currentColor}</p>
                        <ColorCarousel colorList={product?.color} />
                    </div>
                    <div className={styles['size-wrapper']}>
                        {/* TODO: Finish size */}
                        <p>Select Size</p>
                        {/* {product?.size.map(x => {
                            return (
                                <div className={styles['size-element-wrapper']}></div>
                            )
                        })} */}
                    </div>
                    <div className={styles['checkout-wrapper']}>
                        <div className={styles['price-wrapper']}>
                            <h1>BGN {product?.price.toFixed(2)}</h1>
                        </div>
                        <button
                            type='button'
                            onClick={onAddToCartClick}
                            className={styles['add-to-cart-btn']}
                        >
                            Add to Cart
                            <FontAwesomeIcon className={styles['add-to-cart-btn-icon']} icon={faCartShopping} size="1x" />
                        </button>
                    </div>
                    <div className={styles['add-to-wish-btn-wrapper']}>
                        <button
                            type='button'
                            onClick={onAddToWishlistClick}
                            className={styles['add-to-wish-btn']}
                        >
                            <FontAwesomeIcon className={styles['add-to-cart-btn-icon']} icon={faHeart} size="1x" />
                            Add To Wishlist
                        </button>
                    </div>
                    <div className={styles['text-wrapper']}>
                        <p>DETAILS</p>
                        <div className={styles['details-wrapper']}>
                            <div className={styles['detail-wrapper']}>
                                <FontAwesomeIcon className={styles['details-icon']} icon={faRecycle} size="1x" />
                                <div>
                                    {Array.from(product?.material).map(x => (
                                        <p key={x} className={styles['detail']}>{x}</p>
                                    ))}
                                </div>
                            </div>
                            <div className={styles['detail-wrapper']}>
                                <FontAwesomeIcon className={styles['details-icon']} icon={faVenusMars} size="1x" />
                                <div>
                                    <p className={styles['detail']}>
                                        {product?.gender}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['text-wrapper']}>
                        <p>DESCRIPTION</p>
                        <p>{product?.description}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}