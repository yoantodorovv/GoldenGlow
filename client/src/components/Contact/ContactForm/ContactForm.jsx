import { useState, useEffect } from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection  } from 'firebase/firestore'
import { auth, db } from '../../../services/firebaseService'

import Swal from 'sweetalert2'
import styles from './ContactForm.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const ContactForm = ({
    formStyle,
    onLocateClick,
}) => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        message: '',
        additionalDetails: '',
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setFormValues(state => 
                    ({...state, 
                    fullName: user?.displayName === null ? '' : user.displayName, 
                    email: user.email}));
          } else {
            setFormValues(state => ({...state, fullName: '',email: ''}));
          }
        });
    
        return unsubscribe;
      }, [auth]);

    const onChangeHandler = (e) => 
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        
    //TODO: Make validation for email and make them necessary

    const onFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const contactSubmissionsRef = collection(db, 'contactSubmissions');

            await addDoc(contactSubmissionsRef, {
                _uid: auth?.currentUser?.uid ? auth?.currentUser?.uid : '',
                fullName: formValues.fullName,
                email: formValues.email,
                message: formValues.message,
                additionalDetails: formValues.additionalDetails,
            });

            Swal.fire({
                title: 'Message successfully sent!',
                text: `We'll get back to you as soon as possible!`,
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            });
        } catch (error) {
            console.log(error);

            Swal.fire({
                title: 'Something went wrong!',
                text: 'Sorry, we were unable to sent the message. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Go Back',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            })
        }
    }

    return (
        <div className={styles[formStyle]}>
            <form onSubmit={onFormSubmit}>
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