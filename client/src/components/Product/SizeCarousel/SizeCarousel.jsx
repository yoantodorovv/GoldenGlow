import { useState, useEffect } from 'react';

import styles from './SizeCarousel.module.scss'

export const SizeCarousel = ({
    sizeList,
    setCurrentSizeHandler
}) => {
    const [sizesState, setSizesState] = useState({});

    useEffect(() => {
        setSizesState(sizeList.reduce((acc, curr) => {
            acc[curr] = false;
            return acc;
        }, {}))
    }, [sizeList]);


    const onSizeClick = (size) => {
        setSizesState(sizeList.reduce((acc, curr) => {
            acc[curr] = false;
            return acc;
        }, {}))

        setSizesState(state => ({ ...state, [size]: true }))

        const displaySize = size.charAt(0).toUpperCase() + size.slice(1);

        setCurrentSizeHandler(displaySize);
    }

    return (
        <div className={styles['carousel-wrapper']}>
            {sizeList.map(x => {
                return (
                    <button
                        key={x}
                        type='button'
                        onClick={() => onSizeClick(x)}
                        className={sizesState[x] ? styles['btn-active'] : styles['btn']}
                    >
                        {x}
                    </button>
                )
            })}
        </div>
    );
}