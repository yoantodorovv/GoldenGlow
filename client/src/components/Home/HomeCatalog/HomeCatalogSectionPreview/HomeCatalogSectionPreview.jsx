import styles from './HomeCatalogSectionPreview.module.scss'

export const HomeCatalogSectionPreview = ({
    children,
    title,
    subtitle
}) => {
    return (
        <section className={styles['preview-section']}>
            <div className={styles['preview-section-title']}>
                <p>{subtitle}</p>
                <h1>{title}</h1>
            </div>
            {children}
        </section>
    );
}