import { useState } from 'react';

import styles from './CreditCardForm.module.scss'

export const CreditCardForm = ({
    displayName
}) => {
    const [cardNumber, setCardNumber] = useState('');

    const handleCardNumberChange = (e) => {
        console.log(e.target.value);

        setCardNumber(e.target.value);
    }

    return (
        <>
            <div className={styles['payment-information-option']}>
                <p>Name On Card</p>
                <h4>{displayName}</h4>
            </div>
            <div className={styles['payment-information-option']}>
                <p>Card Number</p>
                <input type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder='1234 5678 1234 5678' value={cardNumber} onChange={handleCardNumberChange} />
            </div>
            <div className={styles['payment-information-option-subwrapper']}>
                <div className={`${styles['payment-information-option']} ${styles['date']}`}>
                    <p>Expiration Date</p>
                    <input type="tel" pattern="\d*" maxlength="7" placeholder='MM/YY' />
                </div>
                <div className={`${styles['payment-information-option']} ${styles['cvv']}`}>
                    <p>CVV</p>
                    <input type="tel" pattern="\d*" maxlength="4" placeholder='CVV' />
                </div>
            </div>
        </>
    );
}