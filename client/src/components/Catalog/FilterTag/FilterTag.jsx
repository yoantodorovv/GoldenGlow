import { useEffect, useState } from 'react'

import styles from './FilterTag.module.scss'

export const FilterTag = ({
    value,
}) => {
    const [isArray, setIsArray] = useState(false);
    const [doDisplay, setDoDisplay] = useState(false);

    useEffect(() => {
        if (value !== undefined && value !== '') {
            setDoDisplay(true);

            if (Array.isArray(value)) {
                setIsArray(true);
            }
        } else {
            setDoDisplay(false);
        }
    }, [value]);

    return (
        <>
            {
                doDisplay
                    ? !isArray
                        ? (
                            <div className={styles['filter']}>
                                <h5>{value?.charAt(0).toUpperCase() + value?.slice(1)}</h5>
                            </div>
                        )
                        : value.map(x => (
                            <div key={x} className={styles['filter']}>
                                <h5>{x?.charAt(0).toUpperCase() + x?.slice(1)}</h5>
                            </div>
                        ))
                    : <></>
            }
        </>
    )
}