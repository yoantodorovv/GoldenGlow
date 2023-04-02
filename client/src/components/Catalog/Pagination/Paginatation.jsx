import { useState } from 'react';

import { Card } from '../../Card/Card';

import styles from './Pagination.module.scss'

export const Pagination = ({
    filteredProducts
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const paginatedProducts = filteredProducts.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const enumeration = [...Array(totalPages + 1).keys()].slice(1);

    const previousPageHandler = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const changePageHandler = (current) => {
        setCurrentPage(current)
    }

    const nextPageHandler = () => {
        if (currentPage !== totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <>
            <div className={styles['catalog']}>
                {
                    paginatedProducts.map(x => <Card key={x.id} product={x} />)
                }
            </div>
            <div className={styles['catalog-pagination-wrapper']}>
                <ul className={styles['catalog-pagination']}>
                    <li className={`${styles['page-link']} ${styles['left']}`}>
                        <button
                            type='button'
                            onClick={previousPageHandler}
                            className={styles['page-link-btn']}
                        >
                            Previous
                        </button>
                    </li>
                    {
                        enumeration.map((x, i) => (
                            <li key={i} className={styles['page-item']}>
                                <button
                                    type='button'
                                    onClick={() => changePageHandler(x)}
                                    className={`${styles['page-item-btn']} ${currentPage === x ? styles['active'] : ''}`}
                                >
                                    {x}
                                </button>
                            </li>
                        ))
                    }
                    <li className={`${styles['page-link']} ${styles['right']}`}>
                        <button
                            type='button'
                            onClick={nextPageHandler}
                            className={styles['page-link-btn']}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}