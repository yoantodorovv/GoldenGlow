import styles from './NotFound.module.scss'

export const NotFound = () => {
    return (
        <div className={styles['wrapper']}>
            <h1>404</h1>
            <h2>Page not found!</h2>

            <button type="button" className={styles['btn']}>Go Back</button>
        </div>
    );
}