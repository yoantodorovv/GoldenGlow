import { useState } from 'react';

import styles from './CreditCardForm.module.scss'

export const CreditCardForm = ({
    displayName
}) => {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'number') {
            setNumber(value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim());
        } else if (name === 'expiry') {
            const formattedExpiry = value
                .replace(/\s/g, '')
                .replace(/(\d{2})(\d{1,2})/, '$1/$2')
                .trim();

            setExpiry(formattedExpiry);
        } else {
            eval(`set${name.charAt(0).toUpperCase() + name.slice(1)}('${value}')`);
        }
    }

    return (
        <>
            <div className={styles['payment-information-option']}>
                <p>Name On Card</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Cardholder Name"
                    maxLength="50"
                    onChange={handleInputChange}
                    value={name}
                    required
                />
            </div>
            <div className={styles['payment-information-option']}>
                <p>Card Number</p>
                <input
                    type="tel"
                    name="number"
                    maxLength="19"
                    placeholder='1234 5678 1234 5678'
                    value={number}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles['payment-information-option-subwrapper']}>
                <div className={`${styles['payment-information-option']} ${styles['date']}`}>
                    <p>Expiration Date</p>
                    <input
                        type="text"
                        name="expiry"
                        maxLength="5"
                        placeholder='MM/YY'
                        value={expiry}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={`${styles['payment-information-option']} ${styles['cvv']}`}>
                    <p>CVV / CVC</p>
                    <input
                        type="tel"
                        name="cvc"
                        maxLength="3"
                        placeholder='123'
                        value={cvc}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
        </>
    );
}