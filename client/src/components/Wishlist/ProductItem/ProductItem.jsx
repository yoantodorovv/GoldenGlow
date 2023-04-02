import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { collection, doc, getDoc, getDocs, addDoc, query, where } from "firebase/firestore";
import { auth, db } from "../../../services/firebaseService";

import Swal from "sweetalert2";
import styles from './ProductItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCartShopping, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const ProductItem = ({
    product,
    onRemoveProduct
}) => {
    const [queryProduct, setQueryProduct] = useState({
        name: '',
        brand: '',
        category: '',
        gender: '',
        price: 0,
        collection: '',
        description: '',
        color: [],
        size: [],
        images: [],
        material: {},
    });
    const productRef = doc(db, 'products', product.productId);
    const navigate = useNavigate();

    if (auth.currentUser === null) {
        navigate('/');
    }

    useEffect(() => {
        getDoc(productRef)
            .then(data => setQueryProduct(data.data()))
            .catch(err => console.log(err));
    }, []);

    const onAddToCart = async () => {
        const usersCartCollectionRef = collection(db, `users/${auth.currentUser.uid}/cart`);
        const cartQuery = query(usersCartCollectionRef, where('productId', '==', product.productId))

        try {
            const queryResultCollection = await getDocs(cartQuery);

            if (queryResultCollection.docs.length > 0) {
                Swal.fire({
                    title: `${queryProduct.name.charAt(0).toUpperCase() + queryProduct.name.slice(1)} is already added to your Shopping Cart!`,
                    icon: 'error',
                    toast: true,
                    position: 'top-end',
                    timer: 1500,
                    showConfirmButton: false,
                });

                return;
            }


            await addDoc(usersCartCollectionRef, {
                productId: product.productId,
                quantity: 1,
                totalPrice: queryProduct.price,
                innitialPrice: queryProduct.price
            });

            Swal.fire({
                title: `${queryProduct.name.charAt(0).toUpperCase() + queryProduct.name.slice(1)} successfully added to your Shopping Cart!`,
                icon: 'success',
                toast: true,
                position: 'top-end',
                timer: 3000,
                showConfirmButton: false,
            });
        } catch (error) {
            Swal.fire({
                title: `${queryProduct.name.charAt(0).toUpperCase() + queryProduct.name.slice(1)} couldn't be added to your Shopping Cart!`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                timer: 3000,
                showConfirmButton: false,
            });
        }
    }

    return (
        <div className={styles['product']}>
            <Link
                to={`/catalog/${product.productId}`}
                className={styles['product-link']}
            >
                <FontAwesomeIcon className={styles['product-link-icon']} icon={faUpRightFromSquare} size="lg" />
            </Link>
            <img src={queryProduct.images[0]} className={styles['product-image']} />
            <div className={styles['product-title-wrapper']}>
                <p>{queryProduct.category.charAt(0).toUpperCase() + queryProduct.category.slice(1)}</p>
                <h3>{queryProduct.name}</h3>
            </div>
            <div className={styles['product-price-wrapper']}>
                <h3>BGN {queryProduct.price.toFixed(2)}</h3>
            </div>
            <button
                type='button'
                onClick={onAddToCart}
                className={styles['add-to-cart-btn']}
            >
                <h3>Add to Cart</h3>
                <FontAwesomeIcon className={styles['product-remove-btn-icon']} icon={faCartShopping} size="2x" />
            </button>
            <button
                type='button'
                onClick={() => onRemoveProduct(product.id)}
                className={styles['product-remove-btn']}
            >
                <FontAwesomeIcon className={styles['product-remove-btn-icon']} icon={faXmark} size="2x" />
            </button>
        </div>
    );
}