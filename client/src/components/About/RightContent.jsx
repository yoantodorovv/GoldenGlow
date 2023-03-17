import styles from "./styles/MainAbout.module.scss"

export const RightContent = ({
    imageUrl,
    content
}) => {
    return (
        <div className={styles['menu']}>
            <div className={`${styles['img-wrapper']} ${styles['right']}`}>
                <img
                    className={`${styles['img']} ${styles['right']}`}
                    src={imageUrl}
                    alt="Store image"
                />
            </div>
            <div className={`${styles['content-wrapper']} ${styles['right']}`}>
                <p className={`${styles['content']} ${styles['right']}`}>{content}</p>
            </div>
        </div>
    )
}