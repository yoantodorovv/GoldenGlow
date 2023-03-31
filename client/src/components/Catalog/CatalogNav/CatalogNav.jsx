import { useState } from 'react';

import styles from './CatalogNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'

export const CatalogNav = ({
    onApplyFilters,
    onDiscardFilters,
}) => {
    const [gender, setGender] = useState({
        Men: false,
        Women: false,
    });
    const [collection, setCollection] = useState({
        ElegantEveryday: false,
        CasuallyImportant: false,
        Businessworld: false,
    });
    const [category, setCategory] = useState({
        Skirt: false,
        Dress: false,
        Pants: false,
        'T-Shirt': false,
        Suit: false,
        Shirt: false,
        Blouse: false,
    });

    const onGenderClick = (e) => {
        onGenderRemove();

        setGender(state => ({...state, [e.target.name]: true}));
    }

    const onGenderRemove = () => 
        setGender({ Men: false, Women: false });

    const onCollectionClick = (e) => {
        onCollectionRemove();

        setCollection(state => ({...state, [e.target.name]: true}));
    }

    const onCollectionRemove = () => 
        setCollection({
            ElegantEveryday: false,
            CasuallyImportant: false,
            Businessworld: false,
        });

    const onCategoryClick = (e) => {
        onCategoryRemove();

        setCategory(state => ({...state, [e.target.name]: true}));
    }
        
    const onCategoryRemove = () => 
        setCategory({
            Skirt: false,
            Dress: false,
            Pants: false,
            'T-Shirt': false,
            Suit: false,
            Shirt: false,
            Blouse: false,
        });

    return (
        <div className={styles['catalog-navigation-wrapper']}>
            <section className={styles['selection-wrapper']}>
                <div className={styles['title-wrapper']}>
                    <h1>Gender</h1>
                    <button
                        type='button'
                        onClick={onGenderRemove}
                        className={styles['title-btn']}
                    >
                        <FontAwesomeIcon className={styles['title-icon']} icon={faXmark} size="1x" />
                    </button>
                </div>
                <div className={styles['options-btn-wrapper']}>
                    <button
                        type='button'
                        name="Men"
                        onClick={onGenderClick}
                        className={gender.Men ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        Men
                    </button>
                    <button
                        type='button'
                        name="Women"
                        onClick={onGenderClick}
                        className={gender.Women ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        Women
                    </button>
                </div>
            </section>
            <section className={styles['selection-wrapper']}>
                <div className={styles['title-wrapper']}>
                    <h1>Collection</h1>
                    <button
                        type='button'
                        onClick={onCollectionRemove}
                        className={styles['title-btn']}
                    >
                        <FontAwesomeIcon className={styles['title-icon']} icon={faXmark} size="1x" />
                    </button>
                </div>
                <div className={styles['options-btn-wrapper']}>
                    <button
                        type='button'
                        name="ElegantEveryday"
                        onClick={onCollectionClick}
                        className={collection.ElegantEveryday ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        Elegant Everyday
                    </button>
                    <button
                        type='button'
                        name="CasuallyImportant"
                        onClick={onCollectionClick}
                        className={collection.CasuallyImportant ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        Casually Important
                    </button>
                    <button
                        type='button'
                        name="Businessworld"
                        onClick={onCollectionClick}
                        className={collection.Businessworld ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        Businessworld
                    </button>
                </div>
            </section>
            <section className={styles['selection-wrapper']}>
                <div className={styles['title-wrapper']}>
                    <h1>Category</h1>
                    <button
                        type='button'
                        onClick={onCategoryRemove}
                        className={styles['title-btn']}
                    >
                        <FontAwesomeIcon className={styles['title-icon']} icon={faXmark} size="1x" />
                    </button>
                </div>
                <div className={styles['options-btn-wrapper']}>
                    <button
                        type='button'
                        name="Skirt"
                        onClick={onCategoryClick}
                        className={category.Skirt ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        Skirt
                    </button>
                    <button
                        type='button'
                        name="Dress"
                        onClick={onCategoryClick}
                        className={category.Dress ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        Dress
                    </button>
                    <button
                        type='button'
                        name="Pants"
                        onClick={onCategoryClick}
                        className={category.Pants ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        Pants
                    </button>
                    <button
                        type='button'
                        name="T-Shirt"
                        onClick={onCategoryClick}
                        className={category['T-Shirt'] ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        T-Shirt
                    </button>
                    <button
                        type='button'
                        name="Suit"
                        onClick={onCategoryClick}
                        className={category.Suit ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        Suit
                    </button>
                    <button
                        type='button'
                        name="Shirt"
                        onClick={onCategoryClick}
                        className={category.Shirt ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        Shirt
                    </button>
                    <button
                        type='button'
                        name="Blouse"
                        onClick={onCategoryClick}
                        className={category.Blouse ? styles['options-btn-active'] : styles['options-btn']}
                    >
                        Blouse
                    </button>
                </div>
            </section>
            <div className={styles['filter-wrapper']}>
                <section className={styles['color-wrapper']}>

                </section>
                <section className={styles['size-wrapper']}>

                </section>
                <section className={styles['price-wrapper']}>

                </section>
            </div>
            <div className={styles['btn-wrapper']}>
                <button
                    type='button'
                    onClick={onApplyFilters}
                    className={styles['apply-btn']}
                >
                    Apply
                </button>
                <button
                    type='button'
                    onClick={onDiscardFilters}
                    className={styles['discard-btn']}
                >
                    <FontAwesomeIcon className={styles['discard-btn-icon']} icon={faTrash} size="2x" />
                </button>
            </div>
        </div>
    );
}