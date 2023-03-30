import { useState } from 'react';

import styles from './CatalogNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'

export const CatalogNav = () => {


    const onApplyFilters = () => {

    }

    const onDiscardFilters = () => {

    }

    return (
        <div className={styles['catalog-navigation-wrapper']}>
            <section className={styles['selection-wrapper']}>
                <div className={styles['title-wrapper']}>
                    <h1>Gender</h1>
                    <button
                        type='button'
                        // onClick={onGenderRemove}
                        className={styles['title-btn']}
                    >
                        <FontAwesomeIcon className={styles['title-icon']} icon={faXmark} size="1x" />
                    </button>
                </div>
                <div className={styles['options-btn-wrapper']}>
                    <button
                        type='button'
                        name="Men"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
                    >
                        Men
                    </button>
                    <button
                        type='button'
                        name="Women"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
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
                        // onClick={onCollectionRemove}
                        className={styles['title-btn']}
                    >
                        <FontAwesomeIcon className={styles['title-icon']} icon={faXmark} size="1x" />
                    </button>
                </div>
                <div className={styles['options-btn-wrapper']}>
                    <button
                        type='button'
                        name="ElegantEveryday"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
                    >
                        Elegant Everyday
                    </button>
                    <button
                        type='button'
                        name="CasuallyImportant"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
                    >
                        Casually Important
                    </button>
                    <button
                        type='button'
                        name="Businessworld"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
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
                        // onClick={onCategoryRemove}
                        className={styles['title-btn']}
                    >
                        <FontAwesomeIcon className={styles['title-icon']} icon={faXmark} size="1x" />
                    </button>
                </div>
                <div className={styles['options-btn-wrapper']}>
                    <button
                        type='button'
                        name="Skirt"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
                    >
                        Skirt
                    </button>
                    <button
                        type='button'
                        name="Dress"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
                    >
                        Dress
                    </button>
                    <button
                        type='button'
                        name="Pants"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
                    >
                        Pants
                    </button>
                    <button
                        type='button'
                        name="T-Shirt"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
                    >
                        T-Shirt
                    </button>
                    <button
                        type='button'
                        name="Suit"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
                    >
                        Suit
                    </button>
                    <button
                        type='button'
                        name="Shirt"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
                    >
                        Shirt
                    </button>
                    <button
                        type='button'
                        name="Blouse"
                        // onClick={onOptionClick}
                        className={styles['options-btn']}
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