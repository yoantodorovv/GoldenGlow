import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { auth, db } from '../../services/firebaseService';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from './Card.module.scss'
import Swal from 'sweetalert2';

export const Card = ({
    product
}) => {
    const [currentProduct, setCurrentProduct] = useState(null);
    const navigate = useNavigate();

    const addToCartHandler = async () => {
        if (auth.currentUser === null) {
            navigate('/login');

            return;
        }

        const usersCartCollectionRef = collection(db, `users/${auth.currentUser.uid}/cart`);

        const cartQuery = query(usersCartCollectionRef, where('productId', '==', product.id))

        const queryResultCollection = await getDocs(cartQuery);

        if (queryResultCollection.docs.length > 0) {
            queryResultCollection.docs.forEach(x => {
                const updateProd = async () => {
                    await updateDoc(doc(db, `users/${auth.currentUser.uid}/cart`, x.id), {
                        quantity: x.data().quantity + 1,
                        totalPrice: x.data().totalPrice + product.price
                    });
                }
    
                updateProd();
            })

            Swal.fire({
                title: `Successfully added ${product.name} to your Shopping Cart again!`,
                icon: 'success',
                toast: true,
                position: 'top-end',
                timer: 3000,
                showConfirmButton: false,
            });

            return;
        }

        await addDoc(usersCartCollectionRef, {
            productId: product.id,
            quantity: 1,
            totalPrice: product.price
        });

        Swal.fire({
            title: `${product.name.charAt(0).toUpperCase() + product.name.slice(1)} successfully added to your Shopping Cart!`,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            showConfirmButton: false,
        });
    }

    const addToWishlistHandler = async () => {
        if (auth?.currentUser === null) {
            navigate('/login');

            return;
        }

        const usersWishlistCollectionRef = collection(db, `users/${auth.currentUser.uid}/wishlist`);

        const cartQuery = query(usersWishlistCollectionRef, where('productId', '==', product.id))

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
            productId: product.id,
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