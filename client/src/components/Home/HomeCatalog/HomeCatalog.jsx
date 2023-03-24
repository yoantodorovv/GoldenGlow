import { HomeCatalogSectionPreview } from './HomeCatalogSectionPreview/HomeCatalogSectionPreview';
import { HeroContainer } from '../../MainMenu/HeroContainer/HeroContainer'

import collectionBoth from '../../../../public/images/Home/collectionBoth.jpeg'
import collectionMen from '../../../../public/images/Home/collectionMen.jpeg'
import collectionWomen from '../../../../public/images/Home/collectionWomen.jpeg'
import styles from './HomeCatalog.module.scss'
import { Carousel } from '../../Carousel/Carousel';

export const HomeCatalog = () => {
    return (
        <div className={styles['general-wrapper']}>
            <HomeCatalogSectionPreview title="Most Popular">
                <Carousel />
            </HomeCatalogSectionPreview>
            <div className={styles['separator']}></div>
            <HomeCatalogSectionPreview title="E-Veryday" subtitle="NEW COLLECTION">
                <div className={styles['collection-container']}>
                    <HeroContainer path="/catalog/women" imageSrc={collectionWomen} containerText="Women" />
                    <HeroContainer path="/catalog" imageSrc={collectionBoth} containerText="Catalog" />
                    <HeroContainer path="/catalog/men" imageSrc={collectionMen} containerText="Men" />
                </div>
                <Carousel />
            </HomeCatalogSectionPreview>
        </div>
    );
}