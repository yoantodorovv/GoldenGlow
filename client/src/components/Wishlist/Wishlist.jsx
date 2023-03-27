import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore'
import { auth, db } from '../../services/firebaseService'

import { ProductItem } from './ProductItem/ProductItem'

import styles from './Wishlist.module.scss'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons'

export const Wishlist = () => {
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const navigate = useNavigate();

    if (auth.currentUser === null) {
        return navigate('/');
    }

    const userCartCollectionRef = collection(db, `users/${auth.currentUser.uid}/wishlist`);

    const getProducts = async () => {
        const data = await getDocs(userCartCollectionRef);

        setWishlistProducts(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }

    useEffect(() => {
        getProducts();
    }, []);

    const onRemoveProduct = async (productId) => {
        try {
            await deleteDoc(doc(db, `users/${auth.currentUser.uid}/wishlist`, productId));

            Swal.fire({
                title: 'Successfuly removed item!',
                icon: 'success',
                toast: true,
                position: 'top-end',
                timer: 1000,
                showConfirmButton: false,
            });

            getProducts();
        } catch (error) {
            Swal.fire({
                title: 'Couldn\'t remove the item!',
                icon: 'error',
                toast: true,
                position: 'top-end',
                timer: 1000,
                showConfirmButton: false,
            });
        }
    }

    return (
        <div className={styles['wrapper']}>
                <div className={styles['title-wrapper']}>
                    <h1>Wishlist</h1>
                </div>
                <div className={styles['content-wrapper']}>
                    <div className={styles['products-wrapper']}>
                        {   wishlistProducts.length > 0
                            ? wishlistProducts.map(x => <ProductItem key={x.productId} product={x} onRemoveProduct={onRemoveProduct} />)
                            : (
                                <div className={styles['empty-wrapper']}>
                                    <FontAwesomeIcon className={styles['empty-icon']} icon={faHeart} size="3x" />
                                    <h1 className={styles['empty-text']}>Wishlist is empty!</h1>
                                </div>
                            )
                        }
                    </div>
                    <div className={styles['total-wrapper']}>
                        <Link
                            to="/catalog"
                            className={styles['catalog-btn']}
                        >
                            <FontAwesomeIcon className={styles['catalog-btn-icon']} icon={faArrowLeft} size="1x" />
                            Continue Shopping
                        </Link>
                        <Link
                            to="/user/shopping-cart"
                            className={styles['shopping-cart-btn']}
                        >
                            To Cart
                        </Link>
                    </div>
                </div>
            </div>
    );
}