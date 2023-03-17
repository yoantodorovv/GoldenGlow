import styles from "./styles/AboutTitle.module.scss"

export const AboutTitle = ({
    title,
    subtitle,
}) => {
    return (
        <div className={styles['title-wrapper']}>
            <h1 className={styles['title']}>{title}</h1>
            {
                subtitle && <p className={styles['subtitle']}>{subtitle}</p>
            }
        </div>
    );
}