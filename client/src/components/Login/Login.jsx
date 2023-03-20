import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import * as validate from './services/validationService'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../../services/firebaseService'
import Swal from 'sweetalert2'

import styles from './Login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import login from '../../../public/images/Login/login.png'
export const Login = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [validateFormValues, setValidateFormValues] = useState({
        email: '',
        password: '',
    });
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [isTouched, setIsTouched] = useState({
        email: false,
        password: false,
    });
    const navigate = useNavigate();

    const isTouchedHandler = (e) =>
        setIsTouched(state => ({ ...state, [e.target.name]: true }));

    useEffect(() => {
        const validationArr = Array.from(Object.values(validateFormValues)).filter(x => x !== 'true');

        if (validationArr.length > 0) {
            return setIsBtnDisabled(true)
        }

        return setIsBtnDisabled(false);
    }, [validateFormValues.email, validateFormValues.password]);

    const formValuesValidate = {
        email: validate.email,
        password: validate.password,
    }

    const onChangeHandler = (e) => {
        isTouchedHandler(e);

        return setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onBlurHandler = (e) => {
        const validationError = formValuesValidate[e.target.name](e.target.value);

        return setValidateFormValues(state => ({ ...state, [e.target.name]: validationError }))
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signInWithEmailAndPassword(auth, formValues.email, formValues.password);

            Swal.fire({
                title: 'Sign In successful',
                text: `Welocome back, ${res.user.email}!`,
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            });

            navigate('/')
        } catch (error) {
            Swal.fire({
                title: 'Sign In failed',
                text: 'Sorry, we were unable to sing you in. Please check your username and password and try again later.',
                icon: 'error',
                confirmButtonText: 'Go Back',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            })
        }
    }

    return (
        <div className={styles['general-wrapper']}>
            <div className={styles['image-wrapper']}>
                <img src={login} alt="Image of clothes" />
            </div>
            <form onSubmit={onFormSubmit} className={styles['form']}>
                <div className={styles['title-wrapper']}>
                    <h1 className={styles['title']}>Sign In</h1>
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="email" className={styles['input-item-label']}>Email</label>
                    <input
                        className={styles['input-item']}
                        type="text"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />
                    {
                        isTouched.email
                        ? (
                            <>
                                <div className={styles['validate']}>
                                    {
                                        validateFormValues.email == 'true'
                                            ? <FontAwesomeIcon className={styles['icon-check']} icon={faCheck} />
                                            : <FontAwesomeIcon className={styles['icon-error']} icon={faXmark} />
                                    }
                                </div>
                                {
                                    validateFormValues.email !== 'true'
                                        ? <div className={styles['error']}>
                                            <p>{validateFormValues.email}</p>
                                        </div>
                                        : null
                                }
                            </>
                        )
                        : null
                    }
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="password" className={styles['input-item-label']}>Password</label>
                    <input
                        className={styles['input-item']}
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />
                    {
                        isTouched.password
                        ? (
                            <>
                                <div className={styles['validate']}>
                                    {
                                        validateFormValues.password == 'true'
                                            ? <FontAwesomeIcon className={styles['icon-check']} icon={faCheck} />
                                            : <FontAwesomeIcon className={styles['icon-error']} icon={faXmark} />
                                    }
                                </div>
                                {
                                    validateFormValues.password !== 'true'
                                        ? <div className={styles['error']}>
                                            <p>{validateFormValues.password}</p>
                                        </div>
                                        : null
                                }
                            </>
                        )
                        : null
                    }
                </div>

                <p className={styles['register-btn-p']}>Don't have an account? <Link to="/register" className={styles['register-btn']}>Sign Up</Link></p>

                <button type='button' className={styles['google-btn']}>
                    <FontAwesomeIcon icon={faGoogle} className={styles['google-icon']} size="lg" />
                    Continue with Google
                </button>
                <button type='submit' className={isBtnDisabled ? styles['submit-btn-disabled'] : styles['submit-btn']} disabled={isBtnDisabled}>Sign In</button>

                <Link to="/" className={styles['back-btn']}>
                    <FontAwesomeIcon className={styles['back-btn-icon']} icon={faArrowLeftLong} />
                    Home
                </Link>
            </form>
        </div>
    );
}