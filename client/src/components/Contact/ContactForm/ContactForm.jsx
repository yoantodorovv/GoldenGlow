import { useState, useEffect } from 'react'

import { auth } from '../../../services/firebaseService'

import styles from './ContactForm.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const ContactForm = ({
    formStyle,
    onLocateClick,
}) => {

    //TODO: Set up Firestore and store user and its properties
    //TODO: Set innitial email and fullname values to user's if there is one logged in
    console.log(auth.currentUser);

    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        message: '',
        additionalDetails: '',
    });

    const onChangeHandler = (e) => 
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        
    //TODO: Make validation for email and make them necessary

    return (
        <div className={styles[formStyle]}>
            <form>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="fullName" className={styles['input-item-label']}>Full Name *</label>
                    <input
                        className={styles['input-item']}
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formValues.fullName}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="email" className={styles['input-item-label']}>Email *</label>
                    <input
                        className={styles['input-item']}
                        type="text"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="message" className={styles['input-item-label']}>Message *</label>
                    <input
                        className={styles['input-item']}
                        type="text"
                        name="message"
                        id="message"
                        value={formValues.message}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="additionalDetails" className={styles['input-item-label']}>Additional Details</label>
                    <textarea
                        rows="3"
                        className={styles['input-item']}
                        type="text"
                        name="additionalDetails"
                        id="additionalDetails"
                        value={formValues.additionalDetails}
                        onChange={onChangeHandler}
                    />
                </div>

                <input type='submit' className={styles['submit-btn']} />
            </form>
            <div className={styles['information-wrapper']}>
                <h3>Contact Information</h3>
                <div className={styles['info-item-wrapper']}>
                    <FontAwesomeIcon className={styles['icon']} icon={faLocationDot} size="lg" />
                    <p className={styles['info-item']}>Todor Balina, Veliko Tarnovo <br /> +359 81 234 5678</p>
                </div>
                <div className={styles['info-item-wrapper']}>
                    <FontAwesomeIcon className={styles['icon']} icon={faLocationDot} size="lg" />
                    <p className={styles['info-item']}>President Linclon, Sofia <br /> +359 81 234 5678</p>
                </div>
                <div className={styles['info-item-wrapper']}>
                    <FontAwesomeIcon className={styles['icon']} icon={faLocationDot} size="lg" />
                    <p className={styles['info-item']}>Ivan Drasov, Varna <br /> +359 81 234 5678</p>
                </div>
                <div className={styles['info-item-wrapper']}>
                    <FontAwesomeIcon className={styles['icon']} icon={faLocationDot} size="lg" />
                    <p className={styles['info-item']}>Tsarigrad, Ruse <br /> +359 81 234 5678</p>
                </div>
                <button type="button" className={styles['map-btn']} onClick={onLocateClick}>Locate Us</button>
            </div>
        </div>
    );
}