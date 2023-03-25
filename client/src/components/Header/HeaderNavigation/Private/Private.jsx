import { useState } from 'react';

import { collection, onSnapshot } from 'firebase/firestore'
import { auth, db } from '../../../../services/firebaseService'

import { HeaderUserNav } from "../HeaderUserNav/HeaderUserNav";
import { HeaderProfile } from "../HeaderProfile/HeaderProfile";

export const Private = () => {
    const [wishlistCount, setWishlistCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const wishlistCollectionRef = collection(db, `users/${auth.currentUser.uid}/wishlist`);
    const cartCollectionRef = collection(db, `users/${auth.currentUser.uid}/cart`);

    onSnapshot(wishlistCollectionRef, doc => setWishlistCount(doc.docs.length))
    onSnapshot(cartCollectionRef, doc => setCartCount(doc.docs.length))

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