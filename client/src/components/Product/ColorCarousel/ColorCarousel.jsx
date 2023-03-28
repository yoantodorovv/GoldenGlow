import { useEffect, useState } from 'react';

import styles from './ColorCarousel.module.scss'

export const ColorCarousel = ({
    colorList,
    setCurrentColorHandler
}) => {
    const [colorsState, setColorsState] = useState({});

    useEffect(() => {
        setColorsState(colorList.reduce((acc, curr) => {
            acc[curr] = false;
            return acc;
        }, {}))
    }, [colorList]);

    const onColorClick = (color) => {
        setColorsState(colorList.reduce((acc, curr) => {
            acc[curr] = false;
            return acc;
        }, {}))

        setColorsState(state => ({ ...state, [color]: true }))

        const displayColor = color.charAt(0).toUpperCase() + color.slice(1);

        setCurrentColorHandler(displayColor);
    }

    return (
        <div className={styles['carousel-wrapper']}>
            {colorList.map(x => {
                return (
                    <button
                        key={x}
                        type='button'
                        onClick={() => onColorClick(x)}
                        style={{backgroundColor: x}}
                        className={colorsState[x] ? styles['btn-active'] :  styles['btn']}
                    >
                    </button>
                )
            })}
        </div>
    );
}