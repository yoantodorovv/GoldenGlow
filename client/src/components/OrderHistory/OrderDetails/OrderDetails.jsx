import { useState, useRef } from 'react';

import { OrderDetailsListItem } from './OrderDetailsListItem/OrderDetailsListItem';

import styles from './OrderDetails.module.scss'
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faMoneyBillTransfer, faClone } from '@fortawesome/free-solid-svg-icons';

export const OrderDetails = ({
    order,
    cancelOrderHandler,
    onRefundBtnClick
}) => {
    const orderDate = order?.orderedAt?.toDate();
    const now = new Date();
    const diffInMs = now - orderDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    let status = '';

    if (order?.isRefunded) {
        status = 'refunded';
    } else if (diffInDays > 1) {
        status = 'delivered';
    } else if (order?.isCancelled) {
        status = 'cancelled';
    } else if (order !== undefined) {
        status = 'inTransit';
    }

    const onCancelBtnClick = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel my order!'
        }).then((result) => {
            if (result.isConfirmed) {
                cancelOrderHandler(order.id);
            }
        })
    }

    const onRefundBtnClickHandler = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, refund my order!'
        }).then((result) => {
            if (result.isConfirmed) {
                onRefundBtnClick(order.id);
            }
        })
    }

    const handleCopy = (number) => {
        navigator.clipboard.writeText(Number(number));

        Swal.fire({
            title: `Successfuly copied ${number}!`,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 1000,
            showConfirmButton: false,
        });
    }

    return (
        <>
            <div className={styles['order-items-wrapper']}>
                <div className={styles['heading']}>
                    <div className={styles['heading-text']}>
                        <h2>Order #{order?.id?.slice(1, 10)}</h2>
                        <p>({order?.items?.length})</p>
                    </div>
                    <div className={styles['heading-addition']}>
                        {
                            status === 'cancelled'
                                ? (
                                    <div className={styles['cancelled-wrapper']}>
                                        <FontAwesomeIcon icon={faTriangleExclamation} size="1x" />
                                        <p className={styles['cancelled']}>Cancelled Order</p>
                                    </div>
                                )
                                : (
                                    status === 'delivered'
                                        ? (
                                            <button
                                                type='button'
                                                onClick={onRefundBtnClickHandler}
                                                className={styles['refund-btn']}
                                            >
                                                Refund Order
                                            </button>
                                        )
                                        : (
                                            status === 'inTransit'
                                                ? (
                                                    <button
                                                        type='button'
                                                        onClick={onCancelBtnClick}
                                                        className={styles['cancel-btn']}
                                                    >
                                                        Cancel Order
                                                    </button>
                                                )
                                                : (
                                                    status === 'refunded'
                                                        ? (
                                                            <div className={styles['refunded-wrapper']}>
                                                                <FontAwesomeIcon icon={faMoneyBillTransfer} size="1x" />
                                                                <p className={styles['refunded']}>Successfuly Refunded Order</p>
                                                            </div>
                                                        )
                                                        : <></>
                                                )
                                        )
                                )
                        }
                    </div>
                </div>
                <div className={styles['items-list-wrapper']}>
                    <ul className={styles['items-list']}>
                        {order?.items?.map(x => <OrderDetailsListItem key={x.id} item={x} />)}
                    </ul>
                </div>
            </div>
            <div className={styles['order-details-wrapper']}>
                <h2>Order Details</h2>
                <div className={styles['order-details-content']}>
                    <div className={styles['order-details-content-item']}>
                        <p>Delivery Address</p>
                        <h3>{order?.deliveryAddress}</h3>
                    </div>
                    <div className={styles['order-details-content-item']}>
                        <p>Declaration Number</p>
                        <div className={styles['copy']} onClick={() => handleCopy('012345678900000')}>
                            <FontAwesomeIcon icon={faClone} size="1x" />
                            <h3>012345678900000</h3>
                        </div>
                    </div>
                </div>
                <div className={styles['order-details-total']}>
                    <h3>Total</h3>
                    <h3>BGN {order?.totalPrice?.toFixed(2)}</h3>
                </div>
            </div>
        </>
    )
}