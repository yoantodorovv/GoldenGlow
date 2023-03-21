import styles from './AuthValidation.module.scss'

export const AuthValidation = ({
    text,
}) => {
    return (
        <>
            {
                text !== 'true'
                    ? <div className={styles['error']}>
                        <p>{text}</p>
                    </div>
                    : null
            }
        </>
    );
}