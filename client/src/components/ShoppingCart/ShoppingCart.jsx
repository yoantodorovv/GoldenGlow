import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore'
import { auth, db } from '../../services/firebaseService'

import { ProductListItem } from '../ProductListItem/ProductListItem'
import { CreditCardForm } from './CreditCardForm/CreditCardForm'

import styles from './ShoppingCart.module.scss'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCartShopping, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'

export const ShoppingCart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isChecked, setIsChecked] = useState({
        CreditCard: true,
        PayPal: false,
    });
    const navigate = useNavigate();

    if (auth.currentUser === null) {
        return navigate('/');
    }

    const userCartCollectionRef = collection(db, `users/${auth.currentUser.uid}/cart`);

    const getProducts = async () => {

        console.log('collection-read');

        const data = await getDocs(userCartCollectionRef);

        setCartProducts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))

        setTotalPrice(0)

        data.docs.forEach(doc => {
            setTotalPrice(state => state += doc.data().totalPrice);
        })
    }

    useEffect(() => {
        getProducts();
    }, []);

    const onRemoveProduct = async (productId) => {
        try {
            await deleteDoc(doc(db, `users/${auth.currentUser.uid}/cart`, productId));

            Swal.fire({
                title: 'Successfuly removed item!',
                icon: 'success',
                toast: true,
                position: 'top-end',
                timer: 1000,
                showConfirmButton: false,
            });

            getProducts();
        } catch (error) {
            Swal.fire({
                title: 'Couldn\'t remove the item!',
                icon: 'error',
                toast: true,
                position: 'top-end',
                timer: 1000,
                showConfirmButton: false,
            });
        }
    }

    const onPriceChange = (type, addedSum) => {
        type === 'increment'
            ? setTotalPrice(state => state + addedSum)
            : setTotalPrice(state => state - addedSum)
    }

    const onCheckout = () => {

    }

    const handleMethodChange = (e) => {
        setIsChecked({
            CreditCard: false,
            PayPal: false,
        });

        setIsChecked(state => ({ ...state, [e.target.value]: true }))
    };

    return (
        <div className={styles['general-wrapper']}>
            <div className={styles['wrapper']}>
                <div className={styles['title-wrapper']}>
                    <h1>Shopping Cart</h1>
                </div>
                <div className={styles['content-wrapper']}>
                    <div className={styles['products-wrapper']}>
                        {cartProducts.length > 0
                            ? cartProducts.map(x => <ProductListItem key={x.productId} onPriceChange={onPriceChange} product={x} onRemoveProduct={onRemoveProduct} />)
                            : (
                                <div className={styles['empty-wrapper']}>
                                    <FontAwesomeIcon className={styles['empty-icon']} icon={faCartShopping} size="3x" />
                                    <h1 className={styles['empty-text']}>Shopping Cart is empty!</h1>
                                </div>
                            )
                        }
                    </div>
                    <div className={styles['total-wrapper']}>
                        <Link
                            to="/catalog"
                            className={styles['catalog-btn']}
                        >
                            <FontAwesomeIcon className={styles['catalog-btn-icon']} icon={faArrowLeft} size="1x" />
                            Continue Shopping
                        </Link>
                        <div className={styles['total-price-wrapper']}>
                            <p>Total:</p>
                            <h2>BGN {totalPrice.toFixed(2)}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['payment-wrapper']}>
                <form>
                    <div className={styles['payment-title-wrapper']}>
                        <h1>Payment Details</h1>
                    </div>
                    <div className={styles['payment-content-wrapper']}>
                        <div className={styles['payment-method']}>
                            <p>Payment Method</p>
                            <label className={styles['payment-option']}>
                                <input
                                    type="radio"
                                    name="method"
                                    value="CreditCard"
                                    checked={isChecked.CreditCard}
                                    onChange={handleMethodChange}
                                />
                                <FontAwesomeIcon className={styles['payment-option-icon']} icon={faCreditCard} size="1x" />
                                Credit Card
                            </label>
                            <label className={styles['payment-option']}>
                                <input
                                    type="radio"
                                    name="method"
                                    value="PayPal"
                                    checked={isChecked.PayPal}
                                    onChange={handleMethodChange}
                                />
                                <FontAwesomeIcon className={styles['payment-option-icon']} icon={faPaypal} size="1x" />
                                PayPal
                            </label>
                        </div>
                        <div className={styles['payment-information']}>
                            {
                                isChecked.CreditCard
                                    ? <CreditCardForm displayName={auth.currentUser.displayName} />
                                    : <></>
                            }
                        </div>
                    </div>
                    <div className={styles['total-price-wrapper']}>
                        <p>Total Cost:</p>
                        <h2>BGN {totalPrice.toFixed(2)}</h2>
                    </div>
                    <button
                        type='button'
                        onClick={onCheckout}
                        className={styles['payment-btn']}
                    >
                        Continue to Checkout
                    </button>
                </form>
            </div>
        </div>
    );
}
