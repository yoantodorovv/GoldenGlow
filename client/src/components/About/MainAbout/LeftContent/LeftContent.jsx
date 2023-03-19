import styles from "../MainAbout.module.scss"

export const LeftContent = ({
    image,
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
                    src={image}
                    alt="Store image"
                />
            </div>
        </div>
    )
}