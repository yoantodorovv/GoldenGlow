import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../../services/firebaseService';
import { collection, getDocs } from 'firebase/firestore';

import { CatalogFilter } from './CatalogFilter/CatalogFilter';
import { FilterTag } from './FilterTag/FilterTag';
import { Pagination } from './Pagination/Paginatation';

import styles from './Catalog.module.scss'

export const Catalog = () => {
    const initialFilters = {
        gender: [],
        collection: [],
        category: '',
        price: '',
    };

    const { filter } = useParams();
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState(initialFilters);
    const productsRef = collection(db, 'products');

    useEffect(() => {
        getDocs(productsRef)
            .then(data => {
                setProducts(data.docs.map(x => ({ ...x.data(), id: x.id })))
            });
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

            if (filters.price && product.price > filters.price) {
                return false;
            }

            return true;
        })
    }

    const filteredProducts = useMemo(() => applyFilters(products, filters), [products, filters]);

    const handleFilterChange = (name, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const handleResetClick = () => {
        setFilters(initialFilters);
    }

    return (
        <div className={styles['general-wrapper']}>
            <CatalogFilter filters={filters} filter={filter} handleFilterChange={handleFilterChange} handleResetClick={handleResetClick} />
            <div className={styles['catalog-wrapper']}>
                <div className={styles['catalog-title-wrapper']}>
                    <h1>All Products</h1>
                    <span className={styles['catalog-title-count']}>({filteredProducts.length})</span>
                </div>
                {Object.values(filters).some(value => Boolean(value)) && (
                    <div className={styles['filters-wrapper']}>{Object.entries(filters).map(([key, value]) => <FilterTag key={key} name={key} value={value} />)}</div>
                )}
                <Pagination filteredProducts={filteredProducts} />
            </div>
        </div>
    );
}