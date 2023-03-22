import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from './Card.module.scss'

export const Card = () => {
    const id = '1';

    //TODO: Implement Addition to Firestore (db)

    const addToCartHandler = () => {

    }

    const addToWishlistHandler = () => {
        
    }

    return (
        <div className={styles['card-wrapper']}>
            <div className={styles['card-image-wrapper']}>
                <img src="https://source.unsplash.com/random/1600x900?apple" />
            </div>
            <div className={styles['card-content-wrapper']}>
                <div className={styles['card-content-title-wrapper']}>
                    <Link to={`/catalog/${id}`} className={styles['card-content-title']}>Name</Link>
                </div>
                <div className={styles['card-content']}>
                    <div className={styles['card-content-price']}>
                        <p>Price:</p>
                        <h1>BGN 200</h1>
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