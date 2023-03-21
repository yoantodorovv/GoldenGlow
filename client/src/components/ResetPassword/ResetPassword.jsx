import { useEffect, useState } from 'react'

import { AuthValidation } from '../AuthValidation/AuthValidation'
import { AuthValidationIcon } from '../AuthValidationIcon/AuthValidationIcon'

import { sendPasswordResetEmail, onAuthStateChanged } from '@firebase/auth'
import { auth } from '../../services/firebaseService'
import * as validate from '../../services/validationService'
import Swal from 'sweetalert2'

import styles from './ResetPassword.module.scss'
import { useNavigate } from 'react-router-dom'

export const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [validateEmail, setValidateEmail] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const navigate = useNavigate();

    onAuthStateChanged(auth, function (user) {
        if (user) {
            Swal.fire({
                title: 'Oops...',
                text: 'You are already signed in!',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            })

            navigate('/');
        }
    });

    if (auth.currentUser) {
        Swal.fire({
            title: 'Oops...',
            text: 'You are already signed in!',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#6c3d1f',
            allowEnterKey: true,
        })

        navigate('/');
    }

    useEffect(() => {
        if (validateEmail !== 'true') {
            return setIsBtnDisabled(true);
        }

        return setIsBtnDisabled(false);
    }, [validateEmail]);

    const isTouchedHandler = () =>
        setIsTouched(true);

    const onEmailBlur = (e) =>
        setValidateEmail(validate.email(e.target.value));

    const onEmailChange = (e) => {
        isTouchedHandler();

        setEmail(e.target.value);
    }

    const resetPasswordHandler = async (e) => {
        e.preventDefault();
        
        try {
            const res = await sendPasswordResetEmail(auth, email);

            console.log(res);

            Swal.fire({
                title: 'Email sent successfully!',
                text: `Check your mail!`,
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            });

            navigate('/login');
        } catch (error) {
            console.log(error.message);

            Swal.fire({
                title: 'Email sending failed',
                text: 'Sorry, we were unable to send an email at the moment. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Go Back',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            })
        }
    }

    return (
        <div className={styles['general-wrapper']}>
            <form 
                onSubmit={resetPasswordHandler}
                className={styles['form']}
            >
                <div className={styles['title-wrapper']}>
                    <h1 className={styles['title']}>Reset Password</h1>
                    <p className={styles['sub-title']}>
                        An email, with instructions to reseting your password, will be sent to
                        {
                            email === ''
                                ? ' the submitted email address'
                                : (
                                    <span className={styles['dynamic-email']}>
                                        {` ${email}`}
                                    </span>
                                )
                        }
                        !
                    </p>
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="email" className={styles['input-item-label']}>Email</label>
                    <div className={styles['input-wrapper']}>
                        <input
                            className={styles['input-item']}
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={onEmailChange}
                            onBlur={onEmailBlur}
                        />
                        {
                            isTouched
                                ? <AuthValidationIcon validation={validateEmail} />
                                : null
                        }
                    </div>
                    {
                        isTouched
                            ? <AuthValidation text={validateEmail} />
                            : null
                    }
                </div>
                <button type='submit' className={isBtnDisabled ? styles['submit-btn-disabled'] : styles['submit-btn']} disabled={isBtnDisabled}>Send Email</button>
            </form>
        </div>
    );
}