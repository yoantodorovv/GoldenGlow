import { useEffect, useState } from 'react';

import styles from './ColorCarousel.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const ColorCarousel = ({
    colorList
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
    }

    // TODO: Finish (extract color to diff component)
    return (
        <div className={styles['carousel-wrapper']}>
            {colorList.map(x => {
                console.log(x);
                console.log(colorsState[x]);

                return (
                    <button
                        key={x}
                        type='button'
                        onClick={() => onColorClick(x)}
                        className={styles['btn']}
                    >
                        {
                            colorsState[x]
                                ? <FontAwesomeIcon className={styles['btn-icon']} icon={faCheck} size="1x" />
                                : ''
                        }
                    </button>
                )
            })}
        </div>
    );
}