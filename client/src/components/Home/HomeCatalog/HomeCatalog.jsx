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
            <HomeCatalogSectionPreview title="New Collection">
                <div className={styles['collection-container']}>
                    <HeroContainer imageSrc={collectionWomen} containerText="Women" />
                    <HeroContainer imageSrc={collectionBoth} containerText="Catalog" />
                    <HeroContainer imageSrc={collectionMen} containerText="Men" />
                </div>
                <Carousel />
            </HomeCatalogSectionPreview>
        </div>
    );
}