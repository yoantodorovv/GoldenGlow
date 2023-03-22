import { HomeCatalogSectionPreview } from './HomeCatalogSectionPreview/HomeCatalogSectionPreview';
import { Card } from '../../Card/Card'

import styles from './HomeCatalog.module.scss'

export const HomeCatalog = () => {
    return (
        <div className={styles['general-wrapper']}>
            <HomeCatalogSectionPreview title="New Collection">
                <Card />
                <Card />
                <Card />
            </HomeCatalogSectionPreview>
            {/* <HomeCatalogSectionPreview title="Most Popular">
                <Card />
                <Card />
                <Card />
            </HomeCatalogSectionPreview> */}
        </div>
    );
}