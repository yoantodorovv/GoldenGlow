import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import Slider from 'react-slick';

import { auth, db } from '../../services/firebaseService';
import { collection, doc, getDoc, getDocs, addDoc, query, where } from 'firebase/firestore';

import Swal from 'sweetalert2';
import styles from './Product.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping, faHeart, faRecycle, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ColorCarousel } from './ColorCarousel/ColorCarousel';
import { SizeCarousel } from './SizeCarousel/SizeCarousel';

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
    const [currentSize, setCurrentSize] = useState('Select Size');
    const { productId } = useParams();
    const productRef = doc(db, 'products', productId);
    const navigate = useNavigate();

    useEffect(() => {
        getDoc(productRef)
            .then(data => setProduct(data.data()))
            .catch(err => console.log(err));
    }, []);

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        autoplay: true,
    };

    const onAddToCart = async () => {
        if (auth.currentUser === null) {
            return navigate('/login');
        }

        const usersCartCollectionRef = collection(db, `users/${auth.currentUser.uid}/cart`);

        const cartQuery = query(usersCartCollectionRef, 
            where('productId', '==', productId),
            where('color', '==', currentColor), 
            where('size', '==', currentSize));

        const queryResultCollection = await getDocs(cartQuery);

        if (queryResultCollection.docs.length > 0) {
            Swal.fire({
                title: `${product.name.charAt(0).toUpperCase() + product.name.slice(1)} is already added to your Shopping Cart!`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                timer: 1000,
                showConfirmButton: false,
            });

            return;
        }

        try {
            await addDoc(usersCartCollectionRef, {
                productId: productId,
                quantity: 1,
                totalPrice: product.price,
                innitialPrice: product.price,
                size: currentSize,
                color: currentColor,
            });

            Swal.fire({
                title: `${product.name.charAt(0).toUpperCase() + product.name.slice(1)} successfully added to your Shopping Cart!`,
                icon: 'success',
                toast: true,
                position: 'top-end',
                timer: 3000,
                showConfirmButton: false,
            });
        } catch (error) {
            Swal.fire({
                title: `${product.name.charAt(0).toUpperCase() + product.name.slice(1)} couldn't be added to your Shopping Cart!`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                timer: 3000,
                showConfirmButton: false,
            });
        }
    }

    const onAddToWishlist = async () => {
        if (auth?.currentUser === null) {
            return navigate('/login');
        }

        const usersWishlistCollectionRef = collection(db, `users/${auth.currentUser.uid}/wishlist`);

        const cartQuery = query(usersWishlistCollectionRef, where('productId', '==', productId))

        const queryResultCollection = await getDocs(cartQuery);

        if (queryResultCollection.docs.length > 0) {
            Swal.fire({
                title: `${product.name.charAt(0).toUpperCase() + product.name.slice(1)} is already added to your Wishlist!`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                timer: 3000,
                showConfirmButton: false,
            });

            return;
        }

        await addDoc(usersWishlistCollectionRef, {
            productId: productId,
        });

        Swal.fire({
            title: `${product.name.charAt(0).toUpperCase() + product.name.slice(1)} successfully added to your Wishlist!`,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            showConfirmButton: false,
        });
    }

    const setCurrentColorHandler = (color) => setCurrentColor(color);

    const setCurrentSizeHandler = (size) => setCurrentSize(size);

    return (
        <div className={styles['wrapper']}>
            <section className={styles['path-wrapper']}>
                <Link to="/catalog" className={styles['link']}>
                    <FontAwesomeIcon className={styles['path-icon']} icon={faHouse} size="lg" />
                </Link>
                <Link to={`/catalog/${product?.collection}`} className={styles['link']}>
                    <h1 className={styles['path-text']}>{` / ${product?.collection}`}</h1>
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
                        <p>
                            {
                                currentColor === 'Select Color'
                                    ? currentColor
                                    : `Color: ${currentColor}`
                            }
                        </p>
                        <ColorCarousel colorList={product?.color} setCurrentColorHandler={setCurrentColorHandler} />
                    </div>
                    <div className={styles['size-wrapper']}>
                        <p>
                            {
                                currentSize === 'Select Size'
                                    ? currentSize
                                    : `Size: ${currentSize}`
                            }
                        </p>
                        <SizeCarousel sizeList={product?.size} setCurrentSizeHandler={setCurrentSizeHandler} />
                    </div>
                    <div className={styles['checkout-wrapper']}>
                        <div className={styles['price-wrapper']}>
                            <h1>BGN {product?.price.toFixed(2)}</h1>
                        </div>
                        <button
                            type='button'
                            onClick={onAddToCart}
                            className={styles['add-to-cart-btn']}
                            disabled={currentColor === 'Select Color' || currentSize === 'Select Size'}
                        >
                            Add to Cart
                            <FontAwesomeIcon className={styles['add-to-cart-btn-icon']} icon={faCartShopping} size="1x" />
                        </button>
                    </div>
                    <div className={styles['add-to-wish-btn-wrapper']}>
                        <button
                            type='button'
                            onClick={onAddToWishlist}
                            className={styles['add-to-wish-btn']}
                        >
                            <FontAwesomeIcon className={styles['add-to-cart-btn-icon']} icon={faHeart} size="1x" />
                            Add To Wishlist
                        </button>
                    </div>
                </div>
            </section>
            <section className={styles['general-details-wrapper']}>
                <div className={styles['description']}>
                    <p>DESCRIPTION</p>
                    <p>{product?.description}</p>
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
            </section>
        </div>
    );
}