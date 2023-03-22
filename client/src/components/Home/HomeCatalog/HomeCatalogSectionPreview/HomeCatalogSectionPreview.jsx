import styles from './HomeCatalogSectionPreview.module.scss'

export const HomeCatalogSectionPreview = ({
    children,
    title
}) => {
    return (
        <section className={styles['preview-section']}>
            <div className={styles['preview-section-title']}>
                <h1>{title}</h1>
            </div>
            <div className={styles['preview-section-carousel']}>
                {children}
            </div>
        </section>
    );
}