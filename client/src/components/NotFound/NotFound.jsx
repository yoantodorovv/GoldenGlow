import { useNavigate } from 'react-router-dom';

import styles from './NotFound.module.scss'

export const NotFound = () => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate(-1);
    }

    return (
        <div className={styles['wrapper']}>
            <h1>404</h1>
            <h2>Page not found!</h2>

            <button onClick={onButtonClick} type="button" className={styles['btn']}>Go Back</button>
        </div>
    );
}