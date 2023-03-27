import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import { db } from '../../services/firebaseService';
import { doc, getDoc } from 'firebase/firestore';

import Swal from 'sweetalert2';
import styles from './Product.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

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
    const { productId } = useParams();
    const productRef = doc(db, 'products', productId);

    useEffect(() => {
        getDoc(productRef)
            .then(data => setProduct(data.data()))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={styles['wrapper']}>
            <section className={styles['path-wrapper']}>
                <Link to="/catalog" className={styles['link']}>
                    <FontAwesomeIcon className={styles['path-icon']} icon={faHouse} size="2x" />
                </Link>
                <Link to={`/catalog/${product?.collection}`} className={styles['link']}>
                    <h1 className={styles['path-text']}>{` / ${product?.collection}`}</h1>
                </Link>
                <Link to={`/catalog/${product?.category}`} className={styles['link']}>
                    <h1 className={styles['path-text']}>{` / ${product?.category.charAt(0).toUpperCase() + product?.category.slice(1)}`}</h1>
                </Link>
                <h1 className={styles['path-text']}>{`/ ${product?.name}`}</h1>
                {/* TODO: home/collection/category */}
            </section>
            <section className={styles['main-wrapper']}>
                <div className={styles['image-carousel-wrapper']}>
                    {/* //TODO: images */}
                </div>
                <div className={styles['product-main-wrapper']}>
                    {/* //TODO: name, collection, category, price, color, size */}
                </div>
            </section>
            <section className={styles['additional-info-wrapper']}>
                {/* //TODO: description, brand, material, gender,*/}
            </section>
        </div>
    );
}