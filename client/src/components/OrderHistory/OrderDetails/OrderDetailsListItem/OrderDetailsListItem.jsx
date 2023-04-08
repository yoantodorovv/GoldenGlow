import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '../../../../services/firebaseService';

import styles from './OrderDetailsListItem.module.scss'

export const OrderDetailsListItem = ({
    item
}) => {
    const [product, setProduct] = useState();

    const productRef = doc(db, 'products', item.productId);

    useEffect(() => {
        getDoc(productRef)
            .then(data => setProduct(data.data()))
            .catch(err => console.log(err));
    }, []);

    return (
        <li className={styles['item-wrapper']}>
            <div className={styles['img']}>
                <img src={product?.images[0]} />
            </div>
            <div className={styles['content']}>
                <div className={styles['main']}>
                    <h3 className={styles['name']}>{product?.name}</h3>
                    <h3 className={styles['brand']}>{product?.brand}</h3>
                    <p className={styles['side-text']}>Color: <i>{item.color}</i> &#x2022; Size: <i>{item.size}</i></p>
                    <p className={styles['count']}>{item.quantity} {item.quantity === 1 ? 'Item' : 'Items'}</p>
                </div>
                <div className={styles['price']}>
                    <h3>BGN {item.totalPrice.toFixed(2)}</h3>
                    <p>VAT Included</p>
                </div>
            </div>
        </li>
    );
}