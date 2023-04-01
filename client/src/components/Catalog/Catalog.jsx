import { useEffect, useState } from 'react';

import { db } from '../../services/firebaseService';
import { collection, getDocs } from 'firebase/firestore';

import { Card } from '../Card/Card'
import { CatalogNav } from './CatalogNav/CatalogNav';

import styles from './Catalog.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

import tempProducts from '../../../public/text/temp.json'


export const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [isFiltered, setIsFitered] = useState({
        gender: false,
        collection: false,
        category: false,
    });

    const productsRef = collection(db, 'products');

    useEffect(() => {
        console.log('rerender');

        // getDocs(productsRef)
        //     .then(data => {
        //         setProducts(data.docs.map(x => ({...x.data(), id: x.id})))
        //         setDisplayProducts(data.docs.map(x => ({...x.data(), id: x.id})))
        //     });

        setProducts(tempProducts.map(x => ({...x})))
        setDisplayProducts(tempProducts.map(x => ({...x})))
    }, []);


    const onApplyFilters = () => {

    }

    const onDiscardFilters = () => {

    }

    return (
        <div className={styles['general-wrapper']}>
            <CatalogNav 
                onApplySection={onApplySection}
                onApplyFilters={onApplyFilters}
                onDiscardFilters={onDiscardFilters}
            />
            <div className={styles['catalog-wrapper']}>
                <div className={styles['catalog-title-wrapper']}>
                    <h1>All Products</h1>
                </div>
                <div className={styles['catalog']}>
                    {
                        displayProducts.length !== 0
                        ? displayProducts.map(x => <Card key={x.id} product={x} />)
                        : <></>
                    }
                </div>
                <div className={styles['catalog-pagination-path']}>

                </div>
            </div>
        </div>
    );
}