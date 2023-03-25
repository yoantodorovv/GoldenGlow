import { auth } from '../../services/firebaseService';

import { Link, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from './Card.module.scss'
import Swal from 'sweetalert2';

export const Card = ({
    product
}) => {
    const navigate = useNavigate();

    const addToCartHandler = () => {
        if (auth?.currentUser === null) {
            navigate('/login');
        }

        console.log('working!');
    }

    const addToWishlistHandler = () => {
        if (auth?.currentUser === null) {
            navigate('/login');
        }

        console.log('working!');
    }

    return (
        <div className={styles['card-wrapper']}>
            <div className={styles['card-image-wrapper']}>
                <img src={product.images[0]} />
            </div>
            <div className={styles['card-content-wrapper']}>
                <div className={styles['card-content-title-wrapper']}>
                    <Link to={`/catalog/${product.id}`} className={styles['card-content-title']}>{product.name}</Link>
                </div>
                <div className={styles['card-content']}>
                    <div className={styles['card-content-price']}>
                        <p>Price:</p>
                        <h1>BGN {product.price}</h1>
                    </div>
                    <button
                        type='button'
                        onClick={addToWishlistHandler}
                        className={styles['card-wishlist-btn']}
                    >
                        <FontAwesomeIcon className={styles['card-wishlist-btn-icon']} icon={faHeart} size="2x" />
                    </button>
                    <button
                        type='button'
                        onClick={addToCartHandler}
                        className={styles['card-buy-btn']}
                    >
                        <FontAwesomeIcon className={styles['card-buy-btn-icon']} icon={faCartShopping} size="2x" />
                    </button>
                </div>
            </div>
        </div>
    );
}