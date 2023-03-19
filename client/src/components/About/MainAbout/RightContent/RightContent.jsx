import styles from "../MainAbout.module.scss"

export const RightContent = ({
    image,
    content
}) => {
    return (
        <div className={styles['menu']}>
            <div className={`${styles['img-wrapper']} ${styles['right']}`}>
                <img
                    className={`${styles['img']} ${styles['right']}`}
                    src={image}
                    alt="Store image"
                />
            </div>
            <div className={`${styles['content-wrapper']} ${styles['right']}`}>
                <p className={`${styles['content']} ${styles['right']}`}>{content}</p>
            </div>
        </div>
    )
}