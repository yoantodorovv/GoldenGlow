import { useEffect, useState } from 'react';

import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { auth, db } from '../../../../services/firebaseService'

import { HeaderUserNav } from "../HeaderUserNav/HeaderUserNav";
import { HeaderProfile } from "../HeaderProfile/HeaderProfile";

export const Private = () => {
    const [wishlistCount, setWishlistCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const wishlistCollectionRef = collection(db, `users/${auth.currentUser.uid}/wishlist`);
    const cartCollectionRef = collection(db, `users/${auth.currentUser.uid}/cart`);

    useEffect(() => {
        getDocs(wishlistCollectionRef)
            .then(data => {
                const filteredData = data.docs.map(doc => ({ ...doc.data() }));

                setWishlistCount(filteredData.count);
            })
            .catch(err => {
                console.log(err);
            })

        getDocs(cartCollectionRef)
            .then(data => {
                const filteredData = data.docs.map(doc => ({ ...doc.data() }));

                setCartCount(filteredData.count);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    //TODO: Continie when having made a collection
    onSnapshot(wishlistCollectionRef, doc => {
        // console.log(doc);
    })

    return (
        <>
            <li>
                <HeaderUserNav toPath="/user/wishlist" type="wishlist" count={wishlistCount} />
            </li>
            <li>
                <HeaderUserNav toPath="/user/shopping-cart" type="shoppingCart" count={cartCount} />
            </li>
            <li>
                <HeaderProfile />
            </li>
        </>
    );
}