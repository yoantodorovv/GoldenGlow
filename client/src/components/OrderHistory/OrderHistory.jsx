import { useEffect, useState } from 'react';

import { db, auth } from '../../services/firebaseService';
import { collection, doc, getDocs, updateDoc, query, where } from 'firebase/firestore';

import { OrderHistoryListItem } from './OrderHistoryListItem/OrderHistoryListItem'
import { OrderDetails } from './OrderDetails/OrderDetails';

import styles from './OrderHistory.module.scss'
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

export const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [currentOrder, setCurrentOrder] = useState({});

    const userCartCollectionRef = collection(db, `users/${auth.currentUser.uid}/orders`);
    const collectionQuery = query(userCartCollectionRef, where('isRefunded', '==', false));

    const getOrders = async () => {
        const data = await getDocs(collectionQuery);

        console.log(data);

        const managedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id })).sort((a, b) => b.orderedAt - a.orderedAt);

        setOrders(managedData)

        setCurrentOrder(managedData[0])
    }

    useEffect(() => {
        getOrders();
    }, []);

    const handleCurrentOrderChange = (targetOrder) => setCurrentOrder(targetOrder);

    const cancelOrderHandler = async (orderId) => {
        const currentDocRef = doc(db, `users/${auth.currentUser.uid}/orders`, orderId);

        try {
            await updateDoc(currentDocRef, {
                isCancelled: true,
            });

            getOrders();

            Swal.fire({
                title: `Successfuly cancelled order #${orderId.slice(1, 10)}!`,
                icon: 'success',
                toast: true,
                position: 'top-end',
                timer: 2000,
                showConfirmButton: false,
            });
        } catch (err) {
            Swal.fire({
                title: `Could not cancel order #${orderId.slice(1, 10)}!`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                timer: 2000,
                showConfirmButton: false,
            });
        }
    }

    const onRefundBtnClick = async (orderId) => {
        const currentDocRef = doc(db, `users/${auth.currentUser.uid}/orders`, orderId);

        try {
            await updateDoc(currentDocRef, {
                isRefunded: true,
            });

            Swal.fire({
                title: `Successfuly refunded order #${orderId.slice(1, 10)}!`,
                icon: 'success',
                toast: true,
                position: 'top-end',
                timer: 2000,
                showConfirmButton: false,
            });

            getOrders();
        } catch (err) {
            Swal.fire({
                title: `Could not refund order #${orderId.slice(1, 10)}!`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                timer: 2000,
                showConfirmButton: false,
            });
        }
    }

    return (
        <div className={styles['general-wrapper']}>
            <div className={styles['general-information-wrapper']}>
                <div className={styles['general-information-title-wrapper']}>
                    <h1>Your Orders</h1>
                    <p>({orders.length})</p>
                </div>
            </div>
            <div className={styles['general-content-wrapper']}>

                <div className={styles['order-history-wrapper']}>
                    <h2>Order History</h2>
                    <ul className={styles['orders-list']}>
                        {
                            orders.length !== 0
                                ? orders.map(x =>
                                    <OrderHistoryListItem
                                        key={x.id}
                                        order={x}
                                        handleCurrentOrderChange={handleCurrentOrderChange}
                                        isActive={x === currentOrder ? true : false}
                                    />
                                )
                                : (
                                    <div className={styles['order-history-empty']}>
                                        <FontAwesomeIcon icon={faClockRotateLeft} size="1x" />
                                        <h3>No previous orders!</h3>
                                    </div>
                                )
                        }
                    </ul>
                </div>

                <div className={styles['order-wrapper']}>
                    <OrderDetails order={currentOrder} cancelOrderHandler={cancelOrderHandler} onRefundBtnClick={onRefundBtnClick} />
                </div>
            </div>
        </div>
    );
}