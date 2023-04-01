import { useState } from 'react';

import styles from './CatalogFilter.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const CatalogFilter = ({
    filters,
    handleFilterChange,
    handleResetClick,
}) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        const newFilters = checked
            ? [...filters[name], value]
            : filters[name].filter((v) => v !== value);
        handleFilterChange(name, newFilters);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        handleFilterChange('category', event.target.value);
    };

    return (
        <div className={styles['catalog-navigation-wrapper']}>
            <form>
                <div className={styles['selection-wrapper']}>
                    <div className={styles['title-wrapper']}>
                        <h1>Gender</h1>
                    </div>
                    <div className={styles['options-wrapper']}>
                        <label className={styles['option']}>
                            <input
                                type="checkbox"
                                name="gender"
                                value="men"
                                onChange={handleCheckboxChange}
                            />
                            Men
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="checkbox"
                                name="gender"
                                value="women"
                                onChange={handleCheckboxChange}
                            />
                            Women
                        </label>
                    </div>
                </div>

                <div className={styles['selection-wrapper']}>
                    <div className={styles['title-wrapper']}>
                        <h1>Collection</h1>
                    </div>
                    <div className={styles['options-wrapper']}>
                        <label className={styles['option']}>
                            <input
                                type="checkbox"
                                name="collection"
                                value="Elegant Everyday"
                                onChange={handleCheckboxChange}
                            />
                            Elegant Everyday
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="checkbox"
                                name="collection"
                                value="Businessworld"
                                onChange={handleCheckboxChange}
                            />
                            Businessworld
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="checkbox"
                                name="collection"
                                value="Casually Important"
                                onChange={handleCheckboxChange}
                            />
                            Casually Important
                        </label>
                    </div>
                </div>

                <div className={styles['selection-wrapper']}>
                    <div className={styles['title-wrapper']}>
                        <h1>Category</h1>
                    </div>
                    <div className={styles['options-wrapper']}>
                        <label className={styles['option']}>
                            <input
                                type="radio"
                                name="category"
                                value="shirt"
                                checked={selectedCategory === 'shirt'}
                                onChange={handleCategoryChange}
                            />
                            Shirts
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="radio"
                                name="category"
                                value="pants"
                                checked={selectedCategory === 'pants'}
                                onChange={handleCategoryChange}
                            />
                            Pants
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="radio"
                                name="category"
                                value="blouse"
                                checked={selectedCategory === 'blouse'}
                                onChange={handleCategoryChange}
                            />
                            Blouses
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="radio"
                                name="category"
                                value="suit"
                                checked={selectedCategory === 'suit'}
                                onChange={handleCategoryChange}
                            />
                            Suits
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="radio"
                                name="category"
                                value="T-shirt"
                                checked={selectedCategory === 'T-shirt'}
                                onChange={handleCategoryChange}
                            />
                            T-Shirts
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="radio"
                                name="category"
                                value="skirt"
                                checked={selectedCategory === 'skirt'}
                                onChange={handleCategoryChange}
                            />
                            Skirts
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="radio"
                                name="category"
                                value="dress"
                                checked={selectedCategory === 'dress'}
                                onChange={handleCategoryChange}
                            />
                            Dresses
                        </label>
                    </div>
                </div>

                <div className={styles['btn-wrapper']}>
                    <button
                        type='reset'
                        onClick={handleResetClick}
                        className={styles['discard-btn']}
                    >
                        <h3>Discard</h3>
                        <FontAwesomeIcon icon={faTrash} size="2x" />
                    </button>
                </div>
            </form>
        </div>
    );
}