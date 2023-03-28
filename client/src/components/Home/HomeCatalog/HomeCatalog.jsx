import { useState, useEffect } from 'react';

import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../services/firebaseService';

import { HomeCatalogSectionPreview } from './HomeCatalogSectionPreview/HomeCatalogSectionPreview';
import { HeroContainer } from '../../MainMenu/HeroContainer/HeroContainer'

import collectionBoth from '../../../../public/images/Home/collectionBoth.jpeg'
import collectionMen from '../../../../public/images/Home/collectionMen.jpeg'
import collectionWomen from '../../../../public/images/Home/collectionWomen.jpeg'
import styles from './HomeCatalog.module.scss'
import { Carousel } from '../../Carousel/Carousel';

export const HomeCatalog = () => {
    const [mostPopularProducts, setMostPopularProducts] = useState([]);
    const [collectionProducts, setCollectionProducts] = useState([]);

    useEffect(() => {
        const productsCollectionRef = collection(db, 'products');
        const collectionQuery = query(productsCollectionRef, where('collection', '==', 'Elegant Everyday'));

        getDocs(productsCollectionRef)
            .then(data => setMostPopularProducts(data.docs.map(doc => ({...doc.data(), id: doc.id}))))
            .catch(err => {
                console.log(err);
            });

        getDocs(collectionQuery)
            .then(data => setCollectionProducts(data.docs.map(doc => ({...doc.data(), id: doc.id}))))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className={styles['general-wrapper']}>
            <HomeCatalogSectionPreview title="Most Popular">
                <Carousel products={mostPopularProducts} slidesToShow={4} />
            </HomeCatalogSectionPreview>
            <div className={styles['separator']}></div>
            <HomeCatalogSectionPreview title="E-Veryday" subtitle="NEW COLLECTION">
                <div className={styles['collection-container']}>
                    <HeroContainer path="/catalog/women" imageSrc={collectionWomen} containerText="Women" />
                    <HeroContainer path="/catalog" imageSrc={collectionBoth} containerText="Catalog" />
                    <HeroContainer path="/catalog/men" imageSrc={collectionMen} containerText="Men" />
                </div>
                <Carousel products={collectionProducts} slidesToShow={4} />
            </HomeCatalogSectionPreview>
        </div>
    );
}