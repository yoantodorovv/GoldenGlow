import { useEffect, useState } from "react";

import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../../services/firebaseService";

import styles from './ProductListItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const ProductListItem = ({
    onPriceChange,
    product,
    onRemoveProduct,
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
    const [quantityCount, setQuantityCount] = useState(product.quantity);
    const [totalPrice, setTotalPrice] = useState(product.totalPrice);
    const productRef = doc(db, 'products', product.productId);
    const userProductRef = doc(db, `users/${auth.currentUser.uid}/cart`, product.id);

    useEffect(() => {
        getDoc(productRef)
            .then(data => setQueryProduct(data.data()))
            .catch(err => console.log(err));
    }, []);

    const onDecrement = async () => {
        if (quantityCount <= 1) {
            return;
        }

        setQuantityCount(state => state - 1);
        setTotalPrice(state => state - product.innitialPrice);

        onPriceChange('decrement', product.innitialPrice);

        await updateDoc(userProductRef, {
            quantity: quantityCount - 1,
            totalPrice: totalPrice - product.innitialPrice
        });
    }

    const onIncrement = async () => {
        setQuantityCount(state => state + 1);
        setTotalPrice(state => state +  product.innitialPrice);

        onPriceChange('increment', product.innitialPrice);

        await updateDoc(userProductRef, {
            quantity: quantityCount + 1,
            totalPrice: totalPrice +  product.innitialPrice
        })
    }

    return (
        <div className={styles['product']}>
            <img src={queryProduct.images[0]} className={styles['product-image']} />
            <div className={styles['product-title-wrapper']}>
                <p>{queryProduct.category.charAt(0).toUpperCase() + queryProduct.category.slice(1)}</p>
                <h3>{queryProduct.name}</h3>
            </div>
            <div className={styles['product-quantity-wrapper']}>
                <button 
                    type='button'
                    onClick={onDecrement}
                    className={styles['decrement']}
                >
                    -
                </button>
                <h3>{quantityCount}</h3>
                <button 
                    type='button'
                    onClick={onIncrement}
                    className={styles['increment']}
                >
                    +
                </button>
            </div>
            <div className={styles['product-price-wrapper']}>
                <h3>BGN {totalPrice.toFixed(2)}</h3>
            </div>
            <button 
                type='button'
                onClick={() => onRemoveProduct(product.id)}
                className={styles['product-remove-btn']}
            >
                <FontAwesomeIcon className={styles['product-remove-btn-icon']} icon={faXmark} size="2x" />
            </button>
        </div>
    )
}