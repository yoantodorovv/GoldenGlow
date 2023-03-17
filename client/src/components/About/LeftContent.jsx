import styles from "./styles/MainAbout.module.scss"

export const LeftContent = ({
    imageUrl,
    content
}) => {
    return (
        <div className={styles['menu']}>
            <div className={`${styles['content-wrapper']} ${styles['left']}`}>
                <p className={`${styles['content']} ${styles['left']}`}>{content}</p>
            </div>
            <div className={`${styles['img-wrapper']} ${styles['left']}`}>
                <img
                    className={`${styles['img']} ${styles['left']}`}
                    src={imageUrl}
                    alt="Store image"
                />
            </div>
        </div>
    )
}