import { useEffect, useState, useMemo } from 'react';

import { db } from '../../services/firebaseService';
import { collection, getDocs } from 'firebase/firestore';

import { Card } from '../Card/Card'
import { CatalogFilter } from './CatalogFilter/CatalogFilter';

import styles from './Catalog.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

import tempProducts from '../../../public/text/temp.json'

export const Catalog = () => {
    const initialFilters = {
        gender: [],
        collection: [],
        category: '',
        // price: '',
        // size: '',
        // color: '',
    };

    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState(initialFilters);

    const productsRef = collection(db, 'products');

    useEffect(() => {
        console.log('rerender');

        getDocs(productsRef)
            .then(data => {
                setProducts(data.docs.map(x => ({ ...x.data(), id: x.id })))
            });

        // setProducts(tempProducts.map(x => ({...x})));
    }, []);

    const applyFilters = () => {
        return products.filter(product => {
            if (filters.gender.length > 0 && !filters.gender.includes(product.gender)) {
                return false;
            }

            if (filters.collection.length > 0 && !filters.collection.includes(product.collection)) {
                return false;
            }

            if (filters.category && filters.category !== product.category) {
                return false;
            }

            return true;
        })
    }

    const filteredProducts = useMemo(() => applyFilters(products, filters), [products, filters]);

    const handleFilterChange = (name, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const handleResetClick = () => setFilters(initialFilters);

    return (
        <div className={styles['general-wrapper']}>
            <CatalogFilter filters={filters} handleFilterChange={handleFilterChange} handleResetClick={handleResetClick} />
            <div className={styles['catalog-wrapper']}>
                <div className={styles['catalog-title-wrapper']}>
                    <h1>All Products</h1>
                </div>
                {Object.values(filters).some((value) => Boolean(value)) && (
                    <p>Filtering by: {Object.entries(filters).map(([key, value]) => `${key}: ${value}`).join(', ')}</p>
                )}
                <div className={styles['catalog']}>
                    {
                        filteredProducts.length !== 0
                            ? filteredProducts.map(x => <Card key={x.id} product={x} />)
                            : <></>
                    }
                </div>
                <div className={styles['catalog-pagination-path']}>

                </div>
            </div>
        </div>
    );
}