import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../services/firebaseService";

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

    return (
        <div className={styles['product']}>
            <Link
                to={`/catalog/${product.collection}/${product.productId}`}
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
            <Link
                to={`/catalog/${product.collection}/${product.productId}`}
                className={styles['add-to-cart-btn']}
            >
                <h3>Add to Cart</h3>
                <FontAwesomeIcon className={styles['product-remove-btn-icon']} icon={faCartShopping} size="2x" />
            </Link>
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