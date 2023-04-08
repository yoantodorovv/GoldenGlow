import { OrderDetailsListItem } from './OrderDetailsListItem/OrderDetailsListItem';

import styles from './OrderDetails.module.scss'

export const OrderDetails = ({
    order,
    cancelOrderHandler,
}) => {
    const orderDate = order?.orderedAt?.toDate();
    const now = new Date();
    const diffInMs = now - orderDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    let status = '';

    if (diffInDays > 1) {
        status = 'delivered';
    } else if (order.isCancelled) {
        status = 'cancelled';
    } else {
        status = 'inTransit';
    }

    const onCancellBtnClick = (e) => {
        e.preventDefault();

        cancelOrderHandler(order.id);
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
                                ? <p className={styles['cancelled']}>Cancelled Order</p>
                                : (
                                    status === 'delivered' 
                                        ? <p className={styles['delivered']}>Delivered Order</p>
                                        : (
                                            <button
                                                type='button'
                                                onClick={onCancellBtnClick}
                                                className={styles['cancel-btn']}
                                            >
                                                Cancel Order
                                            </button>
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
            </div>
        </>
    )
}