import { useEffect, useState } from 'react';

import { db, auth } from '../../services/firebaseService';
import { collection, getDocs } from 'firebase/firestore';

import { OrderHistoryListItem } from './OrderHistoryListItem/OrderHistoryListItem'

import styles from './OrderHistory.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { OrderDetails } from './OrderDetails/OrderDetails';

export const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [currentOrder, setCurrentOrder] = useState({});

    const userCartCollectionRef = collection(db, `users/${auth.currentUser.uid}/orders`);

    const getOrders = async () => {
        const data = await getDocs(userCartCollectionRef);

        const managedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));

        setOrders(managedData)

        setCurrentOrder(managedData[0])
    }

    useEffect(() => {
        getOrders();
    }, []);

    const handleCurrentOrderChange = (targetOrder) => setCurrentOrder(targetOrder);

    return (
        <div className={styles['general-wrapper']}>
            <div className={styles['general-information-wrapper']}>
                <h1>Your Orders</h1>
                <p>({orders.length})</p>
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
                    <OrderDetails />
                </div>
            </div>
        </div>
    );
}