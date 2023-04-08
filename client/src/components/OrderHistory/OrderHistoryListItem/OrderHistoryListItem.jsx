import { useEffect, useState } from 'react';

import styles from './OrderHistoryListItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export const OrderHistoryListItem = ({
    order,
    handleCurrentOrderChange,
    isActive
}) => {
    const orderDate = order.orderedAt.toDate();
    const now = new Date();
    const diffInMs = now - orderDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = orderDate.toLocaleDateString("en-US", options);

    let innitialStatus = {
        text: '',
        class: '',
        icon: {}
    };

    if (diffInDays > 3) {
        innitialStatus = {
            text: 'Delivered',
            class: 'delivered',
            icon: faCheck
        };
    } else if (order.isCancelled) {
        innitialStatus = {
            text: 'Cancelled',
            class: 'cancelled',
            icon: faTriangleExclamation
        };
    } else {
        innitialStatus = {
            text: 'In Transit',
            class: 'in-transit',
            icon: faTruck
        };
    }

    const handleOrderClick = () => {
        if (!isActive) {
            handleCurrentOrderChange(order)
        }
    }

    return (
        <li>
            <div
                onClick={handleOrderClick}
                className={isActive ? styles['order-wrapper-active'] : styles['order-wrapper']}
            >
                <div className={styles['general-info']}>
                    <h3>#{order.id.slice(1, 10)}</h3>
                    <h4>BGN {order.totalPrice.toFixed(2)}</h4>
                    <p>{order.items.length} Items</p>
                </div>
                <div className={styles['additional-info']}>
                    <div className={`${styles['status']} ${styles[innitialStatus?.class]}`}>
                        <FontAwesomeIcon icon={innitialStatus?.icon} size="1x" />
                        <h3>{innitialStatus?.text.toString()}</h3>
                    </div>
                    <p>{formattedDate.toString()}</p>
                </div>
            </div>
        </li>
    );
}