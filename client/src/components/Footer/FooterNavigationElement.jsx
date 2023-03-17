import styles from "./Footer.module.scss"

export const FooterNavigationElement = ({
    children,
    title,
}) => {
    return (
        <div className={styles['footer-map']}>
            <h2 className={styles['footer-titles']}>{title}</h2>
            {children}
        </div>
    );
}