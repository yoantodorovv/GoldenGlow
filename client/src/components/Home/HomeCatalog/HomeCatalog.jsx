import { HomeCatalogSectionPreview } from './HomeCatalogSectionPreview/HomeCatalogSectionPreview';
import { Card } from '../../Card/Card'

import styles from './HomeCatalog.module.scss'
import { Carousel } from '../../Carousel/Carousel';

export const HomeCatalog = () => {
    return (
        <div className={styles['general-wrapper']}>
            <HomeCatalogSectionPreview title="New Collection" className={styles['wrapper-element']}>
                <Carousel />
            </HomeCatalogSectionPreview>
            <HomeCatalogSectionPreview title="Most Popular" className={styles['wrapper-element']}>
                <Carousel />
            </HomeCatalogSectionPreview>
        </div>
    );
}