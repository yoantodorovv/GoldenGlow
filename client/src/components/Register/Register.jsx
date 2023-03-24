import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { auth, authGoogleProvider } from '../../services/firebaseService'
import * as validate from '../../services/validationService'
import Swal from 'sweetalert2'

import { AuthValidation } from '../AuthValidation/AuthValidation'
import { AuthValidationIcon } from '../AuthValidationIcon/AuthValidationIcon'

import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './Register.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import register from '../../../public/images/Register/register.png'

export const Register = () => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });
    const [validateFormValues, setValidateFormValues] = useState({
        fullName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [isTouched, setIsTouched] = useState({
        fullName: false,
        email: false,
        password: false,
        repeatPassword: false,
    });
    const [passwordType, setPasswordType] = useState('password');
    const [repeatPasswordType, setRepeatPasswordType] = useState('password');
    const navigate = useNavigate();

    onAuthStateChanged(auth, function (user) {
        if (user) {
            Swal.fire({
                title: 'Oops...',
                text: 'You are already signed up!.',
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
            text: 'You are already signed up!.',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#6c3d1f',
            allowEnterKey: true,
        })

        navigate('/');
    }

    const isTouchedHandler = (e) =>
        setIsTouched(state => ({ ...state, [e.target.name]: true }));

    useEffect(() => {
        const validationArr = Array.from(Object.values(validateFormValues)).filter(x => x !== 'true');

        if (validationArr.length > 0) {
            return setIsBtnDisabled(true)
        }

        return setIsBtnDisabled(false);
    }, [validateFormValues.fullName,
    validateFormValues.email,
    validateFormValues.password,
    validateFormValues.repeatPassword,
    ]);

    const formValuesValidate = {
        fullName: validate.fullName,
        email: validate.email,
        password: validate.password,
        repeatPassword: validate.repeatPassword,
    }

    const onChangeHandler = (e) => {
        isTouchedHandler(e);

        return setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onBlurHandler = (e) => {
        const validationError = formValuesValidate[e.target.name](e.target.value, formValues.password);

        return setValidateFormValues(state => ({ ...state, [e.target.name]: validationError }))
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, formValues.email, formValues.password);
            
            console.log(auth.currentUser);

            Swal.fire({
                title: 'Sign Up successful',
                text: 'Thank you for signing up!',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            });

            await updateProfile(auth.currentUser, {
                displayName: formValues.fullName
            });

            navigate('/');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                Swal.fire({
                    title: 'Sign Up failed',
                    text: 'The email address you entered is already registered. Please try another email address.',
                    icon: 'error',
                    confirmButtonText: 'Go Back',
                    confirmButtonColor: '#6c3d1f',
                    allowEnterKey: true,
                })
            } else {
                Swal.fire({
                    title: 'Sign Up failed',
                    text: 'Sorry, we were unable to sign you up. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Go Back',
                    confirmButtonColor: '#6c3d1f',
                    allowEnterKey: true,
                })
            }
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, authGoogleProvider);

            Swal.fire({
                title: 'Sign Up successful',
                text: 'Thank you for signing up!',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#6c3d1f',
                allowEnterKey: true,
            });

            navigate('/');
        } catch (error) {
            if (error.code === 'auth/account-exists-with-different-credential') {
                Swal.fire({
                    title: 'Sign Up failed',
                    text: 'The email address you entered is already registered. Please try another email address.',
                    icon: 'error',
                    confirmButtonText: 'Go Back',
                    confirmButtonColor: '#6c3d1f',
                    allowEnterKey: true,
                })
            } else {
                Swal.fire({
                    title: 'Sign Up failed',
                    text: 'Sorry, we were unable to sign you up. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Go Back',
                    confirmButtonColor: '#6c3d1f',
                    allowEnterKey: true,
                })
            }
        }
    }

    const passwordTypeHandler = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
            return;
        }

        setPasswordType('password')
    }

    const repeatPasswordTypeHandler = () => {
        if (repeatPasswordType === 'password') {
            setRepeatPasswordType('text');
            return;
        }

        setRepeatPasswordType('password');
    }

    return (
        <div className={styles['general-wrapper']}>
            <div className={styles['image-wrapper']}>
                <img src={register} alt="Image of clothes" />
            </div>
            <form onSubmit={onFormSubmit} className={styles['form']}>
                <div className={styles['title-wrapper']}>
                    <h1 className={styles['title']}>Sign Up</h1>
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="fullName" className={styles['input-item-label']}>Full Name</label>
                    <div className={styles['input-wrapper']}>
                        <input
                            className={styles['input-item']}
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={formValues.fullName}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                        />
                        {
                            isTouched.fullName
                                ? <AuthValidationIcon validation={validateFormValues.fullName} />
                                : null
                        }
                    </div>
                    {
                        isTouched.fullName
                            ? <AuthValidation text={validateFormValues.fullName} />
                            : null
                    }
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="email" className={styles['input-item-label']}>Email</label>
                    <div className={styles['input-wrapper']}>
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
                                ? <AuthValidationIcon validation={validateFormValues.email} />
                                : null
                        }
                    </div>
                    {
                        isTouched.email
                            ? <AuthValidation text={validateFormValues.email} />
                            : null
                    }
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="password" className={styles['input-item-label']}>Password</label>
                    <div className={styles['input-wrapper']}>
                        <input
                            className={styles['input-item']}
                            type={passwordType}
                            name="password"
                            id="password"
                            value={formValues.password}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                        />
                        <button type="button" onClick={passwordTypeHandler} className={styles['hide-password']}>
                            {
                                passwordType === 'password'
                                    ? <FontAwesomeIcon icon={faEye} />
                                    : <FontAwesomeIcon icon={faEyeSlash} />
                            }
                        </button>
                        {
                            isTouched.password
                                ? <AuthValidationIcon validation={validateFormValues.password} />
                                : null
                        }
                    </div>
                    {
                        isTouched.password
                            ? <AuthValidation text={validateFormValues.password} />
                            : null
                    }
                </div>
                <div className={styles['input-item-wrapper']}>
                    <label htmlFor="repeatPassword" className={styles['input-item-label']}>Repeat Password</label>
                    <div className={styles['input-wrapper']}>
                        <input
                            className={styles['input-item']}
                            type={repeatPasswordType}
                            name="repeatPassword"
                            id="repeatPassword"
                            value={formValues.repeatPassword}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                        />
                        <button type="button" onClick={repeatPasswordTypeHandler} className={styles['hide-password']}>
                            {
                                repeatPasswordType === 'password'
                                    ? <FontAwesomeIcon icon={faEye} />
                                    : <FontAwesomeIcon icon={faEyeSlash} />
                            }
                        </button>
                        {
                            isTouched.repeatPassword
                                ? <AuthValidationIcon validation={validateFormValues.repeatPassword} />
                                : null
                        }
                    </div>
                    {
                        isTouched.repeatPassword
                        ? <AuthValidation text={validateFormValues.repeatPassword} />
                        : null
                    }
                </div>

                <p className={styles['login-btn-p']}>Already have an account? <Link to="/login" className={styles['login-btn']}>Sign In</Link></p>

                <button
                    type='button'
                    onClick={signInWithGoogle}
                    className={styles['google-btn']}
                >
                    <FontAwesomeIcon icon={faGoogle} className={styles['google-icon']} size="lg" />
                    Continue with Google
                </button>
                <button type='submit' className={isBtnDisabled ? styles['submit-btn-disabled'] : styles['submit-btn']} disabled={isBtnDisabled}>Sign Up</button>

                <Link to="/" className={styles['back-btn']}>
                    <FontAwesomeIcon className={styles['back-btn-icon']} icon={faArrowLeftLong} />
                    Home
                </Link>
            </form>
        </div>
    );
}