import { useState } from 'react';

import styles from './CatalogFilter.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const CatalogFilter = ({
    filters,
    handleFilterChange,
    handleResetClick,
}) => {
    const initialCheckboxState = {
        men: false,
        women: false,
        'Elegant Everyday': false,
        'Businessworld': false,
        'Casually Important': false,
    };

    const [selectedCategory, setSelectedCategory] = useState('');
    const [isChecked, setIsChecked] = useState(initialCheckboxState);
    const [rangeValue, setRangeValue] = useState(100);

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;

        setIsChecked(state => ({ ...state, [value]: checked }));

        const newFilters = checked
            ? [...filters[name], value]
            : filters[name].filter((v) => v !== value);
        handleFilterChange(name, newFilters);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        handleFilterChange('category', e.target.value);
    };

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
        handleFilterChange('price', e.target.value)
    }

    const onSubmitClick = (e) => {
        e.preventDefault();

        setIsChecked(initialCheckboxState);
        setSelectedCategory('');
        setRangeValue(100);
        handleResetClick();
    }

    return (
        <div className={styles['catalog-navigation-wrapper']}>
            <form onSubmit={onSubmitClick}>
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
                                checked={isChecked.men}
                                onChange={handleCheckboxChange}
                            />
                            Men
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="checkbox"
                                name="gender"
                                value="women"
                                checked={isChecked.women}
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
                                checked={isChecked['Elegant Everyday']}
                                onChange={handleCheckboxChange}
                            />
                            Elegant Everyday
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="checkbox"
                                name="collection"
                                value="Businessworld"
                                checked={isChecked['Businessworld']}
                                onChange={handleCheckboxChange}
                            />
                            Businessworld
                        </label>
                        <label className={styles['option']}>
                            <input
                                type="checkbox"
                                name="collection"
                                value="Casually Important"
                                checked={isChecked['Casually Important']}
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

                <div className={styles['selection-wrapper']}>
                    <div className={styles['title-wrapper']}>
                        <h1>Price</h1>
                    </div>
                    <div className={styles['options-wrapper']}>
                        <h4 className={styles['price-range']}>Less than:</h4>
                        <h4>BGN {Number(rangeValue).toFixed(2)}</h4>
                        <input
                            type="range"
                            name="category"
                            min="0"
                            max="100"
                            value={rangeValue}
                            onChange={handleRangeChange}
                        />
                        <h5></h5>
                    </div>
                </div>

                <div className={styles['btn-wrapper']}>
                    <button
                        type='submit'
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