import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

import { collection, deleteDoc, getDocs, doc, addDoc } from 'firebase/firestore'
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
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    if (auth.currentUser === null) {
        return navigate('/');
    }

    const userCartCollectionRef = collection(db, `users/${auth.currentUser.uid}/cart`);

    const getProducts = async () => {
        const data = await getDocs(userCartCollectionRef);

        setCartProducts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))

        setTotalPrice(0)

        data.docs.forEach(doc => {
            setTotalPrice(state => state += doc.data().totalPrice);
        })
    }

    useEffect(() => {
        getProducts();
    }, [totalPrice]);

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

    const handleMethodChange = (e) => {
        setIsChecked({
            CreditCard: false,
            PayPal: false,
        });

        setIsChecked(state => ({ ...state, [e.target.value]: true }))
    };

    const onCheckout = async () => {
        try {
            const ordersRef = collection(db, `users/${auth.currentUser.uid}/orders`);

            await addDoc(ordersRef, {
                items: cartProducts,
                itemsCount: cartProducts.length,
                deliveryAddress: address,
                totalPrice: totalPrice,
                paymentMethod: 'creditCard',
                isCancelled: false,
                isRefunded: false,
                orderedAt: new Date(),
            });

            Swal.fire({
                title: 'Order Confirmed',
                text: 'Thank you for your order!',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            })

            cartProducts.forEach(async x => await deleteDoc(doc(db, `users/${auth.currentUser.uid}/cart`, x.id)));
            setCartProducts([]);

            navigate('/user/order-history');
        } catch (error) {
            Swal.fire({
                title: 'Oops... Something went wrong',
                text: 'We could NOT place your order! Please try again or contact out supprt team.',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            })
        }
    }

    const handleAddressChange = (targetAddress) => setAddress(targetAddress);

    const onCreatePayPalOrder = (data, actions) => {
        const value = (totalPrice * 0.511292).toFixed(2);

        console.log(totalPrice.toFixed(2));
        console.log(value);

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: value,
                        currency_code: "EUR",
                    },
                },
            ],
        });
    }

    const onApprovePayPalOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            console.log(details);

            Swal.fire({
                title: 'Order Confirmed',
                text: 'Thank you for your order!',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            })
        });
    }

    return (
        <div className={styles['general-wrapper']}>
            <div className={styles['wrapper']}>
                <div className={styles['title-wrapper']}>
                    <h1>Shopping Cart</h1>
                </div>
                <div className={styles['content-wrapper']}>
                    <div className={styles['products-wrapper']}>
                        {cartProducts.length > 0
                            ? cartProducts.map(x => <ProductListItem key={`${x.productId}-${x.size}-${x.color}`} onPriceChange={onPriceChange} product={x} onRemoveProduct={onRemoveProduct} />)
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
                                    ? <CreditCardForm handleAddressChange={handleAddressChange} />
                                    : <></>
                            }
                        </div>
                    </div>
                    <div className={styles['total-price-wrapper']}>
                        <p>Total Cost:</p>
                        <h2>BGN {totalPrice.toFixed(2)}</h2>
                    </div>
                    {
                        isChecked.CreditCard
                            ? (
                                <button
                                    type='button'
                                    onClick={onCheckout}
                                    className={styles['payment-btn']}
                                >
                                    Continue to Checkout
                                </button>
                            )
                            : (
                            <></>
                                // <PayPalScriptProvider
                                //     options={{
                                //         "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
                                //         currency: "EUR",
                                //         components: "buttons",
                                //         intent: "capture",
                                //         "vault": true,
                                //     }}
                                // >
                                //     <PayPalButtons
                                //         className={styles['payment-btn']}
                                //         createOrder={onCreatePayPalOrder}
                                //         onApprove={onApprovePayPalOrder}
                                //         onError={(error) => console.log(error)}
                                //     />
                                // </PayPalScriptProvider>
                            )
                    }
                </form>
            </div>
        </div>
    );
}
