import { useEffect, useState } from 'react';

import { db } from '../../services/firebaseService';
import { collection, getDocs } from 'firebase/firestore';

import { Card } from '../Card/Card'
import { CatalogNav } from './CatalogNav/CatalogNav';

import styles from './Catalog.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

export const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    const productsRef = collection(db, 'products');

    useEffect(() => {
        console.log('collection-read');

        //TODO: Uncomment
        // getDocs(productsRef)
        //     .then(data => {
        //         setProducts(data.docs.map(x => ({...x.data(), id: x.id})))
        //         setDisplayProducts(data.docs.map(x => ({...x.data(), id: x.id})))
        //     });
    });

    


    return (
        <div className={styles['general-wrapper']}>
            <CatalogNav
                // onOptionClick={onGenderOptionClick}
                // onGenderRemove={onGenderRemove}
            />
            <div className={styles['catalog-wrapper']}>
                <div className={styles['catalog-title-wrapper']}>
                    <h1></h1>
                </div>
                <div className={styles['catalog']}>
                    {/* {
                        displayProducts.length !== 0
                        ? products.map()
                        : <></>
                    } */}
                </div>
                <div className={styles['catalog-pagination-path']}>

                </div>
            </div>
        </div>
    );
}